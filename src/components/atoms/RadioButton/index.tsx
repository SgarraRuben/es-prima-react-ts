import React from "react";
import styles from "./styles.module.scss";

interface RadioOptionProps {
  option: string;
  checked: boolean;
  selectOption: (option: string) => void;
}

const RadioOption: React.FC<RadioOptionProps> = ({ option, checked, selectOption }) => {
  return (
    <label className={styles.radioContainer}>
      <input
        type="radio"
        name="singleSelect"
        className={styles.radioInput}
        checked={checked}
        onChange={() => selectOption(option)}
      />
      <span className={styles.customRadio}></span>
      {option}
    </label>
  );
};

export default RadioOption;