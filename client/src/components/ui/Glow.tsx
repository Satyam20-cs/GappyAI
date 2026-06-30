import { useEffect, useState } from "react";

function Glow() {
  const [position, setPosition] = useState({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0"
    >
      <div
        className="absolute h-[500px] w-[500px] rounded-full bg-sky-300/20 blur-3xl transition-all duration-300"
        style={{
          left: position.x - 250,
          top: position.y - 250,
        }}
      />
    </div>
  );
}

export default Glow;