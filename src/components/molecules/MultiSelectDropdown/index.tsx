import React, { useState } from "react";
import Checkbox from "@atoms/Checkbox";

interface MultiSelectDropdownProps {
  options: string[];
  selected: string[];
  onChange: (selected: string[]) => void;
  defaultValue: string;
  colorPalette: {
    color: string;
    borderColor: string;
    bgHover: string;
    colorHover: string;
  };
}

const MultiSelectDropdown: React.FC<MultiSelectDropdownProps> = ({
  options,
  selected,
  onChange,
  colorPalette,
}) => {
  const [open, setOpen] = useState(false);

  const toggleOption = (option: string) => {
    if (selected.includes(option)) {
      onChange(selected.filter((x) => x !== option));
    } else {
      onChange([...selected, option]);
    }
  };

  return (
    <div className="position-relative mb-3" style={{ display: "inline-block" }}>
      <button
        className="btn btn-outline-primary"
        type="button"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        style={
          {
            "--bs-btn-color": colorPalette.color,
            "--bs-btn-border-color": colorPalette.borderColor,
            "--bs-btn-hover-bg": colorPalette.bgHover,
            "--bs-btn-hover-color": colorPalette.colorHover,
          } as React.CSSProperties
        }
      >
        {"Roles" + " " + (selected.length > 0 ? `(${selected.length})` : "")}
      </button>

      {open && (
        <div
          className="dropdown-menu show p-3"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
          style={{
            minWidth: "200px",
            position: "absolute",
            zIndex: 1000,
          }}
        >
          {options.map((option) => (
            <Checkbox
              option={option}
              checked={selected.includes(option)}
              toggleOption={toggleOption}
            ></Checkbox>
          ))}
        </div>
      )}
    </div>
  );
};

export default MultiSelectDropdown;
