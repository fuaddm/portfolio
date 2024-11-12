import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("Footer");
  return (
    <div className="container flex justify-center py-8">
      <div className="text-sm font-normal text-[rgb(127,127,127)]">{t("main")}</div>
    </div>
  );
};

export { Footer };
