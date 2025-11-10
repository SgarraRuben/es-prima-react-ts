import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { useAppDispatch, useAppSelector } from "@store/utility";
import { removeToast } from "@store/toastSlice";

const ToastContainer: React.FC = () => {
  const toastState = useAppSelector((state) => state.toast);
  const toast = toastState.toast; 
  const dispatch = useAppDispatch();
  const toastRoot = document.getElementById("toast-root");

  useEffect(() => {
    const timer = setTimeout(() => dispatch(removeToast()), 3000);
    return () => clearTimeout(timer);
  }, [toast, dispatch]);

  if (!toastRoot || !toast) return null;

  return ReactDOM.createPortal(
    <div
      className={`toast show align-items-center text-bg-${
        toast?.type || "danger"
      } border-0`}
      role="alert"
      style={{ position: "fixed", top: 20, right: 20, zIndex: 3000 }}
    >
      <div className="d-flex">
        <div className="toast-body">{toast?.message}</div>
        <button
          type="button"
          className="btn-close btn-close-white me-2 m-auto"
          onClick={() => dispatch(removeToast())}
        />
      </div>
    </div>,
    toastRoot
  );
};

export default ToastContainer;
