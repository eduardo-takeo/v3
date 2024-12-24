import { Trans, useTranslation } from "react-i18next";
import "./Home.scss";
import { experiences, projects, socials } from "@/content";
import IconLink from "@/components/IconLink/IconLink";
import Card from "@/components/Card/Card";
import { Link } from "react-router";
import RightArrowIcon from "../../assets/icons/right-arrow.svg?react";

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

        <nav className="main-menu__navbar">
          <ul>
            <li>
              <a href="#about">{t("navbar.about")}</a>
            </li>
            <li>
              <a href="#experiences">{t("navbar.experience")}</a>
            </li>
            <li>
              <a href="#projects">{t("navbar.projects")}</a>
            </li>
          </ul>
        </nav>

        <div className="main-menu__social">
          {socials?.map((social, index) => (
            <IconLink
              key={index}
              target="_blank"
              icon={social.icon}
              href={social.href}
            />
          ))}
        </div>
      </div>

      <section id="about" className="feed">
        <div className="feed__about">
          <p>{t("feed.about")}</p>
        </div>

        <div id="experiences" className="feed__experiences">
          {experiences?.map(({ title, period, description, tags }, index) => (
            <Card
              key={index}
              title={title}
              period={period}
              description={description}
              tags={tags}
            />
          ))}
          <Link to="/projects" className="feed__link">
            {t("general.seeResume")}
            <RightArrowIcon />
          </Link>
        </div>

        <div id="projects" className="feed__projects">
          {projects?.map(({ title, description, banner, tags = [] }, index) => (
            <Card
              key={index}
              title={title}
              description={description}
              banner={banner}
              tags={tags}
            />
          ))}
          <Link to="/projects" className="feed__link">
            {t("general.seeAllProjects")}
            <RightArrowIcon />
          </Link>
        </div>

        <footer className="footer">
          <Trans
            i18nKey="footer"
            components={{
              viteLink: (
                <a
                  href="https://vite.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              ),
              reactLink: (
                <a
                  href="https://react.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              ),
              vercelLink: (
                <a
                  href="https://vercel.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              ),
            }}
          />
        </footer>
      </section>
    </main>
  );
};

export default Home;
