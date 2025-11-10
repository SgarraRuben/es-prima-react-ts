import React, { useState } from "react";
import RadioButton from "@atoms/RadioButton";

interface SingleSelectDropdownProps {
  options: string[];
  selected: string | null;
  onChange: (selected: string) => void;
  label: string;
  colorPalette: {
    color: string;
    borderColor: string;
    bgHover: string;
    colorHover: string;
  };
}

const RadioSelectDropdown: React.FC<SingleSelectDropdownProps> = ({
  options,
  selected,
  onChange,
  label,
  colorPalette
}) => {
  const [open, setOpen] = useState(false);

  const selectOption = (option: string) => {
    onChange(option);
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
        {label} : {selected}
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
            
            <RadioButton option={option} checked={selected === option}
                selectOption={() => selectOption(option)}></RadioButton>
          ))}
        </div>
      )}
    </div>
  );
};

export default RadioSelectDropdown;
