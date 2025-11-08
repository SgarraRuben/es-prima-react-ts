import React from "react";
import styles from "./styles.module.scss";

interface CheckboxOptionProps {
  option: string;
  checked: boolean;
  toggleOption: (option: string) => void;
}

const CheckboxOption: React.FC<CheckboxOptionProps> = ({ option, checked, toggleOption }) => {
  return (
    <label className={styles.checkboxContainer} key={option}>
      <input
        type="checkbox"
        className={styles.checkboxInput}
        checked={checked}
        onChange={() => toggleOption(option)}
      />
      <span className={styles.customCheckbox}></span>
      {option}
    </label>
  );
};

export default CheckboxOption;