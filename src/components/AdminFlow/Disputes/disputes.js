import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminHeader from '../adminHeader';
import searchIcon from '../../../assets/icons/search.png';
import editIcon from '../../../assets/icons/edit.png';
import eyeIcon from '../../../assets/icons/eye.png';
import downloadIcon from '../../../assets/icons/download.png';
import threeDotsIcon from '../../../assets/icons/3dots.png';
import filterIcon from '../../../assets/icons/filter.png';
import disputesIcon from '../../../assets/icons/disputes.png';
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
      statusColor: '#8CCA19'
    },
    {
      id: 'DSP - 002',
      company: 'Elite Carpen...',
      amount: '$27.09',
      priority: 'Low',
      priorityColor: '#F59E0B',
      lastUpdate: '1 day ago',
      status: 'Pending',
      statusColor: '#F9CF47'
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
      statusColor: '#8CCA19'
    },
    {
      id: 'DSP - 005',
      company: 'Fast Service...',
      amount: '$45,00',
      priority: 'Medium',
      priorityColor: '#10B981',
      lastUpdate: '4 hours ago',
      status: 'Open',
      statusColor: '#8CCA19'
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

        <div className="disputes-content-card">
          <div className="summary-cards-grid">
            {summaryCards.map(card => (
              <div key={card.id} className="summary-card">
                <div className="summary-icon" style={{ backgroundColor: card.color + '20', color: card.color, borderColor: card.color }}>
                  {card.icon}
                </div>
                <div className="summary-content-wrapper">
                  <h3 className="summary-title">{card.title}</h3>
                  <p className="summary-value" style={{ color: card.color }}>{card.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="search-filter-bar">
            <div className="search-container">
              <input 
                type="text" 
                placeholder="Search companies by name or email..." 
                className="search-input"
              />
              {/* <button className="search-send-btn"> */}
                <img src={searchIcon} alt="Search" width="26" height="26" style={{marginRight:5}} />
              {/* </button> */}
            </div>
            <div className="filter-select-wrapper">
              <img src={filterIcon} alt="Filter" width="16" height="16" className="select-filter-icon" />
              <select className="filter-select">
                <option>All Statuses</option>
              </select>
            </div>
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
                      <span 
                        className="status-badge" 
                        style={{ 
                          backgroundColor: dispute.statusColor,
                          color: dispute.status === 'Pending' ? '#111827' : 'white'
                        }}
                      >
                        {dispute.status}
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

export default Disputes;

