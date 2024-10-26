"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

const Fade = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      initial={{
        translateY: "20px",
        opacity: 0,
      }}
      whileInView={{
        translateY: "0px",
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
      }}
    >
      {children}
    </motion.div>
  );
};

export { Fade };
