"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/**
 * ScrollProgress
 * A slim fixed bar at the very top of the viewport that fills with the brand
 * gradient as the visitor scrolls — deliberately echoes a YouTube video's own
 * red progress scrubber. This is the page's signature visual detail: small,
 * functional, and thematically tied to the product rather than decorative.
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 40,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[3px] origin-left bg-glow-red z-[60]"
      aria-hidden="true"
    />
  );
}
