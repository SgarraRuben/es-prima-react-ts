import { describe, it, vi, expect, beforeEach, afterEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import ToastContainer from "@atoms/Toast";
import * as utilities from "@store/utility";

describe("ToastContainer", () => {
  let dispatchMock: any;

  beforeEach(() => {
    const toastRoot = document.createElement("div");
    toastRoot.setAttribute("id", "toast-root");
    document.body.appendChild(toastRoot);

    dispatchMock = vi.fn();
    vi.spyOn(utilities, "useAppDispatch").mockReturnValue(dispatchMock);
    vi.spyOn(utilities, "useAppSelector").mockImplementation((selector) =>
      selector({
        theme: {} as any,
        toast: { toast: { id: "1", message: "error", type: "danger" } },
        api: {} as any,
      } as any)
    );

    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.restoreAllMocks();
    document.body.innerHTML = "";
  });

  it("renders toast", () => {
    render(<ToastContainer />);
    expect(screen.getByText("error")).toBeDefined();
  });

  it("dispatches removeToast after 3 seconds", () => {
    render(<ToastContainer />);
    
    vi.advanceTimersByTime(3000);
    expect(dispatchMock).toHaveBeenCalledWith({ type: "toast/removeToast" });
  });

  it("dispatches removeToast when click x button", () => {
    render(<ToastContainer />);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(dispatchMock).toHaveBeenCalledWith({ type: "toast/removeToast" });
  });
  it("does not renders toast when doeas not have error", () => {
    vi.spyOn(utilities, "useAppSelector").mockImplementation((selector) =>
      selector({
        theme: {} as any,
        toast: { toast: null},
        api: {} as any,
      } as any)
    );
    render(<ToastContainer />);
    screen.debug();
  const toastMessage = screen.queryByText("error");
  expect(toastMessage).toBeNull();
    
  });
});
