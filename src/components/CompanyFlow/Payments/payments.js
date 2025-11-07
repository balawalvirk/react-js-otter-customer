import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CompanyHeader from '../companyHeader';
import atmIcon from '../../../assets/icons/atm.png';
import './payments.css';

const Payments = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('payments');
  const [searchQuery, setSearchQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState('All Types');
  const [statusFilter, setStatusFilter] = useState('All status');

  const handleLogout = () => {
    navigate('/company-logout');
  };

  const navigationItems = [
    { key: 'home', label: 'Home', onPress: () => navigate('/company-home') },
    { key: 'tech-management', label: 'Tech Management', onPress: () => navigate('/tech-management') },
    { key: 'contracts', label: 'Contract & Estimates', onPress: () => navigate('/contracts-estimates') },
    { key: 'payments', label: 'Payments', onPress: () => navigate('/payments') },
    { key: 'logout', label: 'Logout', onPress: handleLogout }
  ];

  const transactions = [
    {
      id: 1,
      transactionId: 'INV-0034',
      technician: 'Jaun Perez',
      type: '05 May 2025',
      amount: '€450',
      status: 'Paid',
      statusColor: '#AFE944'
    },
    {
      id: 2,
      transactionId: 'INV-0034',
      technician: 'Jaun Perez',
      type: '06 May 2025',
      amount: '€450',
      status: 'Pending',
      statusColor: '#F9CF47'
    },
    {
      id: 3,
      transactionId: 'INV-0036',
      technician: 'Carlos Ruiz',
      type: '07 May 2025',
      amount: '€450',
      status: 'Paid',
      statusColor: '#AFE944'
    },
    {
      id: 4,
      transactionId: 'INV-0037',
      technician: 'Sofia Lopez',
      type: '08 May 2025',
      amount: '€450',
      status: 'Paid',
      statusColor: '#AFE944'
    },
    {
      id: 5,
      transactionId: 'INV-0037',
      technician: 'Sofia Lopez',
      type: '08 May 2025',
      amount: '€450',
      status: 'Paid',
      statusColor: '#AFE944'
    },
    {
      id: 6,
      transactionId: 'INV-0038',
      technician: 'Lucas Martinez',
      type: '09 May 2025',
      amount: '€450',
      status: 'Pending',
      statusColor: '#F9CF47'
    }
  ];

  return (
    <div className="payments-container">
      <CompanyHeader activeTab={activeTab} navigationItems={navigationItems} />

      <div className="payments-main-content">
        <div className="dashboard-header">
          <h1 className="dashboard-title">Payments</h1>
          <p className="dashboard-subtitle">Track earnings, manage payouts, and view financial reports</p>
        </div>

        {/* Bank Account & Wallet Section */}
        <div className="bank-account-section">
          <h2 className="section-heading">Bank Account & Wallet</h2>
          <p className="section-subtitle">Manage your linked accounts and payment methods</p>
          
          <div className="bank-account-card">
            <div className="bank-icon">
              <img src={atmIcon} alt="ATM" width="24" height="24" />
            </div>
            <div className="bank-info">
              <h3 className="bank-name">Chase Business Checking</h3>
              <p className="bank-account-number">*******1234</p>
            </div>
            <span className="connected-badge">Connected</span>
          </div>
        </div>

        {/* Transactions History Section */}
        <div className="transactions-section">
          <h2 className="section-heading">Transactions History</h2>
          <p className="section-subtitle">View and manage all payment transaction</p>

          <div className="transactions-filters">
            <div className="search-bar">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14 14L11.1 11.1" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <input
                type="text"
                placeholder="Search transaction..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
            </div>
            <div className="filter-dropdowns">
              <div className="select-wrapper">
                <select 
                  className="filter-select"
                  value={typeFilter}
                  onChange={(e) => setTypeFilter(e.target.value)}
                >
                  <option>All Types</option>
                </select>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M4 6L8 10L12 6" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="select-wrapper">
                <select 
                  className="filter-select"
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                >
                  <option>All status</option>
                </select>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M4 6L8 10L12 6" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>

          <div className="transactions-table-container">
            <table className="transactions-table">
              <thead>
                <tr>
                  <th>Transaction ID</th>
                  <th>Technician</th>
                  <th>Type</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map(transaction => (
                  <tr key={transaction.id}>
                    <td>{transaction.transactionId}</td>
                    <td>{transaction.technician}</td>
                    <td>{transaction.type}</td>
                    <td>{transaction.amount}</td>
                    <td>
                      <span 
                        className="status-badge" 
                        style={{ backgroundColor: transaction.statusColor, color: 'white' }}
                      >
                        {transaction.status}
                      </span>
                    </td>
                    <td>
                      <div className="action-buttons">
                        <button className="action-btn" title="Edit">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M11.3333 2.00001C11.5084 1.8249 11.7163 1.68698 11.9444 1.5953C12.1726 1.50361 12.4159 1.46002 12.6667 1.46668C12.9174 1.47333 13.1578 1.53013 13.3789 1.63281C13.6 1.73549 13.7972 1.88172 13.9578 2.06223C14.1184 2.24274 14.2389 2.45359 14.3127 2.68144C14.3865 2.90929 14.412 3.14912 14.3878 3.38668C14.3636 3.62424 14.2901 3.85439 14.1718 4.06223C14.0535 4.27007 13.8931 4.45058 13.7 4.59334L5.66667 12.6267L1.33333 13.3333L2.04 9L11.3333 2.00001Z" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </button>
                        <button className="action-btn" title="View">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M8 2.66667C3.33333 2.66667 1.33333 8 1.33333 8C1.33333 8 3.33333 13.3333 8 13.3333C12.6667 13.3333 14.6667 8 14.6667 8C14.6667 8 12.6667 2.66667 8 2.66667Z" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M8 10.6667C9.47276 10.6667 10.6667 9.47276 10.6667 8C10.6667 6.52724 9.47276 5.33334 8 5.33334C6.52724 5.33334 5.33333 6.52724 5.33333 8C5.33333 9.47276 6.52724 10.6667 8 10.6667Z" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </button>
                        <button className="action-btn" title="Download">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M8 2.66667V11.3333M8 11.3333L5.33333 8.66667M8 11.3333L10.6667 8.66667" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M2.66667 11.3333V13.3333C2.66667 13.687 2.80714 14.0261 3.05719 14.2762C3.30724 14.5262 3.64638 14.6667 4 14.6667H12C12.3536 14.6667 12.6928 14.5262 12.9428 14.2762C13.1929 14.0261 13.3333 13.687 13.3333 13.3333V11.3333" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </button>
                        <button className="action-btn" title="More options">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M8 8.66667C8.36819 8.66667 8.66667 8.36819 8.66667 8C8.66667 7.63181 8.36819 7.33334 8 7.33334C7.63181 7.33334 7.33333 7.63181 7.33333 8C7.33333 8.36819 7.63181 8.66667 8 8.66667Z" fill="#9CA3AF" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M8 4.00001C8.36819 4.00001 8.66667 3.70154 8.66667 3.33334C8.66667 2.96515 8.36819 2.66667 8 2.66667C7.63181 2.66667 7.33333 2.96515 7.33333 3.33334C7.33333 3.70154 7.63181 4.00001 8 4.00001Z" fill="#9CA3AF" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M8 13.3333C8.36819 13.3333 8.66667 13.0349 8.66667 12.6667C8.66667 12.2985 8.36819 12 8 12C7.63181 12 7.33333 12.2985 7.33333 12.6667C7.33333 13.0349 7.63181 13.3333 8 13.3333Z" fill="#9CA3AF" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payments;

