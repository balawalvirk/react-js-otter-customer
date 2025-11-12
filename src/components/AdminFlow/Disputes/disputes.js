import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminHeader from '../adminHeader';
import './disputes.css';

const Disputes = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('disputes');

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
      onPress: () => setActiveTab('disputes')
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
      onPress: () => navigate('/admin-logout')
    }
  ];

  const summaryCards = [
    {
      id: 1,
      title: 'Open Disputes',
      value: '8',
      color: '#EF4444',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 9V13M12 17H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      id: 2,
      title: 'Average Resolution',
      value: '2.4 days',
      color: '#0D90B2',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      id: 3,
      title: 'Resolved',
      value: '23',
      color: '#10B981',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      id: 4,
      title: 'Processing',
      value: '5',
      color: '#F59E0B',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  const disputes = [
    {
      id: 'DSP - 001',
      company: 'QuickFix Plu...',
      amount: '$4,587',
      priority: 'Medium',
      priorityColor: '#10B981',
      lastUpdate: '2 hour ago',
      status: 'Open',
      statusColor: '#10B981'
    },
    {
      id: 'DSP - 002',
      company: 'Elite Carpen...',
      amount: '$27.09',
      priority: 'Low',
      priorityColor: '#F59E0B',
      lastUpdate: '1 day ago',
      status: 'Pending',
      statusColor: '#F59E0B'
    },
    {
      id: 'DSP - 003',
      company: 'Budget Rep...',
      amount: '$6,798',
      priority: 'High',
      priorityColor: '#EF4444',
      lastUpdate: '3 days ago',
      status: 'Suspended',
      statusColor: '#EF4444'
    },
    {
      id: 'DSP - 004',
      company: 'Swift Electri...',
      amount: '$45,907',
      priority: 'Medium',
      priorityColor: '#10B981',
      lastUpdate: '30 minutes ago',
      status: 'Open',
      statusColor: '#10B981'
    },
    {
      id: 'DSP - 005',
      company: 'Fast Service...',
      amount: '$45,00',
      priority: 'Medium',
      priorityColor: '#10B981',
      lastUpdate: '4 hours ago',
      status: 'Open',
      statusColor: '#10B981'
    }
  ];

  return (
    <div className="admin-disputes-container">
      <AdminHeader activeTab={activeTab} navigationItems={navigationItems} />

      <div className="admin-main-content">
        <div className="page-header">
          <h1 className="page-title">Disputes</h1>
          <p className="page-subtitle">Manage customer disputes and resolution cases</p>
        </div>

        <div className="summary-cards-grid">
          {summaryCards.map(card => (
            <div key={card.id} className="summary-card">
              <div className="summary-icon" style={{ color: card.color }}>
                {card.icon}
              </div>
              <div className="summary-content">
                <h3 className="summary-title">{card.title}</h3>
                <p className="summary-value" style={{ color: card.color }}>{card.value}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="disputes-content-card">
          <div className="search-filter-bar">
            <input 
              type="text" 
              placeholder="Search companies by name or email..." 
              className="search-input"
            />
            <button className="search-btn">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17.5 17.5L13.875 13.875" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <select className="filter-select">
              <option>All Statuses</option>
            </select>
            <select className="filter-select">
              <option>All Priority</option>
            </select>
          </div>

          <div className="disputes-table-container">
            <table className="disputes-table">
              <thead>
                <tr>
                  <th>Dispute Id</th>
                  <th>Company</th>
                  <th>Amount</th>
                  <th>Priority</th>
                  <th>Last Update</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {disputes.map((dispute, index) => (
                  <tr key={index}>
                    <td>{dispute.id}</td>
                    <td>{dispute.company}</td>
                    <td>{dispute.amount}</td>
                    <td>
                      <span className="priority-badge" style={{ backgroundColor: dispute.priorityColor }}>
                        {dispute.priority}
                      </span>
                    </td>
                    <td>{dispute.lastUpdate}</td>
                    <td>
                      <span className="status-badge" style={{ backgroundColor: dispute.statusColor }}>
                        {dispute.status}
                      </span>
                    </td>
                    <td>
                      <div className="action-icons">
                        <button className="action-icon-btn">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M11.3333 2.00001C11.5084 1.82491 11.7163 1.68605 11.9447 1.59128C12.1731 1.49651 12.4173 1.44775 12.6667 1.44775C12.916 1.44775 13.1602 1.49651 13.3886 1.59128C13.617 1.68605 13.8249 1.82491 14 2.00001C14.1751 2.17511 14.314 2.38301 14.4087 2.61141C14.5035 2.83981 14.5523 3.08401 14.5523 3.33334C14.5523 3.58268 14.5035 3.82688 14.4087 4.05528C14.314 4.28368 14.1751 4.49158 14 4.66668L5.00001 13.6667L1.33334 14.6667L2.33334 11L11.3333 2.00001Z" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </button>
                        <button className="action-icon-btn">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M8 3C5.23858 3 3 5.23858 3 8C3 10.7614 5.23858 13 8 13C10.7614 13 13 10.7614 13 8C13 5.23858 10.7614 3 8 3Z" stroke="#6B7280" strokeWidth="1.5"/>
                            <path d="M8 10.6667C9.47276 10.6667 10.6667 9.47276 10.6667 8C10.6667 6.52724 9.47276 5.33333 8 5.33333C6.52724 5.33333 5.33333 6.52724 5.33333 8C5.33333 9.47276 6.52724 10.6667 8 10.6667Z" stroke="#6B7280" strokeWidth="1.5"/>
                            <path d="M2.66667 2.66667L3.33333 3.33333" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round"/>
                            <path d="M12.6667 12.6667L13.3333 13.3333" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round"/>
                          </svg>
                        </button>
                        <button className="action-icon-btn">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M8 5.33333C8.36819 5.33333 8.66667 5.63181 8.66667 6C8.66667 6.36819 8.36819 6.66667 8 6.66667C7.63181 6.66667 7.33333 6.36819 7.33333 6C7.33333 5.63181 7.63181 5.33333 8 5.33333Z" fill="#6B7280"/>
                            <path d="M8 8.66667C8.36819 8.66667 8.66667 8.96514 8.66667 9.33333C8.66667 9.70152 8.36819 10 8 10C7.63181 10 7.33333 9.70152 7.33333 9.33333C7.33333 8.96514 7.63181 8.66667 8 8.66667Z" fill="#6B7280"/>
                            <path d="M8 12C8.36819 12 8.66667 12.2985 8.66667 12.6667C8.66667 13.0349 8.36819 13.3333 8 13.3333C7.63181 13.3333 7.33333 13.0349 7.33333 12.6667C7.33333 12.2985 7.63181 12 8 12Z" fill="#6B7280"/>
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

export default Disputes;

