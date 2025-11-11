import { render, screen, fireEvent } from "@testing-library/react";
import RadioButton from "@atoms/RadioButton";
import { vi } from "vitest";

describe("Radio Button component", () => {
  const option = "EN";

  it("renders the checkbox", () => {
    render(
      <RadioButton option={option} checked={true} selectOption={vi.fn()} />
    );
  
    const radioButton = screen.getByRole("radio", { name: option });
    expect(radioButton).toBeInTheDocument();
    expect(radioButton).toBeChecked();
  });

  it("calls selectOption", () => {
    const selectOptionMock = vi.fn();
    render(
      <RadioButton
        option={option}
        checked={false}
        selectOption={selectOptionMock}
      />
    );
    screen.debug();
    const radioButton = screen.getByRole("radio", { name: option });
    fireEvent.click(radioButton);

    expect(selectOptionMock).toHaveBeenCalledTimes(1);
    expect(selectOptionMock).toHaveBeenCalledWith(option);
  });
});
