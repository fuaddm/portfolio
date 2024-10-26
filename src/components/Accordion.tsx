"use client";
import { Plus } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const Accordion = () => {
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
        <div className="text-base font-semibold text-foreground">How long does the web design process take?</div>
      </div>
      <motion.div
        initial={{ height: "0px" }}
        animate={{
          height: isOpen ? "auto" : "0px",
        }}
        className="overflow-hidden"
      >
        <div className="pb-5 ps-10 text-base font-semibold text-[rgb(102,102,102)]">
          My approach to web design revolves around understanding your specific needs and objectives. I kickstart projects with comprehensive research to grasp your brand identity, target audience,
          and project goals. From there, I craft bespoke designs that not only visually resonate but also prioritize user experience and functionality.
        </div>
      </motion.div>
    </div>
  );
};

export { Accordion };
