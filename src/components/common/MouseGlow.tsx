import { useEffect, useState } from "react";

export default function MouseGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Use clientX and clientY to track mouse relative to viewport
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-[-1]"
      style={{
        background: `radial-gradient(circle at ${position.x}px ${position.y}px, rgba(169, 169, 169, 0.2) 0%, transparent 15%)`,
        transition: "background 0.1s ease",
        backdropFilter: "blur(20px)", // Adding a blur effect
      }}
    />
  );
  
  
}
