import { FC, ReactNode } from "react";
import { Section } from "./Section";
import { Card } from "@/components/Card";
import { Heart, MousePointerClick, Rocket, Users } from "lucide-react";

const Approach = () => {
  const approaches = [
    {
      id: 5313,
      icon: <Users className="h-10 w-10 stroke-blue-400" />,
      title: "User centred",
      text: "The primary focus of product design is to prioritize the needs, preferences, and experiences of the end users. This would involve thorough research and understanding of the users behavior, ensuring that the product is intuitive and enjoyable to use.",
    },
    {
      id: 5314,
      icon: <MousePointerClick className="h-10 w-10 stroke-green-400" />,
      title: "Functional",
      text: "Designers must focus on creating products that not only look good but also deliver high functionality and performance. Balancing aesthetics with practicality ensures that the product meets its intended purpose effectively for its intended user base.",
    },
    {
      id: 5315,
      icon: <Rocket className="h-10 w-10 stroke-purple-400" />,
      title: "Innovative",
      text: "A key aspect of product design is fostering innovation and creativity. By pushing boundaries and thinking outside the box, designers can develop unique and groundbreaking solutions that set the product apart from competitors and meet emerging market needs.",
    },
    {
      id: 5316,
      icon: <Heart className="h-10 w-10 stroke-rose-400" />,
      title: "Ethical",
      text: "With a growing awareness of environmental and ethical concerns, product designers are increasingly focusing on creating sustainable and socially responsible products. This involves considering the product's life cycle and the overall impact on the environment.",
    },
  ];

  return (
    <Section title="MY APPROACH">
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-4">
        {approaches.map((approach) => {
          return (
            <ApproachCard
              key={approach.id}
              icon={approach.icon}
              title={approach.title}
              text={approach.text}
            />
          );
        })}
      </div>
    </Section>
  );
};

type ApproachCardProps = {
  icon: ReactNode;
  title: string;
  text: string;
};

const ApproachCard: FC<ApproachCardProps> = ({ icon, title, text }) => {
  return (
    <Card className="flex flex-col gap-3 p-6">
      {icon}
      <div className="text-xl font-semibold text-white">{title}</div>
      <div className="text-sm font-normal leading-relaxed text-[rgb(127,127,127)]">{text}</div>
    </Card>
  );
};

export { Approach };
