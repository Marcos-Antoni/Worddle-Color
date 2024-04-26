import { useState, useEffect } from "react";

import Alert from "./Alert";
import { useColorStore } from "../../../store/colorStore.ts";

interface arraySratisticsProps {
  array: number[];
  total: number;
}

export default function Statistics() {
  const [arrayStatistics, setArrayStatistics] =
    useState<arraySratisticsProps>({
      array: [0, 0, 0, 0, 0, 0, 0, 0],
      total: 0,
    });

  const { color, reply, setRestart, bg, col } = useColorStore();

  const funWin = () => {
    const lastReply = `#${reply?.[bg]?.join("") || ""}`;
    return lastReply === color;
  };

  const funExit = () => funWin() && setRestart();

  const funStastistics = () => {
    const localStorageStatistics = localStorage.getItem("statistics");
    const statistics = localStorageStatistics
      ? JSON.parse(localStorageStatistics)
      : { ...arrayStatistics };

    if (funWin()) {
      statistics.array[bg] += 1;
      statistics.total += 1;

      localStorage.setItem("statistics", JSON.stringify(statistics));
    }

    setArrayStatistics(statistics);
  };

  useEffect(() => {
    funStastistics();
  }, [bg]);

  return (
    <Alert title="ESTADÍSTICAS DE INTENTOS" funExit={funExit}>
      <div className="flex flex-col gap-[5px] w-full h-full">
        {arrayStatistics.array.map((number, index) => {
          const { total } = arrayStatistics;
          const percentage = (number / total) * 100;

          return (
            index < col && (
              <div key={index} className="flex items-center">
                <p className="flex justify-center w-[15px] h-[20px] text-sm	">
                  {index + 1}
                </p>
                <span
                  className="flex items-center justify-end px-[10px] h-[20px] bg-[#787c7e] text-[#fff] text-sm font-bold transition-all"
                  style={{
                    width:
                      percentage > 18.75
                        ? `calc(${percentage}% - 35px)`
                        : "30px",
                    transition: "width 2s",
                  }}>
                  {number}
                </span>
              </div>
            )
          );
        })}
      </div>
    </Alert>
  );
}
