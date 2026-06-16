"use client";

import { motion, useReducedMotion } from "framer-motion";

const ORBS = [
  { className: "-left-24 top-16 h-72 w-72", delay: 0 },
  { className: "-right-20 bottom-12 h-80 w-80", delay: 1.2 },
  { className: "left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2", delay: 0.6 },
] as const;

const PARTICLES = Array.from({ length: 18 }, (_, index) => ({
  id: index,
  left: `${8 + ((index * 17) % 84)}%`,
  top: `${6 + ((index * 23) % 88)}%`,
  size: 2 + (index % 3),
  duration: 14 + (index % 7) * 2,
  delay: (index % 5) * 0.8,
}));

export function NotFoundBackground() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="not-found-grid absolute inset-0" />

      {ORBS.map((orb) => (
        <motion.div
          key={orb.className}
          className={`not-found-orb absolute rounded-full blur-3xl ${orb.className}`}
          animate={
            prefersReducedMotion
              ? undefined
              : {
                  scale: [1, 1.08, 1],
                  opacity: [0.45, 0.7, 0.45],
                }
          }
          transition={
            prefersReducedMotion
              ? undefined
              : {
                  duration: 9,
                  delay: orb.delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
        />
      ))}

      <motion.div
        className="not-found-watermark absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2 select-none text-[clamp(7rem,28vw,18rem)] font-normal leading-none tracking-[-0.06em]"
        animate={
          prefersReducedMotion
            ? undefined
            : {
                y: [0, -12, 0],
                opacity: [0.04, 0.07, 0.04],
              }
        }
        transition={
          prefersReducedMotion
            ? undefined
            : {
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }
        }
      >
        404
      </motion.div>

      {PARTICLES.map((particle) => (
        <motion.span
          key={particle.id}
          className="not-found-particle absolute rounded-full"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
          }}
          animate={
            prefersReducedMotion
              ? undefined
              : {
                  y: [0, -18, 0],
                  opacity: [0.15, 0.55, 0.15],
                }
          }
          transition={
            prefersReducedMotion
              ? undefined
              : {
                  duration: particle.duration,
                  delay: particle.delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
        />
      ))}

      <div className="not-found-vignette absolute inset-0" />
    </div>
  );
}
