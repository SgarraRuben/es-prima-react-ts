import React from "react";
import styles from "./styles.module.scss";

const Spinner: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.spinner}></div>
    </div>
  );
};

export default Spinner;