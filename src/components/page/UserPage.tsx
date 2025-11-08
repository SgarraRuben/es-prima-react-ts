import React, {
  Suspense,
  useState,
  type ChangeEvent,
  useMemo,
  useEffect,
} from "react";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import styles from "./styles.module.scss";
import SkeletonCell from "@atoms/SkeletonTable";
import MultiSelectDropdown from "@molecules/MultiSelectDropdown";
import SearchBar from "../atoms/SearchBar";
import { useGetUsersQuery } from "@store/api/UsersApi";
import type { TableRowData } from "@molecules/Table";
import Pagination from "@atoms/Pagination";
import { useSearchParams } from "react-router-dom";
import UserDetailsModal from "@molecules/Modals/UserDetailModal";

const Table = React.lazy(() => import("@molecules/Table"));

const UserPage: React.FC = () => {
  const { t } = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();

  const [searchName, setSearchName] = useState("");
  const [handleFilter, setHandleFilter] = useState<string[]>([]);
  const [selectedRow, setSelectedRow] = useState<TableRowData | null>(null);

  const { data: usersResponse, isLoading } = useGetUsersQuery({
    page: Number(searchParams.get("page") || 1),
    perPage: 5,
  });

  useEffect(() => {
    console.log(usersResponse);
  }, [usersResponse]);

  const apiData = useMemo(
    () =>
      usersResponse?.data?.map((user) => ({
        id: user.id,
        full_name: user.first_name + " " + user.last_name,
        first_name: user.first_name,
        email: user.email,
        last_name: user.last_name,
        role: user.role,
        photo: user.avatar,
      })) || [],
    [usersResponse]
  );

  const handlePageChange = (newPage: number) => {
    setSearchParams({ page: String(newPage) });
  };

  const filteredData = useMemo(
    () =>
      apiData.filter((row) => {
        const matchesName = row.full_name
          .toLowerCase()
          .includes(searchName.toLowerCase());
        const matchesHandle =
          handleFilter.length === 0 || handleFilter.includes(row.role);
        return matchesName && matchesHandle;
      }),
    [apiData, searchName, handleFilter]
  );

  const uniqueHandles = useMemo(
    () => [...new Set(apiData.map((row) => row.role))],
    [apiData]
  );

  return (
    <div className={classNames(styles.main_card, "w-100 h-100")}>
      <div className={classNames(styles.top_section, "p-3")}>
        <div className="d-flex flex-column gap-2">
          <div>
            <h1>{t("pages.users.title")}</h1>
          </div>

          <div className="d-flex flex-column gap-2">
            <div>Apply filters:</div>
            <div className="d-flex gap-2">
              <MultiSelectDropdown
                defaultValue={t("pages.users.filters.roles.title")}
                options={uniqueHandles}
                selected={handleFilter}
                onChange={setHandleFilter}
                colorPalette={{
                  color: "#8334c2",
                  borderColor: "#8334c2",
                  bgHover: "#8334c2",
                  colorHover: "white",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className={classNames(styles.content_section)}>
        <div className="container mt-5 d-flex flex-column gap-3">
          <div className={classNames(styles.search_bar_section)}>
            <SearchBar
              placeholder={t("pages.users.searchbar_placeholder")}
              value={searchName}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setSearchName(e.target.value)
              }
            />
          </div>
          <div className={classNames(styles.table_wrapper)}>
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
                        <td>
                          <SkeletonCell width={1} />
                        </td>
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
              <Table
                columnsOrder="pages.users.table.columns"
                data={filteredData}
                loading={isLoading}
                onRowClick={setSelectedRow}
                fallBackValue={t("pages.users.table.fall_back_value")}
              />
            </Suspense>
          </div>
          <Pagination
            currentPage={Number(searchParams.get("page") || 1)}
            totalPages={usersResponse?.pageInfo.totalPages || 1}
            onPageChange={handlePageChange}
          />

          {!!selectedRow && (
            <UserDetailsModal
              row={selectedRow}
              onClose={() => setSelectedRow(null)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default UserPage;
