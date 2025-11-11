import React, { type ChangeEvent, memo } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";

interface SearchBarProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange, placeholder }) => {
  return (
    <input
      type="text"
      className={classNames(styles.custom_search, "form-control")}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default memo(SearchBar);