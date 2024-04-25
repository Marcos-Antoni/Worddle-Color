import { useState, useEffect } from "react";
import { useColorStore } from "../../store/colorStore.ts";

interface LetterSpacesProps {
  col?: number;
  row?: number;
}

const LetterSpaces = ({ col = 6, row = 6 }: LetterSpacesProps) => {
  // States
  const [colArray, setcolArray] = useState([...Array(col).keys()]);
  const [rowArray, setrowArray] = useState([...Array(row).keys()]);
  const [colorArray, setColorArray] = useState<string[][]>([]);

  const { reply, color, bg, setBtnBg, setRestart, time, setAlert } =
    useColorStore();

  // Functions
  const funColor = (arrayStryng: string[]) => {
    const str = arrayStryng.join("");
    if (str.length < 6) {
      return `#${str.padEnd(6, "f")}`;
    }
    return `#${str}`;
  };

  const funGameMode = () => {
    return funClassicMode();
  };

  const funClassicMode = () => {
    const yellow = "#ecc40f";
    const green = "#6aaa64";
    const gray = "#787c7e";

    const colorCor = color;
    const colorRes = reply[bg];
    const colorArray: string[] = [];

    for (let i = 0; i < colorRes.length; i++) {
      if (colorRes[i] === colorCor[i + 1]) {
        colorArray.push(green);
        setBtnBg(colorRes[i], green);
      } else if (colorCor.includes(colorRes[i])) {
        colorArray.push(yellow);
        setBtnBg(colorRes[i], yellow);
      } else {
        colorArray.push(gray);
        setBtnBg(colorRes[i], gray);
      }
    }

    setColorArray((prev) => [...prev, colorArray]);
  };

  // useEffect
  useEffect(() => {
    setcolArray([...Array(col).keys()]);
    setrowArray([...Array(row).keys()]);
  }, [col, row]);

  useEffect(() => {
    if (bg === -1) return;
    funGameMode();
  }, [bg]);

  useEffect(() => {
    console.log(color);
    if (colorArray.length === 0) return;

    if (`#${reply?.[bg]?.join("")}` === color) {
      setAlert(1);
      setColorArray([]);

      return;
    }

    if (colorArray.length < col) return;

    setAlert(3);
    setColorArray([]);
  }, [colorArray]);

  return (
    <div>
      {colArray.map((i) => (
        <ul key={`ul-${i}`} className="flex">
          {rowArray.map((j) => (
            <li
              key={`li-${i}-${j}`}
              className="flex items-center justify-center text-[2rem] h-[60px] w-[60px] border-2 m-1 font-bold bg-white transition"
              style={{
                boxShadow: `0 0 10px ${
                  reply[i] ? funColor(reply[i]) : "#00000000"
                }`,
                backgroundColor: colorArray[i]?.[j] || "#FFFFFF",
                color: bg >= i ? "#fff" : "#000",
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
