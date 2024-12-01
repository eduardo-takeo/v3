import React from "react";
import { useTranslation } from "react-i18next";
import Badge from "@/components/Badge/Badge"; // Certifique-se de importar o componente Badge

export enum ColumnType {
  TEXT = "text",
  NUMBER = "number",
  DATE = "date",
  LINK = "link",
  BADGE = "badge", // Novo tipo de dado
}

export interface ITableColumn {
  key: string;
  header: string;
  type: ColumnType;
}

export interface ITableRow {
  [key: string]: string | number | Date | string[]; // Adicionado array de strings
}

interface TableProps {
  columns: ITableColumn[];
  data: ITableRow[];
}

const Table: React.FC<TableProps> = ({ columns, data }) => {
  const { t } = useTranslation();

  const renderCell = (value: any, type: ColumnType) => {
    switch (type) {
      case ColumnType.BADGE:
        return Array.isArray(value)
          ? value.map((badge, index) => <Badge key={index}>{badge}</Badge>)
          : null;
      case ColumnType.LINK:
        return typeof value === "string" ? (
          <a href={value} target="_blank" rel="noopener noreferrer">
            {value}
          </a>
        ) : null;
      case ColumnType.DATE:
        return value instanceof Date ? String(value.getFullYear()) : null;
      default:
        return t(String(value));
    }
  };

  return (
    <table style={{ width: "100%", borderCollapse: "collapse" }}>
      <thead>
        <tr>
          {columns.map((col) => (
            <th
              key={col.key}
              style={{
                borderBottom: "1px solid #ddd",
                padding: "8px",
                textAlign: "left",
              }}
            >
              {t(col.header)} {/* Traduz o cabeçalho */}
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
                style={{
                  borderBottom: "1px solid #ddd",
                  padding: "8px",
                }}
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
