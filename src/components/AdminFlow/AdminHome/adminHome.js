import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminHeader from '../adminHeader';
import companiesIcon from '../../../assets/icons/companies.png';
import starIcon from '../../../assets/icons/star.png';
import disputesIcon from '../../../assets/icons/disputes.png';
import revenueIcon from '../../../assets/icons/revenue.png';
import flagIcon from '../../../assets/icons/Flag.png';
import editIcon from '../../../assets/icons/edit.png';
import eyeIcon from '../../../assets/icons/eye.png';
import downloadIcon from '../../../assets/icons/download.png';
import threeDotsIcon from '../../../assets/icons/3dots.png';
import tickIcon from '../../../assets/icons/tick.png';
import crossIcon from '../../../assets/icons/cross.png';
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
      changeColor: '#1E7318',
      icon: <img src={companiesIcon} alt="Companies" width="24" height="24" />,
      iconBg: 'transparent'
    },
    {
      id: 2,
      title: 'Active Disputes',
      value: '142',
      change: '8% from last month',
      changeColor: '#0D90B2',
      icon: <img src={disputesIcon} alt="Disputes" width="24" height="24" />,
      iconBg: 'transparent'
    },
    {
      id: 3,
      title: 'Monthly Revenue',
      value: '4.8',
      change: '15% from last month',
      changeColor: '#F59E0B',
      icon: <img src={revenueIcon} alt="Revenue" width="24" height="24" />,
      iconBg: 'transparent'
    },
    {
      id: 4,
      title: 'Flagged Companies',
      value: '7',
      change: '3% from last month',
      changeColor: '#EF4444',
      icon: <img src={flagIcon} alt="Flagged" width="24" height="24" />,
      iconBg: 'transparent'
    }
  ];

  const recentDisputes = [
    {
      id: 'DSP - 001',
      client: 'Jaun Perez',
      amount: '$450',
      status: 'Open',
      statusColor: '#8CCA19'
    },
    {
      id: 'DSP - 002',
      client: 'Jaun Perez',
      amount: '$450',
      status: 'Pending',
      statusColor: '#F9CF47'
    },
    {
      id: 'DSP - 003',
      client: 'Carlos Ruiz',
      amount: '$450',
      status: 'Open',
      statusColor: '#8CCA19'
    },
    {
      id: 'DSP - 004',
      client: 'Sofia Lopez',
      amount: '$450',
      status: 'Open',
      statusColor: '#8CCA19'
    },
    {
      id: 'DSP - 005',
      client: 'Sofia Lopez',
      amount: '$450',
      status: 'Open',
      statusColor: '#8CCA19'
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
      statusColor: '#F9CF47',
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
              <table >
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
                            <img src={editIcon} alt="Edit" width="14" height="14" />
                          </button>
                          <button className="action-icon-btn">
                            <img src={eyeIcon} alt="View" width="14" height="14" />
                          </button>
                          <button className="action-icon-btn">
                            <img src={downloadIcon} alt="Download" width="14" height="14" />
                          </button>
                          <button className="action-icon-btn">
                            <img src={threeDotsIcon} alt="More" width="14" height="14" />
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
                    <div className="company-header-row">
                      <h3 className="company-name">{company.name}</h3>
                      <span 
                        className="status-badge" 
                        style={{ 
                          backgroundColor: company.statusColor,
                          color: company.status === 'Pending' ? '#111827' : 'white'
                        }}
                      >
                        {company.status}
                      </span>
                    </div>
                    <div className="company-details">
                      <span className="rating-text">
                        <img src={starIcon} alt="Star" width="14" height="14" style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                        {company.rating}
                      </span>
                      <span className="complaints-text">{company.complaints}</span>
                    </div>
                  </div>
                  <div className="company-actions">
                    <button className="approve-btn">
                      <span className="icon-box">
                        <img src={tickIcon} alt="Approve" width="14" height="14" />
                      </span>
                      <span className="btn-text">Approve</span>
                    </button>
                    <button className="suspend-btn">
                      <span className="icon-box">
                        <img src={crossIcon} alt="Suspend" width="14" height="14" />
                      </span>
                      <span className="btn-text">Suspend</span>
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

