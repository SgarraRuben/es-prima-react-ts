import React from "react";
import Modal from "../BaseModal";
import type { TableRowData } from "@molecules/Table";
import { useTranslation } from "react-i18next";
import  { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

interface UserDetailsModalProps {
  row: TableRowData | null;
  onClose: () => void;
}

const UserDetailsModal: React.FC<UserDetailsModalProps> = ({
  row,
  onClose,
}) => {
  const { t } = useTranslation();
  return (
    <Modal onClose={onClose} title="Dettagli Utente">
      <div className="d-flex justify-content-start flex-wrap align-content-center gap-3">
        <div>
          {row?.photo && (
            <LazyLoadImage
              src={row?.photo || "/placeholder-avatar.png"}
              alt={row?.first_name}
              effect="blur"
              height={100}
              width={100}
              style={{ objectFit: "cover" }}
              className="rounded"
            />
          )}
        </div>

        <div>
          <div>
            <span className="fw-bold">
              {t("pages.users.user_modal.information.id")}:{" "}
            </span>
            <span>{row?.id}</span>
          </div>

          <div>
            <span className="fw-bold">
              {t("pages.users.user_modal.information.email")}:{" "}
            </span>
            <span>{row?.email}</span>
          </div>

          <div>
            <span className="fw-bold">
              {t("pages.users.user_modal.information.first_name")}:{" "}
            </span>
            <span>{row?.first_name}</span>
          </div>

          <div>
            <span className="fw-bold">
              {t("pages.users.user_modal.information.last_name")}:{" "}
            </span>
            <span>{row?.last_name}</span>
          </div>

          <div>
            <span className="fw-bold">
              {t("pages.users.user_modal.information.role")}:{" "}
            </span>
            <span>{row?.role}</span>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default UserDetailsModal;
