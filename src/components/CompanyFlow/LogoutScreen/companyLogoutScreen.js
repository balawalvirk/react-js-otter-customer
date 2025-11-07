import React from 'react';
import { useNavigate } from 'react-router-dom';
import CompanyHeader from '../companyHeader';
import './companyLogoutScreen.css';

const CompanyLogoutScreen = () => {
  const navigate = useNavigate();
  const [activeTab] = React.useState('logout');

  const handleCancel = () => navigate('/company-home');
  const handleLogout = () => navigate('/welcome');

  const navigationItems = [
    { key: 'home', label: 'Home', onPress: () => navigate('/company-home') },
    { key: 'tech-management', label: 'Tech Management', onPress: () => navigate('/tech-management') },
    { key: 'contracts', label: 'Contract & Estimates', onPress: () => navigate('/contracts-estimates') },
    { key: 'payments', label: 'Payments', onPress: () => navigate('/payments') },
    { key: 'logout', label: 'Logout', onPress: () => {} }
  ];

  return (
    <div className="company-logout-container">
      <CompanyHeader activeTab={activeTab} navigationItems={navigationItems} />
      <div className="company-logout-center">
        <div className="company-logout-card">
          <h2 className="company-logout-title">Log Out</h2>
          <p className="company-logout-text">Are you sure you want to Log Out?</p>
          <div className="company-logout-actions">
            <button className="company-btn-cancel" onClick={handleCancel}>Cancel</button>
            <button className="company-btn-logout" onClick={handleLogout}>Log Out</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyLogoutScreen;

