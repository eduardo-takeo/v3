import Table, { ColumnType, ITableColumn } from "@/components/Table/Table";
import projects from "@/content/projects.json";
import LeftArrowIcon from "../../assets/icons/left-arrow.svg?react";
import "./Projects.scss";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";

const columns: ITableColumn[] = [
  {
    key: "created_at",
    header: "projects.table.columns.year",
    type: ColumnType.DATE,
    style: "opaque",
    size: 1,
  },
  {
    key: "name",
    header: "projects.table.columns.name",
    type: ColumnType.TEXT,
    style: "bold",
    size: 3,
  },
  {
    key: "made_at",
    header: "projects.table.columns.made_at",
    type: ColumnType.TEXT,
    style: "opaque",
    size: 2,
  },
  {
    key: "languages",
    header: "projects.table.columns.languages",
    type: ColumnType.BADGE,
    size: 6,
  },
  {
    key: "url",
    header: "projects.table.columns.page",
    type: ColumnType.LINK,
    size: 4,
  },
];

const Projects = () => {
  const { t } = useTranslation();

  return (
    <div className="container">
      <div className="projects">
        <Link to="/" className="projects__back-link">
          <LeftArrowIcon />
          {t("general.goBackToHome")}
        </Link>
        <h1 className="projects__title">{t("projects.table.title")}</h1>
        <Table columns={columns} data={projects} />
      </div>
    </div>
  );
};

export default Projects;
