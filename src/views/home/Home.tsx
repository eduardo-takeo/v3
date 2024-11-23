import { useTranslation } from "react-i18next";
import "./Home.scss";

const Home = () => {
  const { t } = useTranslation();

  return (
    <main className="main">
      <div>
        <h1>{t("name")}</h1>
        <h3>{t("jobTitle")}</h3>

        <div>
          <button>Github</button>
          <button>Linkedin</button>
          <button>Gmail</button>
        </div>
      </div>
    </main>
  );
};

export default Home;
