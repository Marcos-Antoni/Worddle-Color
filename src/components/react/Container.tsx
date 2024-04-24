import { useEffect, useState, useRef } from "react";
import { useColorStore } from "../../store/colorStore.ts";

import "../css/container.css";

interface FundProps {
  children: React.ReactNode;
}

const Container = ({ children }: FundProps) => {
  const { color, bg, reply, time } = useColorStore();
  const [bgStyle, setBgStyle] = useState({});
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.location.pathname === "/") {
      setBgStyle({
        background: `linear-gradient(to bottom, #00000000 70%, ${color} )`,
      });
    }
  }, [color]);

  useEffect(() => {
    if (bg <= -1) return;

    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--res-color",
        `#${reply[bg].join("") || "fff"}`
      );

      setTimeout(() => {
        if (containerRef.current) {
          containerRef.current.style.setProperty(
            "--res-color",
            `#fff`
          );
        }
      }, time);
    }
  }, [bg]);

  return (
    <div
      className="react-container flex justify-between items-center flex-col w-[100vw] h-[100vh] transition"
      style={bgStyle}
      ref={containerRef}>
      {children}
    </div>
  );
};

export default Container;
