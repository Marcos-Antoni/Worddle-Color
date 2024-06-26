import { useState, useRef, useEffect } from "react";

import Delete from "../SVG/Delete.tsx";
import { useColorStore } from "../../store/colorStore.ts";

const Keyboard = () => {
  const { setReply, btnBg } = useColorStore();

  const nav = useRef<HTMLElement>(null);

  const [hexadecimal] = useState<string[][]>([
    ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
    ["enviar", "A", "B", "C", "D", "E", "F", "borrar"],
  ]);

  const funKeyDown = (key: string) => {
    const hex = hexadecimal.flat();

    if (hex.includes(key)) {
      setReply(key);
    }

    if (key === "BACKSPACE") {
      setReply("borrar");
    }

    if (key === "ENTER") {
      setReply("enviar");
    }
  };

  useEffect(() => {
    if (nav.current) {
      nav.current.focus();
    }
  }, [nav]);

  return (
    <nav
      ref={nav}
      tabIndex={-1}
      onKeyDown={(e) => {
        const key = e.key.toUpperCase();
        e.preventDefault();
        funKeyDown(key);
      }}
      className="focus:outline-none w-full">
      {hexadecimal.map((row, index) => (
        <div
          key={index}
          className="flex justify-center sm:gap-[10px] gap-[5px] my-[10px]">
          {row.map((col, index) => (
            <button
              key={`${index}-${col}`}
              className="sm:h-[60px] h-[50px] sm:min-w-[45px] min-w-[8.75%]  sm:px-3 px-1.5 rounded-md font-bold uppercase sm:text-sm text-xs"
              style={{
                color: btnBg[col] ? "#fff" : "#1a1a1b",
                backgroundColor: btnBg[col] || "#d3d6da",
              }}
              onClick={() => {
                setReply(col);
              }}>
              {col != "borrar" ? col : <Delete />}
            </button>
          ))}
        </div>
      ))}
    </nav>
  );
};

export default Keyboard;
