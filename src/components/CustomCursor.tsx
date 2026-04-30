"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [hovering, setHovering] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 300, damping: 28, mass: 0.5 };
  const haloX = useSpring(mouseX, { stiffness: 120, damping: 20, mass: 0.8 });
  const haloY = useSpring(mouseY, { stiffness: 120, damping: 20, mass: 0.8 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setVisible(true);
    };
    const down = () => setClicking(true);
    const up = () => setClicking(false);
    const leave = () => setVisible(false);
    const enter = () => setVisible(true);

    const addHover = () => {
      document.querySelectorAll("a, button, [role='button']").forEach((el) => {
        el.addEventListener("mouseenter", () => setHovering(true));
        el.addEventListener("mouseleave", () => setHovering(false));
      });
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    document.documentElement.addEventListener("mouseleave", leave);
    document.documentElement.addEventListener("mouseenter", enter);
    addHover();

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      document.documentElement.removeEventListener("mouseleave", leave);
      document.documentElement.removeEventListener("mouseenter", enter);
    };
  }, [mouseX, mouseY]);

  if (typeof window !== "undefined" && window.innerWidth < 768) return null;

  return (
    <>
      {/* Punto central — sigue directo al cursor */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full mix-blend-difference"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
          width: clicking ? 6 : 8,
          height: clicking ? 6 : 8,
          background: "#ffffff",
          opacity: visible ? 1 : 0,
          transition: "width 0.15s, height 0.15s, opacity 0.3s",
        }}
      />

      {/* Halo exterior — sigue con spring delay */}
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none rounded-full border"
        style={{
          x: haloX,
          y: haloY,
          translateX: "-50%",
          translateY: "-50%",
          width: hovering ? 48 : clicking ? 20 : 36,
          height: hovering ? 48 : clicking ? 20 : 36,
          borderColor: "rgba(37, 99, 235, 0.8)",
          boxShadow: hovering
            ? "0 0 20px rgba(37, 99, 235, 0.5), inset 0 0 10px rgba(37, 99, 235, 0.1)"
            : "0 0 10px rgba(37, 99, 235, 0.3)",
          opacity: visible ? 1 : 0,
          transition: "width 0.2s ease, height 0.2s ease, opacity 0.3s, box-shadow 0.2s",
        }}
      />
    </>
  );
}
