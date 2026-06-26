"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "../styles/Preloader.css";

export default function Preloader({ duration = 4400 }) {
  const [percent, setPercent] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const worldRef = useRef(null);

  // ── Percent counter ──
  useEffect(() => {
    let rafId = 0;
    let startTime = 0;
    let exitTimer = 0;

    const tick = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setPercent(Math.round(progress * 100));

      if (progress < 1) {
        rafId = requestAnimationFrame(tick);
        return;
      }

      exitTimer = window.setTimeout(() => setIsVisible(false), 200);
    };

    rafId = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(rafId);
      window.clearTimeout(exitTimer);
    };
  }, [duration]);

  // ── Cursor tilt (applied directly to the DOM so the spinning chars don't re-render) ──
  useEffect(() => {
    const handleMove = (e) => {
      const rx = -14 + (e.clientY / window.innerHeight - 0.5) * 30; // cursor down → tilt down
      const ry = (e.clientX / window.innerWidth - 0.5) * 30; // cursor right → turn right
      if (worldRef.current) {
        worldRef.current.style.transform = `rotateZ(-8deg) rotateX(${rx}deg) rotateY(${ry}deg)`;
      }
    };
    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
  }, []);

  // Outer (big, bold) and inner (small) cylinders.
  const outerText = "An engineer exploring the rhythm of life through code · ";
  const innerText = "CONVERSATIONAL AI • MACHINE LEARNING • FULL STACK ENGINEER • ";
  const outerChars = outerText.split("");
  const innerChars = innerText.split("");
  const outerStep = 360 / outerChars.length;
  const innerStep = 360 / innerChars.length;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="preloader-overlay"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="loader3d-stage">
            <div className="loader3d-world" ref={worldRef}>
              {/* Outer cylinder — big, bold */}
              <div className="loader3d-ring loader3d-ring--outer">
                {outerChars.map((ch, i) => (
                  <span
                    key={i}
                    className="loader3d-char loader3d-char--outer"
                    style={{ transform: `translate(-50%, -50%) rotateY(${i * outerStep}deg) translateZ(var(--r-outer))` }}
                  >
                    {ch === " " ? " " : ch}
                  </span>
                ))}
              </div>

              {/* Inner cylinder — small, sitting below the big one */}
              <div className="loader3d-inner-wrap">
                <div className="loader3d-ring loader3d-ring--inner">
                {innerChars.map((ch, i) => (
                  <span
                    key={i}
                    className="loader3d-char loader3d-char--inner"
                    style={{ transform: `translate(-50%, -50%) rotateY(${i * innerStep}deg) translateZ(var(--r-inner))` }}
                  >
                    {ch === " " ? " " : ch}
                  </span>
                ))}
                </div>
              </div>
            </div>

            <div className="loader3d-percent">{percent}%</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
