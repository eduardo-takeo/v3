import { useTranslation } from "react-i18next";
import Badge from "@/components/Badge/Badge";
import "./Table.scss";

export enum ColumnType {
  TEXT = "text",
  NUMBER = "number",
  DATE = "date",
  LINK = "link",
  BADGE = "badge",
}

export type TableColumnStyle = "opaque" | "bold";

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
        return typeof value === "string" ? (
          <a href={value} target="_blank" rel="noopener noreferrer">
            {value}
          </a>
        ) : null;
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
