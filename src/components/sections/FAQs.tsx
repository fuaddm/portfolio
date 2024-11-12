import { Accordion } from "@/components/Accordion";
import { Section } from "./Section";
import { useTranslations } from "next-intl";

const FAQs = () => {
  const t = useTranslations("FAQs");
  return (
    <Section title={t("title")}>
      <div className="rounded-3xl border-t border-[rgb(66,66,66)] bg-[rgb(26,26,26)] px-4">
        <Accordion
          title={t("first.question")}
          text={t("first.answer")}
        />
        <div className="h-px w-full bg-foreground/5"></div>
        <Accordion
          title={t("second.question")}
          text={t("second.answer")}
        />
        <div className="h-px w-full bg-foreground/5"></div>
        <Accordion
          title={t("third.question")}
          text={t("third.answer")}
        />
        <div className="h-px w-full bg-foreground/5"></div>
        <Accordion
          title={t("fourth.question")}
          text={t("fourth.answer")}
        />
        <div className="h-px w-full bg-foreground/5"></div>
        <Accordion
          title={t("fifth.question")}
          text={t("fifth.answer")}
        />
      </div>
    </Section>
  );
};

export { FAQs };
