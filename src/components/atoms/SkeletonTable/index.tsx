import classNames from "classnames";
import React from "react";
import styles from "./styles.module.scss";

interface SkeletonTableProps {
  width: number;
}

const SkeletonCell: React.FC<SkeletonTableProps> = ({ width }) => {
  return (
    <span
      className={classNames(styles.skeleton_custom, 
        `placeholder col-${width}`)}
    ></span>
  );
};

export default SkeletonCell;
