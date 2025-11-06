import React from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";
import logoPrima from "../../../assets/logo/logoPrima.png";

const SideBar: React.FC = () => {
  return (
    <div className={styles.sidebar}>
      <header
        className={classNames(styles.sidebarHeader, "d-flex", "justify-between")}
      >
        <div className="d-flex">
          <img src={logoPrima} alt="Leonardo Logo" className={styles.logo} />
        </div>
      </header>

      <footer className={styles.sidebarFooter}></footer>
    </div>
  );
};

export default SideBar;