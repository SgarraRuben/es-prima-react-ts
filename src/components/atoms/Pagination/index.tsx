import React from "react";
import classNames from "classnames";
import styles from './styles.module.scss';
import { useTranslation } from "react-i18next";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {

  const { t } = useTranslation();

  const handlePrevious = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  const renderPageNumbers = () => {
    const pages: number[] = [];

    if (totalPages <= 3) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage === 1) {
        pages.push(1, 2, 3);
      } else if (currentPage === totalPages) {
        pages.push(totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(currentPage - 1, currentPage, currentPage + 1);
      }
    }

    return pages.map((i) => (
      <li
        key={i}
        className={classNames(styles.pageItem, {
          [styles.active]: currentPage === i,
        })}
      >
        <button
          className={styles.pageLink}
          onClick={() => onPageChange(i)}
        >
          {i}
        </button>
      </li>
    ));
  };

  return (
    <div >
      <ul className={classNames(styles.pagination, "justify-content-center")}>
        <li
          className={classNames(styles.pageItem, {
            [styles.disabled]: currentPage === 1,
          })}
        >
          <button className={styles.pageLink} onClick={handlePrevious}>
            &laquo; {t("pages.users.pagination.prev")}
          </button>
        </li>
        {renderPageNumbers()}
        <li
          className={classNames(styles.pageItem, {
            [styles.disabled]: currentPage === totalPages,
          })}
        >
          <button className={styles.pageLink} onClick={handleNext}>
            {t("pages.users.pagination.next")} &raquo;
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;