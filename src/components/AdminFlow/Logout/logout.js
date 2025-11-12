import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminHeader from '../adminHeader';
import './logout.css';

const AdminLogout = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('logout');
  const [showModal, setShowModal] = useState(true);

  const navigationItems = [
    {
      key: 'home',
      label: 'Home',
      onPress: () => navigate('/admin-home')
    },
    {
      key: 'companies',
      label: 'Companies',
      onPress: () => navigate('/admin-companies')
    },
    {
      key: 'disputes',
      label: 'Disputes',
      onPress: () => navigate('/admin-disputes')
    },
    {
      key: 'payments',
      label: 'Payments',
      onPress: () => navigate('/admin-payments')
    },
    {
      key: 'otter-ai',
      label: 'Otter AI',
      onPress: () => navigate('/admin-otter-ai')
    },
    {
      key: 'ratings',
      label: 'Ratings',
      onPress: () => navigate('/admin-ratings')
    },
    {
      key: 'logout',
      label: 'Logout',
      onPress: () => setActiveTab('logout')
    }
  ];

  const handleCancel = () => {
    navigate('/admin-home');
  };

  const handleLogout = () => {
    navigate('/welcome');
  };

  return (
    <div className="admin-logout-container">
      <AdminHeader activeTab={activeTab} navigationItems={navigationItems} />

      <div className="admin-main-content">
        {showModal && (
          <div className="logout-modal-overlay">
            <div className="logout-modal">
              <h2 className="modal-title">Log Out</h2>
              <p className="modal-message">Are you sure you want to Log Out?</p>
              <div className="modal-actions">
                <button className="cancel-btn" onClick={handleCancel}>Cancel</button>
                <button className="logout-btn" onClick={handleLogout}>Log Out</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminLogout;

