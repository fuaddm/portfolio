import { LetsWork } from "@/components/sections/LetsWork";
import { PageHero } from "@/components/sections/PageHero";
import { RecentWorks } from "@/components/sections/RecentWorks";
import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations("WorkPage");
  return (
    <>
      <PageHero
        title={t("title")}
        text={t("me")}
        subText={t("subtitle")}
      />
      <RecentWorks />
      <LetsWork />
    </>
  );
}
