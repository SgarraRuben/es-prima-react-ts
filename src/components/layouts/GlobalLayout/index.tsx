import React, { useState, useEffect, useCallback } from "react";
import classNames from "classnames";
import { Outlet } from "react-router-dom";
import SideBar from "../../molecules/SideBar";
import BurgerButton from "@atoms/BurgerButton";
import styles from "./styles.module.scss";

const GlobalLayout: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const handleResize = useCallback(() => {
    const mobile = window.innerWidth < 768;
    setIsMobile(mobile);
    if (!mobile) setSidebarOpen(false);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <div className={styles.layout}>
      <aside
        className={classNames(styles.sidebar, {
          [styles.sidebarMobile]: isMobile,
          [styles.sidebarOpen]: sidebarOpen,
        })}
        aria-hidden={isMobile && !sidebarOpen}
      >
        {isMobile && (
          <button
            type="button"
            className={styles.closeButton}
            onClick={toggleSidebar}
            aria-label="Close sidebar"
          >
            &times;
          </button>
        )}
        <SideBar />
      </aside>

      {isMobile && sidebarOpen && (
        <div
          className={styles.overlay}
          onClick={closeSidebar}
          role="presentation"
        />
      )}

      <main
        className={classNames(styles.main, {
          [styles.contentShift]: isMobile && sidebarOpen,
        })}
      >
        {isMobile && !sidebarOpen && (
          <div className={styles.burgerWrap}>
            <BurgerButton toggleSidebar={toggleSidebar} />
          </div>
        )}

        <div className={styles.contentInner}>
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default GlobalLayout;
