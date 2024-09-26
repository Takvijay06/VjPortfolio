import React, { useEffect, useState } from "react";
import Modal from "./modal";
import Confetti from "react-confetti";

const ModalContainer: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    openModal();
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      {isModalOpen && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          initialVelocityX={5}
          initialVelocityY={5}
          numberOfPieces={200}
          gravity={0.2}
        />
      )}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="congratulations-modal">
          <div className="modal-icon">
            <svg
              viewBox="0 0 16 16"
              className="bi bi-check-circle"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 15A7 7 0 118 1a7 7 0 010 14zM5.354 8.354a.5.5 0 00.006.708l.638.636a.5.5 0 00.707 0L10.5 6.207l.354-.353a.5.5 0 000-.708l-.707-.708a.5.5 0 00-.708 0l-2.646 2.647-1.138-1.136a.5.5 0 00-.708-.007l-.707.708a.5.5 0 000 .708z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <h2>Thank you user!</h2>
          <p>You are watching Vijay's work on modal and react confitte.</p>
          <button className="modal-button" onClick={closeModal}>
            Done
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default ModalContainer;
