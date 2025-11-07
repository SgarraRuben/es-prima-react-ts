import React, { Suspense } from "react";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import styles from "./styles.module.scss";
import SkeletonCell from "@atoms/SkeletonTable";


const DataTable = React.lazy(() => import("@molecules/Table"));

const UserPage: React.FC = () => {
  const { t } = useTranslation();

  const dataFromApi = [
    { id: 1, first: "marco", last: "rossi", role: "admin" },
    { id: 2, first: "francesco", last: "bianchi", role: "user" }
  ];
  return (
    <>
      <div className={classNames(styles.main_card, "w-100 h-100")}>
        <div className={classNames(styles.top_section, "p-3")}>
          <div>
            <h1>{t("pages.users.title")}</h1>
            <div>filtri</div>
          </div>
        </div>

        <div className={classNames(styles.content_section)}>
          <div className="container mt-5">
            <Suspense
              fallback={
                <table className="table table-bordered placeholder-glow">
                  <thead>
                    <tr>
                      <th>
                        <SkeletonCell width={1} />
                      </th>
                      <th>
                        <SkeletonCell width={3} />
                      </th>
                      <th>
                        <SkeletonCell width={3} />
                      </th>
                      <th>
                        <SkeletonCell width={2} />
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {Array.from({ length: 3 }).map((_, idx) => (
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
                    ))}
                  </tbody>
                </table>
              }
            >
              <DataTable
                data={dataFromApi}
                loading={false}
              />
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserPage;
