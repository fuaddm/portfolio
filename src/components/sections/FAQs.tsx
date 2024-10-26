import { Accordion } from "@/components/Accordion";
import { Section } from "./Section";

const FAQs = () => {
  return (
    <Section title="FAQs">
      <div className="rounded-3xl border-t border-[rgb(66,66,66)] bg-[rgb(26,26,26)] px-4">
        <Accordion />
        <div className="h-px w-full bg-foreground/5"></div>
        <Accordion />
        <div className="h-px w-full bg-foreground/5"></div>
        <Accordion />
        <div className="h-px w-full bg-foreground/5"></div>
        <Accordion />
        <div className="h-px w-full bg-foreground/5"></div>
        <Accordion />
      </div>
    </Section>
  );
};

export { FAQs };
