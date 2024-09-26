import React, { FC } from "react";
import { ImCross } from "react-icons/im";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <ImCross className="close-btn" onClick={onClose} />
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
