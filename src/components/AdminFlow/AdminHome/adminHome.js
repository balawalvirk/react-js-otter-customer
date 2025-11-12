import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminHeader from '../adminHeader';
import './adminHome.css';

const AdminHome = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('home');

  const navigationItems = [
    {
      key: 'home',
      label: 'Home',
      onPress: () => setActiveTab('home')
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
      onPress: () => navigate('/admin-ratings')
    },
    {
      key: 'logout',
      label: 'Logout',
      onPress: () => navigate('/admin-logout')
    }
  ];

  const kpiCards = [
    {
      id: 1,
      title: 'Total Companies',
      value: '$24,580',
      change: '12% from last month',
      changeColor: '#10B981',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      iconBg: '#D1FAE5'
    },
    {
      id: 2,
      title: 'Active Disputes',
      value: '142',
      change: '8% from last month',
      changeColor: '#0D90B2',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="#0D90B2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14 2V8H20" stroke="#0D90B2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 13H8" stroke="#0D90B2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 17H8" stroke="#0D90B2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M10 9H9H8" stroke="#0D90B2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      iconBg: '#DBEAFE'
    },
    {
      id: 3,
      title: 'Monthly Revenue',
      value: '4.8',
      change: '15% from last month',
      changeColor: '#F59E0B',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 2V22M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      iconBg: '#FEF3C7'
    },
    {
      id: 4,
      title: 'Flagged Companies',
      value: '7',
      change: '3% from last month',
      changeColor: '#EF4444',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 9V13M12 17H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      iconBg: '#FEE2E2'
    }
  ];

  const recentDisputes = [
    {
      id: 'DSP - 001',
      client: 'Jaun Perez',
      amount: '$450',
      status: 'Open',
      statusColor: '#10B981'
    },
    {
      id: 'DSP - 002',
      client: 'Jaun Perez',
      amount: '$450',
      status: 'Pending',
      statusColor: '#F59E0B'
    },
    {
      id: 'DSP - 003',
      client: 'Carlos Ruiz',
      amount: '$450',
      status: 'Open',
      statusColor: '#10B981'
    },
    {
      id: 'DSP - 004',
      client: 'Sofia Lopez',
      amount: '$450',
      status: 'Open',
      statusColor: '#10B981'
    },
    {
      id: 'DSP - 005',
      client: 'Sofia Lopez',
      amount: '$450',
      status: 'Open',
      statusColor: '#10B981'
    }
  ];

  const companiesNeedingAttention = [
    {
      name: 'Budget Repairs Co',
      status: 'Suspended',
      statusColor: '#EF4444',
      rating: '2.1',
      complaints: '12 complaints'
    },
    {
      name: 'Fast Service LLC',
      status: 'Pending',
      statusColor: '#F59E0B',
      rating: '2.8',
      complaints: '8 Complaints'
    },
    {
      name: 'local Handyman',
      status: 'Active',
      statusColor: '#10B981',
      rating: '2.5',
      complaints: '15 complaints'
    }
  ];

  return (
    <div className="admin-home-container">
      <AdminHeader activeTab={activeTab} navigationItems={navigationItems} />

      <div className="admin-main-content">
        {/* <div className="dashboard-header">
          <h1 className="dashboard-title">Dashboard</h1>
        </div> */}

        <div className="kpi-grid">
          {kpiCards.map(card => (
            <div key={card.id} className="kpi-card">
              <div className="kpi-info">
                <div className="kpi-icon" style={{ 
                  background: card.iconBg
                }}>
                  {card.icon}
                </div>
                <h3 className="kpi-title">{card.title}</h3>
              </div>
              <h2 className="kpi-value" style={{ color: card.changeColor }}>{card.value}</h2>
              <p className="kpi-change">{card.change}</p>
            </div>
          ))}
        </div>

        <div className="content-layout">
          <div className="recent-disputes-section">
            <h2 className="section-heading">Recent Disputes</h2>
            <div className="disputes-table">
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Client/Vendor</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {recentDisputes.map((dispute, index) => (
                    <tr key={index}>
                      <td>{dispute.id}</td>
                      <td>{dispute.client}</td>
                      <td>{dispute.amount}</td>
                      <td>
                        <span className="status-badge" style={{ backgroundColor: dispute.statusColor }}>
                          {dispute.status}
                        </span>
                      </td>
                      <td>
                        <div className="action-icons">
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
                              <path d="M11.3333 2.00001C11.5084 1.82491 11.7163 1.68605 11.9447 1.59128C12.1731 1.49651 12.4173 1.44775 12.6667 1.44775C12.916 1.44775 13.1602 1.49651 13.3886 1.59128C13.617 1.68605 13.8249 1.82491 14 2.00001C14.1751 2.17511 14.314 2.38301 14.4087 2.61141C14.5035 2.83981 14.5523 3.08401 14.5523 3.33334C14.5523 3.58268 14.5035 3.82688 14.4087 4.05528C14.314 4.28368 14.1751 4.49158 14 4.66668L5.00001 13.6667L1.33334 14.6667L2.33334 11L11.3333 2.00001Z" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </button>
                          <button className="action-icon-btn">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                              <path d="M2 4H3.33333H14" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M5.33333 4V2.66667C5.33333 2.31305 5.47381 1.97391 5.72386 1.72386C5.97391 1.47381 6.31305 1.33333 6.66667 1.33333H9.33333C9.68696 1.33333 10.0261 1.47381 10.2761 1.72386C10.5262 1.97391 10.6667 2.31305 10.6667 2.66667V4M12.6667 4V13.3333C12.6667 13.687 12.5262 14.0261 12.2761 14.2761C12.0261 14.5262 11.687 14.6667 11.3333 14.6667H4.66667C4.31305 14.6667 3.97391 14.5262 3.72386 14.2761C3.47381 14.0261 3.33333 13.687 3.33333 13.3333V4H12.6667Z" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M6.66667 7.33333V11.3333" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M9.33333 7.33333V11.3333" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </button>
                          <button className="action-icon-btn">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                              <path d="M4 8H12" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
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

          <div className="companies-attention-section">
            <div className="section-header-row">
              <h2 className="section-heading">Companies Needing Attention</h2>
              <button className="view-all-btn">View All</button>
            </div>
            <div className="companies-list">
              {companiesNeedingAttention.map((company, index) => (
                <div key={index} className="company-card">
                  <div className="company-info">
                    <h3 className="company-name">{company.name}</h3>
                    <div className="company-details">
                      <span className="status-badge" style={{ backgroundColor: company.statusColor }}>
                        {company.status}
                      </span>
                      <span className="rating-text">{company.rating} stars</span>
                      <span className="complaints-text">{company.complaints}</span>
                    </div>
                  </div>
                  <div className="company-actions">
                    <button className="approve-btn">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M13.3333 4L6 11.3333L2.66667 8" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                    <button className="suspend-btn">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M12 4L4 12M4 4L12 12" stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;

