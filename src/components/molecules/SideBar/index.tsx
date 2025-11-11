import React, { useEffect, useState } from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";
import logoPrima from "../../../assets/logo/logoPrima.png";
import ThemeSwitcher from "@atoms/ThemeSwitcher";
import RadioSelectDropdown from "@molecules/RadioSelectDropdown";
import { useTranslation } from "react-i18next";
import i18n from "@/i18n/i18n";

const SideBar: React.FC = () => {
  const [optionLanguage, setOptionLanguage] = useState<string>((localStorage.getItem('i18nextLng')) || 'light');
  const { t } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(optionLanguage.toLocaleLowerCase());
  }, [optionLanguage]);
  return (
    <div className={styles.sidebar}>
      <header
        className={classNames(
          styles.sidebarHeader,
          "d-flex",
          "justify-between"
        )}
      >
        <div className="d-flex">
          <img src={logoPrima} alt="prima Logo" className={styles.logo} />
        </div>
      </header>

      <footer className={styles.sidebarFooter}>
        <RadioSelectDropdown
          options={["EN", "IT"]}
          selected={optionLanguage.toUpperCase()}
          onChange={(value) => setOptionLanguage(value)}
          label={t("pages.users.lenguage_setting.label")}
          colorPalette={{
            color: "white",
            borderColor: "white",
            bgHover: "white",
            colorHover: "#8334c2",
          }}
        />
        <ThemeSwitcher></ThemeSwitcher>
      </footer>
    </div>
  );
};

export default SideBar;
