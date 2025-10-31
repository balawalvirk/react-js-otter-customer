import React from 'react';
import Header from './Header';
import './LogoutScreen.css';
import { useNavigate } from 'react-router-dom';

const LogoutScreen = () => {
  const navigate = useNavigate();

  const handleCancel = () => navigate('/home');
  const handleLogout = () => navigate('/');

  return (
    <div className="logout-container">
      <Header activeTab="logout" />
      <div className="logout-center">
        <div className="logout-card">
          <h2 className="logout-title">Log Out</h2>
          <p className="logout-text">Are you sure you want to Log Out?</p>
          <div className="logout-actions">
            <button className="btn-cancel" onClick={handleCancel}>Cancel</button>
            <button className="btn-logout" onClick={handleLogout}>Log Out</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoutScreen;


