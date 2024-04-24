import { useState, useRef, useEffect } from "react";

import Delete from "components/SVG/Delete.tsx";
import { useColorStore } from "store/colorStore";

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
      className="focus:outline-none">
      {hexadecimal.map((row, index) => (
        <div
          key={index}
          className="flex justify-center gap-[10px] my-[10px]">
          {row.map((col, index) => (
            <button
              key={`${index}-${col}`}
              className="h-[60px] min-w-[45px] px-3 rounded-md font-bold uppercase text-sm"
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
