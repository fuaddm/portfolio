"use client";
import { MoveUpRight } from "lucide-react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";
import { FC, useRef } from "react";
import { useHover } from "usehooks-ts";
import { motion } from "framer-motion";

export type ProjectCardProps = {
  title: string;
  subTitle: string;
  imageUrl?: StaticImport | string;
  path: string;
};

const MotionLink = motion.create(Link);

const ProjectCard: FC<ProjectCardProps> = ({ title, subTitle, imageUrl, path }) => {
  const ref = useRef(null);
  const isHover = useHover(ref);

  return (
    <MotionLink
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
      <div className="aspect-[1/0.6] w-full overflow-hidden rounded-xl bg-background">
        {imageUrl && (
          <Image
            src={imageUrl}
            className="h-full w-full object-cover"
            alt=""
          />
        )}
      </div>
    </MotionLink>
  );
};

export { ProjectCard };
