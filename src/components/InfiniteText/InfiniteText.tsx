"use client";
import { righteous } from "@/app/fonts";
import { cn } from "@/lib/utils";
import styles from "./infinite.module.css";
import { motion } from "framer-motion";

const InfiniteText = () => {
  return (
    <motion.div
      initial={{
        translateY: "100px",
        opacity: 0,
      }}
      whileInView={{
        translateY: "0px",
        opacity: 1,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
      }}
      className=""
    >
      <div className="relative flex flex-col gap-2.5 overflow-hidden">
        <div
          className={cn({
            "absolute left-0 top-0 z-10 h-full w-2.5 bg-background": true,
            [styles.boxShadowRight]: true,
          })}
        ></div>
        <div
          className={cn({
            "absolute right-0 top-0 z-10 h-full w-2.5 bg-background": true,
            [styles.boxShadowLeft]: true,
          })}
        ></div>
        <div
          className={cn({
            "flex w-max whitespace-nowrap text-3xl leading-[1] md:text-[104px]": true,
            [styles.infiniteCarousel]: true,
            [righteous.className]: true,
          })}
        >
          <div className="pe-5">• UI/UX DESIGNER • FRONTEND DEVELOPER</div>
          <div className="pe-5">• UI/UX DESIGNER • FRONTEND DEVELOPER</div>
        </div>
        <div
          className={cn({
            "flex w-max translate-x-1/2 whitespace-nowrap text-3xl leading-[1] md:text-[104px]": true,
            [styles.infiniteCarousel2]: true,
            [righteous.className]: true,
          })}
        >
          <div className="pe-5">• BACKEND DEVELOPER • PRODUCT MANAGER</div>
          <div className="pe-5">• BACKEND DEVELOPER • PRODUCT MANAGER</div>
        </div>
      </div>
    </motion.div>
  );
};

export { InfiniteText };
