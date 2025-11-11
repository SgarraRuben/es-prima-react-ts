import { render, screen, fireEvent } from "@testing-library/react";
import Checkbox from "@atoms/Checkbox";
import { vi } from "vitest";

describe("Checkbox component", () => {
  const option = "ADMIN";

  it("renders the checkbox", () => {
    render(
      <Checkbox option={option} checked={true} toggleOption={vi.fn()} />
    );
    screen.debug();
    const checkbox = screen.getByRole("checkbox", { name: option });
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).toBeChecked();
  });

  it("calls toggleOption", () => {
    const toggleOptionMock = vi.fn();
    render(
      <Checkbox
        option={option}
        checked={false}
        toggleOption={toggleOptionMock}
      />
    );
    screen.debug();
    const checkbox = screen.getByRole("checkbox", { name: option });
    fireEvent.click(checkbox);

    expect(toggleOptionMock).toHaveBeenCalledTimes(1);
    expect(toggleOptionMock).toHaveBeenCalledWith(option);
  });
});
