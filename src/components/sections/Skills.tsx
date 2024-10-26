import { Card } from "@/components/Card";
import { Section } from "./Section";
import { FC, ReactNode } from "react";
import { ChartPie, Github, GraduationCap, Layers3, SquareTerminal, Users } from "lucide-react";

const Skills = () => {
  const skills = [
    {
      id: 1243,
      icon: <GraduationCap className="h-7 w-7 stroke-purple-300" />,
      title: "System Thinking",
    },
    {
      id: 1244,
      icon: <Users className="h-7 w-7 stroke-blue-300" />,
      title: "User Experience",
    },
    {
      id: 1245,
      icon: <SquareTerminal className="h-7 w-7 stroke-fuchsia-300" />,
      title: "Development",
    },
    {
      id: 1246,
      icon: <Layers3 className="h-7 w-7 stroke-orange-300" />,
      title: "Interface Design",
    },
    {
      id: 1247,
      icon: <ChartPie className="h-7 w-7 stroke-green-300" />,
      title: "Product Strategy",
    },
    {
      id: 1248,
      icon: <Github className="h-7 w-7 stroke-white" />,
      title: "Github",
    },
  ];
  return (
    <Section title="SKILLS">
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        {skills.map((skill) => {
          return (
            <SkillCard
              key={skill.id}
              icon={skill.icon}
              title={skill.title}
            />
          );
        })}
      </div>
    </Section>
  );
};

type SkillCardProps = {
  icon: ReactNode;
  title: string;
};

const SkillCard: FC<SkillCardProps> = ({ icon, title }) => {
  return (
    <Card className="flex items-center gap-6 p-6">
      {icon}
      <div className="text-xl font-semibold text-white">{title}</div>
    </Card>
  );
};

export { Skills };
