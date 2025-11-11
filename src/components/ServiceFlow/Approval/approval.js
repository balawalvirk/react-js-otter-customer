import React from 'react';
import { useNavigate } from 'react-router-dom';
import ServiceHeader from '../Header/serviceHeader';
import '../JobAssigned/jobAssigned.css';
import './approval.css';

const ApprovalScreen = () => {
  const navigate = useNavigate();

  const activeTab = 'approval';

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

  return (
    <div className="service-flow-container approval-screen">
      <ServiceHeader activeTab={activeTab} navigationItems={navigationItems} />

      <section className="approval-card">
        <header className="approval-header">
          <span className="approval-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <rect x="4" y="4" width="16" height="16" rx="2" stroke="#111827" strokeWidth="1.5" />
              <path d="M8 12L10.5 14.5L16 9" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <h1>Customer Approval Pending</h1>
        </header>

        <p className="approval-description">
          The estimate has been sent to the customer for approval.
          
          You will receive a<br /> notification once they respond.
        </p>

        <div className="approval-actions">
          <button type="button" className="modify-btn">Modify Estimate</button>
          <button type="button" className="approve-btn">Customer Approval</button>
        </div>
      </section>
    </div>
  );
};

export default ApprovalScreen;
