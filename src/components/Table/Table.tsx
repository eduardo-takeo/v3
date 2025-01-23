import { useTranslation } from "react-i18next";
import Badge from "@/components/Badge/Badge";
import GithubIcon from "../../assets/icons/github.svg?react";
import PlayStoreIcon from "../../assets/icons/google-play.svg?react";
import AppStoreIcon from "../../assets/icons/app-store.svg?react";
import UrlIcon from "../../assets/icons/url.svg?react";
import "./Table.scss";
import { getUrlType } from "@/helpers/utils";

export enum ColumnType {
  TEXT = "text",
  NUMBER = "number",
  DATE = "date",
  LINK = "link",
  BADGE = "badge",
}

export type TableColumnStyle = "opaque" | "bold";

export type LinkType = "github" | "playStore" | "appStore" | "commonUrl";

export interface ITableColumn {
  key: string;
  header: string;
  type: ColumnType;
  style?: TableColumnStyle;
  size?: number;
}

export interface ITableRow {
  [key: string]: string | number | Date | string[] | null | undefined;
}

interface ITableProps {
  columns: ITableColumn[];
  data: ITableRow[];
}

const iconMap = {
  github: {
    text: "general.github",
    icon: <GithubIcon />,
  },
  playStore: {
    text: "general.playStore",
    icon: <PlayStoreIcon />,
  },
  appStore: {
    text: "general.appStore",
    icon: <AppStoreIcon />,
  },
  commonUrl: {
    text: "general.commonUrl",
    icon: <UrlIcon />,
  },
};

const Table = ({ columns, data }: ITableProps) => {
  const { t } = useTranslation();

  const renderCell = (value: unknown, type: ColumnType) => {
    switch (type) {
      case ColumnType.BADGE:
        return Array.isArray(value) ? (
          <span className="badges__container">
            {value.map((badge, index) => (
              <Badge key={index}>{badge}</Badge>
            ))}
          </span>
        ) : null;
      case ColumnType.LINK:
        if (typeof value === "string") {
          const url = iconMap[getUrlType(value)];
          return (
            <a
              href={value}
              className="link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <>
                <span>{t(url.text)}</span>
                {url.icon}
              </>
            </a>
          );
        } else {
          return null;
        }
      case ColumnType.DATE:
        return value
          ? new Date(value as string).getFullYear().toString()
          : null;
      case ColumnType.TEXT:
        return value ? value.toString() : "";
      default:
        return null;
    }
  };

  return (
    <table className="table">
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={col.key} style={{ flex: col.size || 1 }}>
              {t(col.header)}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((col) => (
              <td
                key={col.key}
                style={{ flex: col.size || 1 }}
                className={col.style}
              >
                {renderCell(row[col.key], col.type)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
