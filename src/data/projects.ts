import { nanoid } from "nanoid";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type projectType = {
  id: string;
  name: string;
  type: string;
  mainImage: StaticImport | string;
  imageCenter: boolean;
  link: string;
};

export const projects: projectType[] = [
  {
    id: nanoid(),
    name: "Orbiz",
    type: "SaaS Project",
    mainImage: "/works/orbiz1_result.webp",
    imageCenter: false,
    link: "https://orbiz.vercel.app/",
  },
  {
    id: nanoid(),
    name: "WebQuiz",
    type: "Quiz App",
    mainImage: "/works/webquiz1_result.webp",
    imageCenter: false,
    link: "https://webquiz-fd.vercel.app/",
  },
  {
    id: nanoid(),
    name: "2048",
    type: "Game",
    mainImage: "/works/2048_2_result.webp",
    imageCenter: true,
    link: "https://2048game-fd.vercel.app/",
  },
  {
    id: nanoid(),
    name: "Hunter Sale",
    type: "Coupon Website",
    mainImage: "/works/huntersale1_result.webp",
    imageCenter: false,
    link: "https://hunter-sale.com/",
  },
];
