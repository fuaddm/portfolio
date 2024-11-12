"use client";
import { righteous } from "@/app/[locale]/fonts";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const Hero = () => {
  return (
    <motion.div
      initial={{
        translateY: "40px",
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
      className="container pb-20 pt-24"
    >
      <div className="flex flex-col gap-6">
        <HireMe />
        <Greeting />
        <SubText />
      </div>
    </motion.div>
  );
};

const HireMe = () => {
  const t = useTranslations("HomePage");

  return (
    <div className="flex w-fit items-center gap-2.5 rounded-full border-t border-[rgb(66,66,66)] bg-[rgb(26,26,26)] px-4 py-2">
      <div className="h-2.5 w-2.5 rounded-full bg-[rgb(111,173,97)]"></div>
      <div className="text-sm font-medium text-white">{t("isAvailable")}</div>
    </div>
  );
};

const Greeting = () => {
  const t = useTranslations("HomePage");

  return (
    <div
      className={cn({
        "text-[42px] font-normal leading-[1.3] text-white md:text-[54px] xl:text-6xl": true,
        [righteous.className]: true,
      })}
    >
      {t("introduction.first")}
      <br />
      {t("introduction.second")}
      <br />
      {t("introduction.third")}
    </div>
  );
};

const SubText = () => {
  const t = useTranslations("HomePage");

  return <div className="text-base font-normal text-[rgb(145,145,145)] xl:max-w-[720px]">{t("summary")}</div>;
};

export { Hero };
