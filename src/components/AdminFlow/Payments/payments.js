import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminHeader from '../adminHeader';
import atmIcon from '../../../assets/icons/atm.png';
import editIcon from '../../../assets/icons/edit.png';
import eyeIcon from '../../../assets/icons/eye.png';
import downloadIcon from '../../../assets/icons/download.png';
import threeDotsIcon from '../../../assets/icons/3dots.png';
import filterIcon from '../../../assets/icons/filter.png';
import './payments.css';

const Payments = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('payments');

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
      onPress: () => setActiveTab('payments')
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
      onPress: () => navigate('/admin-logout')
    }
  ];

  const transactions = [
    {
      id: 'INV-0034',
      technician: 'Jaun Perez',
      type: '05 May 2025',
      amount: '€450',
      status: 'Paid',
      statusColor: '#10B981'
    },
    {
      id: 'INV-0034',
      technician: 'Jaun Perez',
      type: '06 May 2025',
      amount: '€450',
      status: 'Pending',
      statusColor: '#F59E0B'
    },
    {
      id: 'INV-0036',
      technician: 'Carlos Ruiz',
      type: '07 May 2025',
      amount: '€450',
      status: 'Paid',
      statusColor: '#10B981'
    },
    {
      id: 'INV-0037',
      technician: 'Sofia Lopez',
      type: '08 May 2025',
      amount: '€450',
      status: 'Paid',
      statusColor: '#10B981'
    },
    {
      id: 'INV-0037',
      technician: 'Sofia Lopez',
      type: '08 May 2025',
      amount: '€450',
      status: 'Paid',
      statusColor: '#10B981'
    },
    {
      id: 'INV-0038',
      technician: 'Lucas Martinez',
      type: '09 May 2025',
      amount: '€450',
      status: 'Pending',
      statusColor: '#F59E0B'
    }
  ];

  return (
    <div className="admin-payments-container">
      <AdminHeader activeTab={activeTab} navigationItems={navigationItems} />

      <div className="admin-main-content">
        <div className="page-header">
          <h1 className="page-title">Payments</h1>
          <p className="page-subtitle">Track earnings, manage payouts, and view financial reports</p>
        </div>

        <div className="bank-wallet-section">
          <h2 className="section-title">Bank Account & Wallet</h2>
          <p className="section-subtitle">Manage your linked accounts and payment methods</p>
          <div className="bank-account-card">
            <div className="bank-icon">
              <img src={atmIcon} alt="Bank" width="48" height="48" />
            </div>
            <div className="bank-info">
              <h3 className="bank-name">Chase Business Checking</h3>
              <p className="bank-account">******1234</p>
            </div>
            <button className="connected-btn">Connected</button>
          </div>
        </div>

        <div className="transactions-section">
          <h2 className="section-title">Transactions History</h2>
          <p className="section-subtitle">View and manage all payment transaction</p>
          
          <div className="transactions-filter-bar">
            <div className="search-container">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="search-icon">
                <path d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17.5 17.5L13.875 13.875" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <input 
                type="text" 
                placeholder="Search transaction..." 
                className="search-input"
              />
            </div>
            <div className="filter-select-wrapper">
              <img src={filterIcon} alt="Filter" width="16" height="16" className="select-filter-icon" />
              <select className="filter-select">
                <option>All Types</option>
              </select>
            </div>
            <select className="filter-select">
              <option>All status</option>
            </select>
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
                {transactions.map((transaction, index) => (
                  <tr key={index}>
                    <td>{transaction.id}</td>
                    <td>{transaction.technician}</td>
                    <td>{transaction.type}</td>
                    <td>{transaction.amount}</td>
                    <td>
                      <span className="status-badge" style={{ backgroundColor: transaction.statusColor }}>
                        {transaction.status}
                      </span>
                    </td>
                    <td>
                      <div className="action-icons">
                        <button className="action-icon-btn">
                          <img src={editIcon} alt="Edit" width="16" height="16" />
                        </button>
                        <button className="action-icon-btn">
                          <img src={eyeIcon} alt="View" width="16" height="16" />
                        </button>
                        <button className="action-icon-btn">
                          <img src={downloadIcon} alt="Download" width="16" height="16" />
                        </button>
                        <button className="action-icon-btn">
                          <img src={threeDotsIcon} alt="More" width="16" height="16" />
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

