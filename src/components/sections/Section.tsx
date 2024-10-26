"use client";
import { righteous } from "@/app/fonts";
import { cn } from "@/lib/utils";
import { FC, ReactNode } from "react";
import { motion } from "framer-motion";

type SectionProps = {
  title: string;
  children?: ReactNode;
};

const Section: FC<SectionProps> = ({ title, children }) => {
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
      viewport={{ once: true }}
      className="container py-20"
    >
      <div
        className={cn({
          "mb-6 text-3xl": true,
          [righteous.className]: true,
        })}
      >
        {title}
      </div>
      {children}
    </motion.div>
  );
};

export { Section };
