import { ProjectCard } from "@/components/ProjectCard";
import { Section } from "./Section";
import { useTranslations } from "next-intl";
import { projects, projectType } from "@/data/projects";

const RecentWorks = () => {
  const t = useTranslations("Work");
  return (
    <Section title={t("title")}>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project: projectType) => {
          return (
            <ProjectCard
              key={project.id}
              title={project.name}
              subTitle={project.type}
              imageUrl={project.mainImage}
              path={project.link}
              imageCenter={project.imageCenter}
            />
          );
        })}
      </div>
    </Section>
  );
};

export { RecentWorks };
