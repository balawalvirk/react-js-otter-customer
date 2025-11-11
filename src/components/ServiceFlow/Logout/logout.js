import React from 'react';
import { useNavigate } from 'react-router-dom';
import ServiceHeader from '../Header/serviceHeader';
import '../JobAssigned/jobAssigned.css';
import './logout.css';

const ServiceLogoutScreen = () => {
  const navigate = useNavigate();

  const navigationItems = [
    { key: 'job-assigned', label: 'Job Assigned', onPress: () => navigate('/service-job-assigned') },
    { key: 'navigation', label: 'Navigation', onPress: () => navigate('/service-navigation') },
    { key: 'arrived', label: 'Arrived', onPress: () => navigate('/service-arrived') },
    { key: 'diagnostics', label: 'Diagnostics', onPress: () => navigate('/service-diagnostics') },
    { key: 'estimates', label: 'Estimates', onPress: () => navigate('/service-estimates') },
    { key: 'approval', label: 'Approval', onPress: () => navigate('/service-approval') },
    { key: 'complete', label: 'Complete', onPress: () => navigate('/service-complete') },
    { key: 'logout', label: 'Logout', onPress: () => navigate('/service-logout') }
  ];

  const handleCancel = () => {
    navigate('/service-job-assigned');
  };

  const handleLogout = () => {
    navigate('/welcome');
  };

  return (
    <div className="service-flow-container logout-screen">
      <ServiceHeader activeTab="logout" navigationItems={navigationItems} />

      <div className="logout-overlay">
        <div className="logout-modal">
          <h2>Log Out</h2>
          <p>Are you sure you want to Log Out?</p>

          <div className="logout-actions">
            <button type="button" className="cancel-btn" onClick={handleCancel}>
              Cancel
            </button>
            <button type="button" className="logout-btn" onClick={handleLogout}>
              Log Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceLogoutScreen;
