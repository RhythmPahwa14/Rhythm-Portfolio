"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "../styles/Preloader.css";

const repeatText = (text, repetitions) => Array.from({ length: repetitions }, () => text).join(" ");

export default function Preloader({ duration = 3200 }) {
  const [percent, setPercent] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

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

      exitTimer = window.setTimeout(() => {
        setIsVisible(false);
      }, 200);
    };

    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      window.clearTimeout(exitTimer);
    };
  }, [duration]);

  const outerText = "An engineer exploring the rhythm of life through code.";
  const innerText = "CONVERSATIONAL AI • DIALOGFLOW • GCP • MACHINE LEARNING • AI AUTOMATION";
  // Show each line once around the ring (no repetition) so it never overlaps itself.
  const outerRingText = outerText;
  const innerRingText = innerText;

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
          <div className="preloader-shell">
            <motion.div
              className="preloader-stage"
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            >
              <svg className="preloader-svg" viewBox="0 0 400 400" aria-hidden="true">
                <defs>
                  <path
                    id="preloader-outer-path"
                    d="M 200,200 m -144,0 a 144,144 0 1,1 288,0 a 144,144 0 1,1 -288,0"
                  />
                  <path
                    id="preloader-inner-path"
                    d="M 200,200 m -101,0 a 101,101 0 1,1 202,0 a 101,101 0 1,1 -202,0"
                  />
                </defs>

                <g className="preloader-ring preloader-ring--outer">
                  {/* font-size in SVG user units so the text scales with the circle */}
                  <text className="preloader-text preloader-text--outer" fontSize="24">
                    <textPath href="#preloader-outer-path" startOffset="50%" textAnchor="middle">
                      {outerRingText}
                    </textPath>
                  </text>
                </g>

                <g className="preloader-ring preloader-ring--inner">
                  <text className="preloader-text preloader-text--inner" fontSize="12">
                    <textPath href="#preloader-inner-path" startOffset="50%" textAnchor="middle">
                      {innerRingText}
                    </textPath>
                  </text>
                </g>
              </svg>
            </motion.div>

            <div className="preloader-percent">{percent}%</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
