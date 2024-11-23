// TODO: move this to api?
import GithubIcon from "../assets/icons/github.svg?react";
import LinkedinIcon from "../assets/icons/linkedin.svg?react";
import GmailIcon from "../assets/icons/gmail.svg?react";
import ZeDelivery from "../assets/images/ze_delivery.jpeg";
import Topaz from "../assets/images/topaz.jpeg";
import { ICard } from "@/components/Card/Card";
import { IIconLinkProps } from "@/components/IconLink/IconLink";

export const socials: IIconLinkProps[] = [
  {
    icon: <GithubIcon />,
    href: "https://github.com/eduardo-takeo",
  },
  {
    icon: <LinkedinIcon />,
    href: "https://www.linkedin.com/in/eduardo-takeo",
  },
  {
    icon: <GmailIcon />,
    href: "mailto: eduardo.higashi.dev@gmail.com",
  },
];

export const experiences: ICard[] = [
  {
    title: "Frontend Engineer • BEES",
    period: "2021- PRESENT",
    description:
      "Developing web applications using React, Redux, and TypeScript.",
    tags: ["React", "Redux", "TypeScript", "React Native", "Node.js"],
  },
  {
    title: "Frontend Developer • Topaz",
    period: "2019 - 2021",
    description:
      "Developing web applications using React, Redux, and TypeScript.",
    tags: ["React", "Angular", "TypeScript", "Firebase"],
  },
  {
    title: "Internship, Frontend Developer • Digital Pages",
    period: "2018 - 2019",
    description:
      "Developing web applications using React, Redux, and TypeScript.",
    tags: ["HTML", "CSS", "Javascript"],
  },
];

export const projects: ICard[] = [
  {
    title: "Zé Delivery",
    description:
      "#20 most downloaded app in Brazil. Developed the new user onboarding flow.",
    banner: ZeDelivery,
    tags: ["React", "Redux", "TypeScript", "React Native", "Node.js"],
  },
  {
    title: "Topaz Servcore",
    description:
      "#20 most downloaded app in Brazil. Developed the new user onboarding flow.",
    banner: Topaz,
  },
  {
    title: "Zé Delivery",
    description:
      "#20 most downloaded app in Brazil. Developed the new user onboarding flow.",
    banner: ZeDelivery,
  },
];
