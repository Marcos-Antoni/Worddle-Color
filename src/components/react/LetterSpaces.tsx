import { useState, useEffect } from "react";
import { useColorStore } from "store/colorStore";

interface LetterSpacesProps {
  col?: number;
  row?: number;
}

const LetterSpaces = ({ col = 6, row = 6 }: LetterSpacesProps) => {
  const [colArray, setcolArray] = useState<number[]>([
    ...Array(col).keys(),
  ]);
  const [rowArray, setrowArray] = useState<number[]>([
    ...Array(row).keys(),
  ]);

  const { reply, color } = useColorStore();

  const funColor = (arrayStryng: string[]) => {
    const str = arrayStryng.join("");
    if (str.length < 6) {
      return `#${str.padEnd(6, "f")}`;
    }
    return `#${str}`;
  };

  useEffect(() => {
    setcolArray([...Array(col).keys()]);
    setrowArray([...Array(row).keys()]);
  }, [col, row]);

  return (
    <div>
      {colArray.map((i) => (
        <ul key={`ul-${i}`} className="flex">
          {rowArray.map((j) => (
            <li
              key={`li-${i}-${j}`}
              className="flex items-center justify-center text-[2rem] h-[60px] w-[60px] border-2 m-1 font-bold bg-white	"
              style={{
                boxShadow: `0 0 10px ${
                  reply[i] ? funColor(reply[i]) : "#00000000"
                }`,
              }}>
              {reply[i]?.[j] ? reply[i][j] : ""}
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
};

export default LetterSpaces;
