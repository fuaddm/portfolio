"use client";
import { MoveUpRight } from "lucide-react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { FC, useRef } from "react";
import { useHover } from "usehooks-ts";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export type ProjectCardProps = {
  title: string;
  subTitle: string;
  imageUrl?: StaticImport | string;
  path: string;
  imageCenter?: boolean;
};

const ProjectCard: FC<ProjectCardProps> = ({ title, subTitle, imageUrl, imageCenter = false, path }) => {
  const ref = useRef(null);
  const isHover = useHover(ref);

  return (
    <motion.a
      target="_blank"
      initial={false}
      animate={{
        transform: isHover ? "translateY(-4px) scale(1.01)" : "translateY(0px) scale(1)",
      }}
      ref={ref}
      href={path}
      className="block rounded-3xl border-t border-[rgb(66,66,66)] bg-[rgb(26,26,26)] p-4"
    >
      <div className="mb-4 flex items-center justify-between p-2">
        <div className="flex flex-col justify-between gap-2.5">
          <div className="text-xl font-bold text-foreground">{title}</div>
          <div className="text-base font-normal text-[rgb(127,127,127)]">{subTitle}</div>
        </div>
        <motion.div
          animate={{ rotate: isHover ? "45deg" : "0deg" }}
          transition={{
            duration: 0.3,
          }}
        >
          <MoveUpRight className="h-8 w-8 stroke-foreground" />
        </motion.div>
      </div>
      <div className="relative aspect-[1/0.6] w-full overflow-hidden rounded-xl bg-background">
        {imageUrl && (
          <Image
            src={imageUrl}
            fill
            className={cn({
              "h-full w-full object-cover": true,
              "object-contain": imageCenter,
            })}
            alt={title}
          />
        )}
      </div>
    </motion.a>
  );
};

export { ProjectCard };
