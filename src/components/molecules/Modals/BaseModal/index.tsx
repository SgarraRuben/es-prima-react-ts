import React, { useRef } from "react";

interface ModalProps {
  title?: string;
  onClose: () => void;
  footer?: React.ReactNode;
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  centered?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  title,
  onClose,
  footer,
  children,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === modalRef.current) {
      onClose();
    }
  };


  return (
    <div
      className="modal fade show"
      style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
      ref={modalRef}
      onClick={handleClickOutside}
      
    >
      <div
        className={"modal-dialog modal-dialog-centered"}
      >
        <div className="modal-content">
          {title && (
            <div className="modal-header">
              <h5 className="modal-title">{title}</h5>
              <button type="button" className="btn-close" onClick={onClose}></button>
            </div>
          )}
          <div className="modal-body">{children}</div>
          <div className="modal-footer" style={{minHeight:"56px"}}>{footer}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;