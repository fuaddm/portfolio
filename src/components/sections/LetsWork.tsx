"use client";
import { motion } from "framer-motion";
import { Section } from "./Section";
import { ReactNode, useRef } from "react";
import { useHover } from "usehooks-ts";
import { MoveUpRight } from "lucide-react";
import { Linkedin } from "@/icons/Linkedin";
import { Github } from "@/icons/Github";
import { useTranslations } from "next-intl";

const LetsWork = () => {
  const t = useTranslations("WorkTogether");
  return (
    <Section title={t("title")}>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-[1fr_min-content_min-content]">
        <EmailCard />
        <SocialCard path="https://www.linkedin.com/in/fuaddm/">
          <div className="grid h-full place-items-center">
            <Linkedin className="h-10 w-10 fill-[#0077B5]" />
          </div>
        </SocialCard>
        <SocialCard path="https://github.com/fuaddm/">
          <div className="grid h-full place-items-center">
            <Github className="h-10 w-10 fill-white" />
          </div>
        </SocialCard>
      </div>
    </Section>
  );
};

const EmailCard = () => {
  const ref = useRef(null);
  const isHover = useHover(ref);
  const t = useTranslations("WorkTogether");

  return (
    <motion.a
      initial={false}
      animate={{
        transform: isHover ? "translateY(-4px) scale(1.01)" : "translateY(0px) scale(1)",
      }}
      ref={ref}
      href="emailto:dmirciyevfuad@gmail.com"
      className="block w-full rounded-3xl border-t border-[rgb(66,66,66)] bg-[rgb(26,26,26)] p-6"
    >
      <div className="flex items-start justify-between gap-3 md:items-center">
        <div className="flex flex-col justify-between gap-2.5 overflow-hidden">
          <div className="text-base font-normal text-[rgb(127,127,127)]">{t("greeting")}</div>
          <div className="line-clamp-1 text-xl font-bold text-foreground">dmirciyevfuad@gmail.com</div>
        </div>
        <motion.div
          animate={{ rotate: isHover ? "45deg" : "0deg" }}
          transition={{
            duration: 0.3,
          }}
          className="hidden md:block"
        >
          <MoveUpRight className="h-8 w-8 stroke-foreground" />
        </motion.div>
      </div>
    </motion.a>
  );
};

const SocialCard = ({ path = "#", children }: { path?: string; children?: ReactNode }) => {
  const ref = useRef(null);
  const isHover = useHover(ref);

  return (
    <motion.a
      initial={false}
      animate={{
        transform: isHover ? "translateY(-4px) scale(1.01)" : "translateY(0px) scale(1)",
      }}
      ref={ref}
      target="_blank"
      href={path}
      className="block h-full rounded-3xl border-t border-[rgb(66,66,66)] bg-[rgb(26,26,26)] p-6 md:w-[111px]"
    >
      {children}
    </motion.a>
  );
};

export { LetsWork };
