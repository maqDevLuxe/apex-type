import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [dotPos, setDotPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setDotPos({ x: e.clientX, y: e.clientY });
      setTimeout(() => setPos({ x: e.clientX, y: e.clientY }), 50);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <div className="custom-cursor hidden md:block" style={{ left: pos.x - 10, top: pos.y - 10 }} />
      <div className="custom-cursor-dot hidden md:block" style={{ left: dotPos.x - 2, top: dotPos.y - 2 }} />
    </>
  );
};

export default CustomCursor;
