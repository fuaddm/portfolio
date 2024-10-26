import { ProjectCard } from "@/components/ProjectCard";
import { Section } from "./Section";
import orbizPic from "~/orbiz.png";

const RecentWorks = () => {
  return (
    <Section title="RECENT WORK">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <ProjectCard
          title="Zephyr"
          subTitle="Branding & App"
          imageUrl={orbizPic}
          path="#"
        />
        <ProjectCard
          title="NovaTech"
          subTitle="Website & App"
          imageUrl={orbizPic}
          path="#"
        />
        <ProjectCard
          title="Zephyr"
          subTitle="Branding & App"
          imageUrl={orbizPic}
          path="#"
        />
        <ProjectCard
          title="NovaTech"
          subTitle="Website & App"
          imageUrl={orbizPic}
          path="#"
        />
      </div>
    </Section>
  );
};

export { RecentWorks };
