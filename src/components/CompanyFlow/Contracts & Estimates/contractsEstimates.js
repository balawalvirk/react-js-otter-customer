import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CompanyHeader from '../companyHeader';
import './contractsEstimates.css';

const ContractsEstimates = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('contracts');
  const [contractName, setContractName] = useState('');
  const [enableInAppSigning, setEnableInAppSigning] = useState(false);

  const handleLogout = () => {
    navigate('/company-logout');
  };

  const navigationItems = [
    {
      key: 'home',
      label: 'Home',
      onPress: () => navigate('/company-home')
    },
    {
      key: 'tech-management',
      label: 'Tech Management',
      onPress: () => navigate('/tech-management')
    },
    {
      key: 'contracts',
      label: 'Contract & Estimates',
      onPress: () => setActiveTab('contracts')
    },
    {
      key: 'payments',
      label: 'Payments',
      onPress: () => navigate('/payments')
    },
    {
      key: 'logout',
      label: 'Logout',
      onPress: handleLogout
    }
  ];

  const contracts = [
    {
      id: 1,
      name: 'Standard HVAC Service Agreement',
      status: 'Active',
      statusColor: '#0D90B2',
      fileType: 'PDF',
      size: '245 KB',
      date: '2024-01-15'
    },
    {
      id: 2,
      name: 'Plumbing Installation Contract',
      status: 'Active',
      statusColor: '#0D90B2',
      fileType: 'PDF',
      size: '198 KB',
      date: '2024-01-10'
    },
    {
      id: 3,
      name: 'Emergency Service Agreement',
      status: 'Draft',
      statusColor: '#9CA3AF',
      fileType: 'PDF',
      size: '156 KB',
      date: '2024-01-05'
    }
  ];

  return (
    <div className="contracts-estimates-container">
      {/* Company Header Component */}
      <CompanyHeader activeTab={activeTab} navigationItems={navigationItems} />

      {/* Main Content */}
      <div className="contracts-main-content">
        {/* Dashboard Header */}
        <div className="contracts-dashboard-header">
          <h1 className="contracts-dashboard-title">Contracts & Estimates</h1>
          <p className="contracts-dashboard-subtitle">Manage contracts and create detailed estimates</p>
        </div>

        {/* Three White Sections */}
        <div className="contracts-sections-grid">
          {/* Contract Library Section */}
          <div className="contract-library-section">
            <h2 className="section-heading">Contract Library</h2>
            
            <div className="contracts-list">
              {contracts.map(contract => (
                <div key={contract.id} className="contract-item">
                  <div className="contract-info">
                    <div className="contract-header">
                      <h3 className="contract-name">{contract.name}</h3>
                      <span 
                        className="contract-status" 
                        style={{ backgroundColor: contract.statusColor }}
                      >
                        {contract.status}
                      </span>
                    </div>
                    <p className="contract-details">
                      {contract.fileType} . {contract.size} . {contract.date}
                    </p>
                  </div>
                  <div className="contract-actions">
                    <button className="action-btn edit-btn" title="Edit">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M11.3333 2.00001C11.5084 1.8249 11.7163 1.68698 11.9444 1.5953C12.1726 1.50361 12.4159 1.46002 12.6667 1.46668C12.9174 1.47333 13.1578 1.53013 13.3789 1.63281C13.6 1.73549 13.7972 1.88172 13.9578 2.06223C14.1184 2.24274 14.2389 2.45359 14.3127 2.68144C14.3865 2.90929 14.412 3.14912 14.3878 3.38668C14.3636 3.62424 14.2901 3.85439 14.1718 4.06223C14.0535 4.27007 13.8931 4.45058 13.7 4.59334L5.66667 12.6267L1.33333 13.3333L2.04 9L11.3333 2.00001Z" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                    <button className="action-btn view-btn" title="View">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M8 2.66667C3.33333 2.66667 1.33333 8 1.33333 8C1.33333 8 3.33333 13.3333 8 13.3333C12.6667 13.3333 14.6667 8 14.6667 8C14.6667 8 12.6667 2.66667 8 2.66667Z" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M8 10.6667C9.47276 10.6667 10.6667 9.47276 10.6667 8C10.6667 6.52724 9.47276 5.33334 8 5.33334C6.52724 5.33334 5.33333 6.52724 5.33333 8C5.33333 9.47276 6.52724 10.6667 8 10.6667Z" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                    <button className="action-btn download-btn" title="Download">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M8 2.66667V11.3333M8 11.3333L5.33333 8.66667M8 11.3333L10.6667 8.66667" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M2.66667 11.3333V13.3333C2.66667 13.687 2.80714 14.0261 3.05719 14.2762C3.30724 14.5262 3.64638 14.6667 4 14.6667H12C12.3536 14.6667 12.6928 14.5262 12.9428 14.2762C13.1929 14.0261 13.3333 13.687 13.3333 13.3333V11.3333" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                    <button className="action-btn delete-btn" title="Delete">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M2.66667 4H13.3333M5.33333 4V2.66667C5.33333 2.31305 5.47381 1.97391 5.72386 1.72386C5.97391 1.47381 6.31305 1.33334 6.66667 1.33334H9.33333C9.68696 1.33334 10.0261 1.47381 10.2761 1.72386C10.5262 1.97391 10.6667 2.31305 10.6667 2.66667V4M6.66667 7.33334V11.3333M9.33333 7.33334V11.3333M3.33333 4V13.3333C3.33333 13.687 3.47381 14.0261 3.72386 14.2761C3.97391 14.5262 4.31305 14.6667 4.66667 14.6667H11.3333C11.687 14.6667 12.0261 14.5262 12.2761 14.2761C12.5262 14.0261 12.6667 13.687 12.6667 13.3333V4H3.33333Z" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upload Contract Section */}
          <div className="upload-contract-section">
            <h2 className="section-heading">Upload Contract</h2>
            
            <div className="upload-area">
              {/* <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <path d="M24 8V32M8 16L24 8L40 16" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 32H40C41.1046 32 42 32.8954 42 34V40C42 41.1046 41.1046 42 40 42H8C6.89543 42 6 41.1046 6 40V34C6 32.8954 6.89543 32 8 32Z" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg> */}
               {/* <button className="action-btn download-btn" title="Download"> */}
                      <svg width="46" height="36" viewBox="0 0 16 16" fill="none">
                        <path d="M8 11.3333V2.66667M8 2.66667L5.33333 5.33334M8 2.66667L10.6667 5.33334" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M2.66667 11.3333V13.3333C2.66667 13.687 2.80714 14.0261 3.05719 14.2762C3.30724 14.5262 3.64638 14.6667 4 14.6667H12C12.3536 14.6667 12.6928 14.5262 12.9428 14.2762C13.1929 14.0261 13.3333 13.687 13.3333 13.3333V11.3333" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    {/* </button> */}
              <p className="upload-text">Drag and drop PDF files here</p>
            </div>

            <div className="form-group">
              <label>Contract Name</label>
              <input
                type="text"
                className="form-input"
                placeholder="Enter contract name"
                value={contractName}
                onChange={(e) => setContractName(e.target.value)}
              />
            </div>

            <button className="upload-contract-button">
              {/* <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 4.16667V15.8333M4.16667 10H15.8333" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg> */}
               <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M8 11.3333V2.66667M8 2.66667L5.33333 5.33334M8 2.66667L10.6667 5.33334" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M2.66667 11.3333V13.3333C2.66667 13.687 2.80714 14.0261 3.05719 14.2762C3.30724 14.5262 3.64638 14.6667 4 14.6667H12C12.3536 14.6667 12.6928 14.5262 12.9428 14.2762C13.1929 14.0261 13.3333 13.687 13.3333 13.3333V11.3333" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
              <span>Upload Contract</span>
            </button>
          </div>

          {/* Digital Signature Setup Section */}
          <div className="signature-setup-section">
            <h2 className="section-heading">Digital Signature Setup</h2>
            <p className="section-subtitle">Configuration digital signature requirements for contracts</p>
            
            <div className="signature-pad-integration">
              <h3 className="integration-heading">Signature Pad Integration</h3>
              <div className="signature-controls-row">
                <div className="signature-toggle-field">
                  <span className="toggle-text">Enable In-App Signing</span>
                  <button className="edit-icon-btn">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M11.3333 2.00001C11.5084 1.8249 11.7163 1.68698 11.9444 1.5953C12.1726 1.50361 12.4159 1.46002 12.6667 1.46668C12.9174 1.47333 13.1578 1.53013 13.3789 1.63281C13.6 1.73549 13.7972 1.88172 13.9578 2.06223C14.1184 2.24274 14.2389 2.45359 14.3127 2.68144C14.3865 2.90929 14.412 3.14912 14.3878 3.38668C14.3636 3.62424 14.2901 3.85439 14.1718 4.06223C14.0535 4.27007 13.8931 4.45058 13.7 4.59334L5.66667 12.6267L1.33333 13.3333L2.04 9L11.3333 2.00001Z" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>

                <div className="signature-upload-area">
                  <svg width="20" height="20" viewBox="0 0 16 16" fill="none">
                    <path d="M8 11.3333V2.66667M8 2.66667L5.33333 5.33334M8 2.66667L10.6667 5.33334" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2.66667 11.3333V13.3333C2.66667 13.687 2.80714 14.0261 3.05719 14.2762C3.30724 14.5262 3.64638 14.6667 4 14.6667H12C12.3536 14.6667 12.6928 14.5262 12.9428 14.2762C13.1929 14.0261 13.3333 13.687 13.3333 13.3333V11.3333" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <p className="upload-text">PNG or JPG signature file</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContractsEstimates;

