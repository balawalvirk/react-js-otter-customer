import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminHeader from '../adminHeader';
import alertIcon from '../../../assets/icons/alert.png';
import './ratings.css';

const Ratings = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('ratings');

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
      onPress: () => setActiveTab('ratings')
    },
    {
      key: 'logout',
      label: 'Logout',
      onPress: () => navigate('/admin-logout')
    }
  ];

  const metrics = [
    {
      id: 1,
      title: 'Average Rating',
      value: '4.1',
      color: '#EF4444'
    },
    {
      id: 2,
      title: 'Total companies',
      value: '247',
      color: '#3B82F6'
    },
    {
      id: 3,
      title: 'Flagged Companies',
      value: '12',
      color: '#10B981'
    },
    {
      id: 4,
      title: 'Weekly Trend',
      value: '+0.15',
      color: '#F59E0B'
    }
  ];

  const companyPerformance = [
    {
      name: 'FutureTech Solutions',
      time: 'Just now',
      message: 'The proposal seems promising, but we should clarify the deadlines...',
      tags: ['1m 45s', '2 proposals'],
      status: 'Proposal Assessment',
      statusColor: '#FFD400',
      statusBg: '#FFFBE8'
    },
    {
      name: 'Creative Dynamics LLC',
      time: '3 minutes ago',
      message: 'I agree with the proposal. Let\'s finalize everything in our upcoming meeting.',
      tags: ['45s', '2 proposals'],
      status: 'Cost Discussion',
      statusColor: '#D200FF',
      statusBg: '#FBE6FF'
    },
    {
      name: 'Visionary Tech Group',
      time: '3 minutes ago',
      message: 'The pricing seems a bit steep. Can we explore more budget-friendly options?',
      tags: ['3m 15s', '2 proposals'],
      status: 'Agreement Reached',
      statusColor: '#1E7318',
      statusBg: '#F0FFEF'
    }
  ];

  return (
    <div className="admin-ratings-container">
      <AdminHeader activeTab={activeTab} navigationItems={navigationItems} />

      <div className="admin-main-content">
        <div className="page-header">
          <h1 className="page-title">Rating Dashboard</h1>
          <p className="page-subtitle">Monitor company performance and ratings trends</p>
        </div>

        <div className="metrics-grid">
          {metrics.map(metric => (
            <div key={metric.id} className="metric-card">
              <h3 className="metric-title">{metric.title}</h3>
              <p className="metric-value" style={{ color: metric.color }}>{metric.value}</p>
            </div>
          ))}
        </div>

        <div className="company-performance-section">
          <h2 className="section-title">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ marginRight: '0.5rem', display: 'inline' }}>
              <path d="M10 1.66667L12.5 7.5L18.3333 8.75L14.1667 13.3333L15 19.1667L10 16.25L5 19.1667L5.83333 13.3333L1.66667 8.75L7.5 7.5L10 1.66667Z" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Company Performance
          </h2>
          <div className="performance-list">
            {companyPerformance.map((company, index) => (
              <div key={index} className="performance-card">
                <div className="performance-info">
                  <div className="performance-header">
                    <h3 className="performance-name">{company.name}</h3>
                    {/* <span className="performance-time">{company.time}</span> */}
                  </div>
                    <p className="performance-message" style={{marginBottom:1}}>{company.time}</p>
                  <p className="performance-message">{company.message}</p>
                  <div className="performance-tags">
                    {company.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
                <span 
                  className="performance-status" 
                  style={{ 
                    backgroundColor: company.statusBg,
                    color: company.statusColor,
                    borderColor: company.statusColor
                  }}
                >
                  {company.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="flagged-section">
          <h2 className="section-title">
            <img src={alertIcon} alt="Alert" width="20" height="20" style={{ marginRight: '0.5rem' }} />
            Flagged for removal
          </h2>
          <div className="flagged-card">
            <h3 className="flagged-company">Start up X</h3>
            <p className="flagged-reason">Rating below 3.0 threshold</p>
            <div className="flagged-actions">
              <button className="remove-btn">Remove</button>
              <button className="review-btn">Review</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ratings;

