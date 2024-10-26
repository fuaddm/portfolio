"use client";
import { useSidebarStore } from "@/store/sidebar";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";

const Sidebar = () => {
  const isOpen = useSidebarStore((state) => state.isOpen);
  const toggle = useSidebarStore((state) => state.toggle);

  const variants = {
    hidden: (i: number) => ({
      transform: `translateX(${i * 6}px)`,
      opacity: 0,
      transition: {
        delay: (3 - i) * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
    visible: (i: number) => ({
      transform: "translateX(0px)",
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  const lineVariants = {
    hidden: (i: number) => ({
      width: "0%",
      opacity: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
    visible: (i: number) => ({
      width: "100%",
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  useEffect(() => {
    if (window !== undefined) {
      if (isOpen) {
        window.document.body.style.overflow = "hidden";
      } else {
        window.document.body.style.overflow = "";
      }
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.5,
          }}
          className="fixed left-0 top-0 z-40 block h-screen w-full bg-inherit pt-[132px] md:hidden md:pt-[120px]"
        >
          <div className="container">
            <div className="px-3">
              <nav className="flex flex-col">
                <motion.div
                  initial={"hidden"}
                  animate={"visible"}
                  exit={"hidden"}
                  variants={variants}
                  custom={1}
                >
                  <Link
                    href="/work"
                    onClick={toggle}
                    className="text-[40px] font-semibold leading-tight text-foreground"
                  >
                    /Work
                  </Link>
                </motion.div>
                <motion.div
                  initial={"hidden"}
                  animate={"visible"}
                  exit={"hidden"}
                  variants={variants}
                  custom={2}
                >
                  <Link
                    href="/about"
                    onClick={toggle}
                    className="text-[40px] font-semibold leading-tight text-foreground"
                  >
                    /About
                  </Link>
                </motion.div>
                <motion.div
                  initial={"hidden"}
                  animate={"visible"}
                  exit={"hidden"}
                  variants={variants}
                  custom={3}
                >
                  <Link
                    href="/contact"
                    onClick={toggle}
                    className="text-[40px] font-semibold leading-tight text-foreground"
                  >
                    /Contact
                  </Link>
                </motion.div>
              </nav>
              <div className="py-8">
                <motion.div
                  initial={"hidden"}
                  animate={"visible"}
                  exit={"hidden"}
                  variants={lineVariants}
                  custom={1}
                  className="mx-auto h-px w-full bg-[rgb(34,34,34)]"
                ></motion.div>
              </div>
              <motion.div
                initial={"hidden"}
                animate={"visible"}
                exit={"hidden"}
                variants={variants}
                custom={3}
                className="text-base leading-relaxed text-foreground"
              >
                Linkedin
              </motion.div>
              <motion.div
                initial={"hidden"}
                animate={"visible"}
                exit={"hidden"}
                variants={variants}
                custom={3}
                className="text-base leading-relaxed text-foreground"
              >
                Github
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export { Sidebar };
