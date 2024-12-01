import Table, { ColumnType, ITableColumn } from "@/components/Table/Table";
import projects from "@/content/projects.json";
import "./Projects.scss";
import { useTranslation } from "react-i18next";

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
  {
    key: "homepage",
    header: "projects.table.columns.page",
    type: ColumnType.LINK,
  },
];

const Projects = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("projects.table.title")}</h1>
      <Table columns={columns} data={projects} />
    </div>
  );
};

export default Projects;
