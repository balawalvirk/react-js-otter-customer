import React from 'react';
import { useNavigate } from 'react-router-dom';
import './logoutModal.css';

const LogoutModal = ({ isOpen, onClose, onConfirm }) => {
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleCancel = () => {
    onClose();
  };

  const handleLogout = () => {
    onConfirm();
    navigate('/welcome');
  };

  return (
    <div className="logout-modal-overlay" onClick={handleCancel}>
      <div className="logout-modal-content" onClick={(e) => e.stopPropagation()}>
        <h2 className="logout-modal-title">Log Out</h2>
        <p className="logout-modal-message">Are you sure you want to Log Out?</p>
        <div className="logout-modal-actions">
          <button className="logout-cancel-btn" onClick={handleCancel}>
            Cancel
          </button>
          <button className="logout-confirm-btn" onClick={handleLogout}>
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;

