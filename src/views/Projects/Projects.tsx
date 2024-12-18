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
  },
  { key: "name", header: "projects.table.columns.name", type: ColumnType.TEXT },
  {
    key: "description",
    header: "projects.table.columns.description",
    type: ColumnType.TEXT,
  },
  {
    key: "languages",
    header: "projects.table.columns.languages",
    type: ColumnType.BADGE,
  },
];

const Projects = () => {
  const { t } = useTranslation();

  return (
    <div className="container">
      <div className="projects">
        <Link to="/" className="back-link">
          <LeftArrowIcon />
          {t("general.goBackToHome")}
        </Link>
        <h1>{t("projects.table.title")}</h1>
        <Table columns={columns} data={projects} />
      </div>
    </div>
  );
};

export default Projects;
