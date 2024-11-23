import { useTranslation } from "react-i18next";
import "./Home.scss";
import { experiences, socials } from "@/content";
import IconLink from "@/components/IconLink/IconLink";
import ExperienceCard from "@/components/ExperienceCard/ExperienceCard";

const Home = () => {
  const { t } = useTranslation();

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
            <li>About</li>
            <li>Experiences</li>
            <li>Projects</li>
          </ul>
        </nav>

        <div className="main-menu__social">
          {socials?.map((social, index) => (
            <IconLink key={index} icon={social.icon} href={social.href} />
          ))}
        </div>
      </div>

      <section className="feed">
        <div className="feed__summary">
          <p>{t("feed.summary")}</p>
        </div>

        <div className="feed__experiences">
          {experiences?.map((experience, index) => (
            <ExperienceCard
              key={index}
              company={experience.company}
              period={experience.period}
              position={experience.position}
              description={experience.description}
              technologies={experience.technologies}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
