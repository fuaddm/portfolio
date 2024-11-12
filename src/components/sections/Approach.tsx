import { FC, ReactNode } from "react";
import { Section } from "./Section";
import { Card } from "@/components/Card";
import { Heart, MousePointerClick, Rocket, Users } from "lucide-react";
import { useTranslations } from "next-intl";

const Approach = () => {
  const t = useTranslations("AboutPage");
  const approaches = [
    {
      id: 5313,
      icon: <Users className="h-10 w-10 stroke-blue-400" />,
      title: t("approach.first.title"),
      text: t("approach.first.text"),
    },
    {
      id: 5314,
      icon: <MousePointerClick className="h-10 w-10 stroke-green-400" />,
      title: t("approach.second.title"),
      text: t("approach.second.text"),
    },
    {
      id: 5315,
      icon: <Rocket className="h-10 w-10 stroke-purple-400" />,
      title: t("approach.third.title"),
      text: t("approach.third.text"),
    },
    {
      id: 5316,
      icon: <Heart className="h-10 w-10 stroke-rose-400" />,
      title: t("approach.fourth.title"),
      text: t("approach.fourth.text"),
    },
  ];

  return (
    <Section title={t("approach.title")}>
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
