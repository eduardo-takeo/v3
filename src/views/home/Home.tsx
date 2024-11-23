import { useTranslation } from "react-i18next";
import "./Home.scss";
import IconLink from "@/components/IconLink/IconLink";
import GithubIcon from "../../assets/icons/github.svg?react";
import LinkedinIcon from "../../assets/icons/linkedin.svg?react";
import GmailIcon from "../../assets/icons/gmail.svg?react";

const Home = () => {
  const { t } = useTranslation();

  const socials = [
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

  return (
    <main className="main">
      <div className="main-menu">
        <div className="main-menu__presentation-card">
          <h1>{t("personalInformation.name")}</h1>
          <h3>{t("personalInformation.jobTitle")}</h3>
          <p>{t("personalInformation.presentationMessage")}</p>
        </div>

        {/* TODO: implement navigation */}
        <nav className="main-menu__navbar">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Experiences</li>
          </ul>
        </nav>

        <div className="main-menu__social">
          {socials?.map((social, index) => (
            <IconLink key={index} icon={social.icon} href={social.href} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Home;
