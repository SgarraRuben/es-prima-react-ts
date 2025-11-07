import React from "react";
import SkeletonCell from "@atoms/SkeletonTable";
import classNames from "classnames";
import styles from './styles.module.scss';



interface DataTableProps {
  data: TableRowData[];
  loading: boolean;
}

export interface TableRowData {
  id: number;
  first: string;
  last: string;
  role: string;
}

const DataTable: React.FC<DataTableProps> = ({ data, loading }) => {
  return (
    <table className="table table-hover table-bordered placeholder-glow">
      <thead>
        <tr>
          <th scope="col">{ "#"}</th>
          <th scope="col">{"First"}</th>
          <th scope="col">{"Last"}</th>
          <th scope="col">{"Role"}</th>
        </tr>
      </thead>
      <tbody>
        {loading
          ? Array.from({ length: 3 }).map((_, idx) => (
              <tr key={idx}>
                <th>
                  <SkeletonCell width={1} />
                </th>
                <td>
                  <SkeletonCell width={3} />
                </td>
                <td>
                  <SkeletonCell width={3} />
                </td>
                <td>
                  <SkeletonCell width={2} />
                </td>
              </tr>
            ))
          : data.map((row) => (
              <tr className={classNames(styles.tr_content)}>
                <th scope="row">{row.id}</th>
                <td>{row.first}</td>
                <td>{row.last || row.first}</td>
                <td>{row.role}</td>
              </tr>
            ))}
      </tbody>
    </table>
  );
};

export default DataTable;
