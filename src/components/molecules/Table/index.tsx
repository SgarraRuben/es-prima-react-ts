import React from "react";
import { useTranslation } from "react-i18next";
import SkeletonCell from "@atoms/SkeletonTable";
import classNames from "classnames";
import styles from "./styles.module.scss";

export interface TableRowData {
  [key: string]: any;
}

interface DataTableProps {
  data: TableRowData[];
  loading: boolean;
  columnsOrder: string;
  onRowClick?: (row: TableRowData) => void;
  fallBackValue:string;
}

export interface TableColumn {
  key: string;
  label: string;
}

const Table: React.FC<DataTableProps> = ({
  data,
  loading,
  columnsOrder,
  onRowClick,
  fallBackValue
}) => {
  const { t } = useTranslation();

  const columns: TableColumn[] = Object.entries(
    t(columnsOrder, { returnObjects: true })
  ).map(([key, label]) => ({ key, label }));

  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col.key} scope="col">
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {loading ? (
            Array.from({ length: 3 }).map((_, id) => (
              <tr key={id}>
                {columns.map((col, idcol) => (
                  <td key={idcol}>
                    <SkeletonCell width={col.key === "id" ? 1 : 3} />
                  </td>
                ))}
              </tr>
            ))
          ) : data.length > 0 ? (
            data.map((row, id) => (
              <tr
                key={id}
                className={classNames(styles.tr_content)}
                onClick={() => onRowClick && onRowClick(row)}
              >
                {columns.map((col) => (
                  <td key={col.key}>{row[col.key]}</td>
                ))}
              </tr>
            ))
          ) : (
            <tr key={"0"}>
              <td key={"0"}>{fallBackValue}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
