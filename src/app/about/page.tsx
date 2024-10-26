import { Images } from "@/components/About/Images";
import { Approach } from "@/components/sections/Approach";
import { LetsWork } from "@/components/sections/LetsWork";
import { PageHero } from "@/components/sections/PageHero";
import { Skills } from "@/components/sections/Skills";

export default function page() {
  return (
    <>
      <PageHero
        title="About."
        text="I’m a frontend developer from Azerbaijan with a passion for pixels."
        subText="When I'm not designing, I'm out exploring nature, hiking, scuba diving, and surfing. Whether trekking through forests, diving into the depths of the ocean, or riding waves, I find joy and inspiration in outdoor adventures."
      />
      <Images />
      <Approach />
      <Skills />
      <LetsWork />
    </>
  );
}
