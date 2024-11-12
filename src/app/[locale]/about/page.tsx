import { Images } from "@/components/About/Images";
import { Approach } from "@/components/sections/Approach";
import { LetsWork } from "@/components/sections/LetsWork";
import { PageHero } from "@/components/sections/PageHero";
import { Skills } from "@/components/sections/Skills";
import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations("AboutPage");
  return (
    <>
      <PageHero
        title={t("title")}
        text={t("me")}
        subText={t("subtitle")}
      />
      <Images />
      <Approach />
      <Skills />
      <LetsWork />
    </>
  );
}
