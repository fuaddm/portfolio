import { InfiniteText } from "@/components/InfiniteText/InfiniteText";
import { FAQs } from "@/components/sections/FAQs";
import { Hero } from "@/components/sections/Hero";
import { LetsWork } from "@/components/sections/LetsWork";
import { RecentWorks } from "@/components/sections/RecentWorks";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="pb-28"></div>
      <InfiniteText />
      <div className="pb-20"></div>
      <RecentWorks />
      <FAQs />
      <LetsWork />
    </>
  );
}
