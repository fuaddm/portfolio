"use client";
import { righteous } from "@/app/[locale]/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";
import meWebp from "~/me.webp";
import { Burger } from "@/components/Burger";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

const Header = () => {
  return (
    <motion.div
      initial={{
        translateY: -20,
        opacity: 0,
      }}
      whileInView={{
        translateY: 0,
        opacity: 1,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
      }}
      className="container relative z-50 flex items-center justify-between py-11"
    >
      <Logo />
      <Nav />
      <Burger />
    </motion.div>
  );
};

const Logo = () => {
  return (
    <Link
      href="/"
      className="flex w-fit items-center gap-3"
    >
      <div className="h-8 w-8 overflow-hidden rounded-xl">
        <Image
          src={meWebp}
          className="h-full w-full object-cover"
          alt=""
        />
      </div>
      <div
        className={cn({
          "text-lg text-foreground": true,
          [righteous.className]: true,
        })}
      >
        Fuad
      </div>
    </Link>
  );
};

const Nav = () => {
  const t = useTranslations("Navs");
  return (
    <nav className="hidden w-fit items-center gap-5 md:flex">
      <Link
        href="/work"
        className="text-base font-medium text-foreground"
      >
        /<span className="transition-opacity duration-300 md:hover:opacity-60">{t("work")}</span>
      </Link>
      <Link
        href="/about"
        className="text-base font-medium text-foreground"
      >
        /<span className="transition-opacity duration-300 md:hover:opacity-60">{t("about")}</span>
      </Link>
      <Link
        href="/contact"
        className="text-base font-medium text-foreground"
      >
        /<span className="transition-opacity duration-300 md:hover:opacity-60">{t("contact")}</span>
      </Link>
    </nav>
  );
};

export { Header };
