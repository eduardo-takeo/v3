// TODO: move this to api?
import GithubIcon from "../assets/icons/github.svg?react";
import LinkedinIcon from "../assets/icons/linkedin.svg?react";
import GmailIcon from "../assets/icons/gmail.svg?react";
import { IExperience } from "@/components/ExperienceCard/ExperienceCard";
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

export const experiences: IExperience[] = [
  {
    company: "BEES",
    period: "2021- PRESENT",
    position: "Frontend Engineer",
    description:
      "Developing web applications using React, Redux, and TypeScript.",
    technologies: ["React", "Redux", "TypeScript", "React Native", "Node.js"],
  },
  {
    company: "Topaz",
    period: "2019 - 2021",
    position: "Frontend Developer",
    description:
      "Developing web applications using React, Redux, and TypeScript.",
    technologies: ["React", "Angular", "TypeScript", "Firebase"],
  },
  {
    company: "Digital Pages",
    period: "2018 - 2019",
    position: "Internship, Frontend Developer",
    description:
      "Developing web applications using React, Redux, and TypeScript.",
    technologies: ["HTML", "CSS", "Javascript"],
  },
];
