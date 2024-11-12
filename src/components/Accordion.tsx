"use client";
import { Plus } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type AccordionProps = {
  title: string;
  text: string;
};

const Accordion = ({ title, text }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div
        onClick={() => setIsOpen((isOpen) => !isOpen)}
        className="flex cursor-pointer gap-4 py-5"
      >
        <Plus
          className={cn({
            "max-h-6 min-h-6 min-w-6 max-w-6 stroke-[rgb(114,176,165)] stroke-[2px] opacity-50 transition duration-300": true,
            "rotate-45": isOpen,
          })}
        />
        <div className="text-base font-semibold text-foreground">{title}</div>
      </div>
      <motion.div
        initial={{ height: "0px" }}
        animate={{
          height: isOpen ? "auto" : "0px",
        }}
        className="overflow-hidden"
      >
        <div className="pb-5 ps-10 text-base font-semibold text-[rgb(102,102,102)]">{text}</div>
      </motion.div>
    </div>
  );
};

export { Accordion };
