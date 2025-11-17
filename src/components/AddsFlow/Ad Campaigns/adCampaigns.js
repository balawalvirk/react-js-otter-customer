import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AddsHeader from '../addsHeader';
import threeDotsIcon from '../../../assets/icons/3dots.png';
import filterIcon from '../../../assets/icons/filter.png';
import chatIcon from '../../../assets/icons/home icons/chat.png';
import './adCampaigns.css';

const AdCampaigns = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('ad-campaigns');

  const navigationItems = [
    {
      key: 'analytics',
      label: 'Analytics',
      onPress: () => navigate('/adds-analytics')
    },
    {
      key: 'ad-campaigns',
      label: 'Ad Campaigns',
      onPress: () => navigate('/adds-ad-campaigns')
    },
    {
      key: 'payments',
      label: 'Payment',
      onPress: () => navigate('/adds-payment')
    },
    {
      key: 'engagement-reports',
      label: 'Engagement Reports',
      onPress: () => navigate('/adds-engagement-reports')
    }
  ];

  const campaigns = [
    {
      id: 1,
      name: 'Summer Promotio...',
      startDate: '2024-06-01',
      endDate: '2024-08-31',
      territory: 'California',
      dailySpend: '$95.50...',
      totalSpend: '$2,865',
      status: 'Open',
      statusColor: '#10B981'
    },
    {
      id: 2,
      name: 'Holiday Sale Camp...',
      startDate: '2024-11-15',
      endDate: '2024-12-31',
      territory: 'Los Angel...',
      dailySpend: '$150.00...',
      totalSpend: '$27.09',
      status: 'Pending',
      statusColor: '#F59E0B'
    },
    {
      id: 3,
      name: 'Spring Launch',
      startDate: '2024-03-01',
      endDate: '2024-05-31',
      territory: 'New York',
      dailySpend: '$0.00',
      totalSpend: '$6,798',
      status: 'Suspended',
      statusColor: '#EF4444'
    },
    {
      id: 4,
      name: 'New Product Awar...',
      startDate: '2024-07-15',
      endDate: '2024-09-30',
      territory: 'Texas',
      dailySpend: '$0.00...',
      totalSpend: '$45,907',
      status: 'Open',
      statusColor: '#10B981'
    },
    {
      id: 5,
      name: 'Back to School',
      startDate: '2024-08-01',
      endDate: '2024-09-15',
      territory: 'Florida',
      dailySpend: '$0.00...',
      totalSpend: '$45,00',
      status: 'Open',
      statusColor: '#10B981'
    }
  ];

  return (
    <div className="adds-ad-campaigns-container">
      <AddsHeader activeTab={activeTab} navigationItems={navigationItems} />

      <div className="adds-main-content">
        <div className="adds-page-header">
          <h1 className="adds-page-title">Ad Campaigns</h1>
          <p className="adds-page-subtitle">Manage your advertising campaigns</p>
        </div>

        <div className="ad-campaigns-content-card">
          <div className="ad-campaigns-search-filter-bar">
            <div className="ad-campaigns-chat-input-containers">
              <input
                type="text"
                placeholder="Search companies by name or email..."
                className="ad-campaigns-chat-input"
              />
              <img src={chatIcon} alt="Send" className="ad-campaigns-chat-icon" />
            </div>
            <div className="ad-campaigns-filter-select-wrapper">
              <img src={filterIcon} alt="Filter" width="16" height="16" className="ad-campaigns-select-filter-icon" />
              <select className="ad-campaigns-filter-select">
                <option>All Statuses</option>
              </select>
            </div>
            <select className="ad-campaigns-filter-select">
              <option>All Territories</option>
            </select>
          </div>

          <div className="ad-campaigns-table-container">
            <table className="ad-campaigns-table">
              <thead>
                <tr>
                  <th>Campaign Name</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Territory</th>
                  <th>Daily Spend</th>
                  <th>Total Spend</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {campaigns.map((campaign) => (
                  <tr key={campaign.id}>
                    <td>{campaign.name}</td>
                    <td>{campaign.startDate}</td>
                    <td>{campaign.endDate}</td>
                    <td>{campaign.territory}</td>
                    <td>{campaign.dailySpend}</td>
                    <td>{campaign.totalSpend}</td>
                    <td>
                      <span 
                        className="ad-campaigns-status-badge" 
                        style={{ 
                          backgroundColor: campaign.statusColor,
                          color: campaign.status === 'Pending' ? '#111827' : 'white'
                        }}
                      >
                        {campaign.status}
                      </span>
                    </td>
                    <td>
                      <div className="ad-campaigns-action-icons">
                        <button className="ad-campaigns-action-icon-btn">
                          <img src={threeDotsIcon} alt="More" width="16" height="16" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="ad-campaigns-create-button-wrapper">
            <button className="ad-campaigns-create-button">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ marginRight: '0.5rem' }}>
                <path d="M12 5V19M5 12H19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Create Campaign
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdCampaigns;

