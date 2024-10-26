import { LetsWork } from "@/components/sections/LetsWork";
import { PageHero } from "@/components/sections/PageHero";
import { RecentWorks } from "@/components/sections/RecentWorks";

export default function page() {
  return (
    <>
      <PageHero
        title="Work."
        text="Here are some of my projects from the last few months."
        subText="I've had the privilege of working on diverse projects that have allowed me to hone my skills and push boundaries."
      />
      <RecentWorks />
      <LetsWork />
    </>
  );
}
