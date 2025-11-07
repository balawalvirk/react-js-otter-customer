import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CompanyHeader from '../companyHeader';
import completeIcon from '../../../assets/icons/complete.png';
import tickIcon from '../../../assets/icons/tick.png';
import crossIcon from '../../../assets/icons/cross.png';
import './companyHome.css';

const CompanyHome = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('home');

  const handleLogout = () => {
    navigate('/company-logout');
  };

  const navigationItems = [
    {
      key: 'home',
      label: 'Home',
      onPress: () => setActiveTab('home')
    },
    {
      key: 'tech-management',
      label: 'Tech Management',
      onPress: () => navigate('/tech-management')
    },
    {
      key: 'contracts',
      label: 'Contract & Estimates',
      onPress: () => navigate('/contracts-estimates')
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

  const kpiCards = [
    {
      id: 1,
      title: 'Monthly Revenue',
      value: '$24,580',
      change: '+12.5% from last month',
      changeColor: '#10B981',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 2V22M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      iconBg: '#D1FAE5'
    },
    {
      id: 2,
      title: 'Jobs Completed',
      value: '142',
      change: '+8 jobs this week',
      changeColor: '#0D90B2',
      icon: (
        <img src={completeIcon} alt="Jobs Completed" width="35" height="35" />
      ),
      iconBg: '#DBEAFE'
    },
    {
      id: 3,
      title: 'Average Rating',
      value: '4.8',
      change: 'Based on 89 reviews',
      changeColor: '#F59E0B',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      iconBg: '#FEF3C7'
    },
    {
      id: 4,
      title: 'Pending Jobs',
      value: '7',
      change: 'Awaiting assignment',
      changeColor: '#FFD400',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#FFD400" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 6V12L16 14" stroke="#FFD400" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      iconBg: '#FFFBEB'
    }
  ];

  const jobs = [
    {
      id: 1,
      type: 'HVAC Repair',
      priority: 'High',
      priorityBgColor: '#EF4444',
      customer: 'Sarah Johnson',
      address: '123 Oak Street',
      checked: true
    },
    {
      id: 2,
      type: 'Plumbing Installation',
      priority: 'Medium',
      priorityBgColor: '#10B981',
      customer: 'Mike Davis',
      address: '426 Pine Avenue',
      checked: false
    },
    {
      id: 3,
      type: 'Electrical Inspection',
      priority: 'Low',
      priorityBgColor: '#F59E0B',
      customer: 'Lisa Chen',
      address: '789 Elm Drive',
      checked: false
    }
  ];

  const businessProfile = [
    {
      id: 1,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      iconBg: '#D1FAE5',
      iconColor: '#10B981',
      title: 'Otter Executive Services',
      subtitle: 'Home Services Company'
    },
    {
      id: 2,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      iconBg: '#DBEAFE',
      iconColor: '#3B82F6',
      title: 'Service Area: 25 mile radius',
      subtitle: 'Home Services Company'
    },
    {
      id: 3,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7293C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1468 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.18999 12.85C3.49997 10.2412 2.44824 7.27097 2.11999 4.18C2.095 3.90347 2.12787 3.62476 2.21649 3.36162C2.30512 3.09849 2.44756 2.85669 2.63476 2.65162C2.82196 2.44655 3.0498 2.28271 3.30379 2.17052C3.55777 2.05833 3.83233 2.00026 4.10999 2H7.10999C7.59524 1.99522 8.06572 2.16708 8.43369 2.48353C8.80166 2.79999 9.04201 3.23945 9.10999 3.72C9.23662 4.68007 9.47144 5.62273 9.80999 6.53C9.94454 6.88792 9.97366 7.27691 9.8939 7.65088C9.81415 8.02485 9.62886 8.36811 9.35999 8.64L8.08999 9.91C9.51355 12.4135 11.5864 14.4864 14.09 15.91L15.36 14.64C15.6319 14.3711 15.9751 14.1858 16.3491 14.1061C16.7231 14.0263 17.1121 14.0555 17.47 14.19C18.3773 14.5286 19.3199 14.7634 20.28 14.89C20.7658 14.9585 21.2094 15.2032 21.5265 15.5775C21.8437 15.9518 22.0122 16.4296 22 16.92Z" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      iconBg: '#FEF3C7',
      iconColor: '#F59E0B',
      title: '(555) 123-4567',
      subtitle: ''
    },
    {
      id: 4,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M22 6L12 13L2 6" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      iconBg: '#FEF3C7',
      iconColor: '#F59E0B',
      title: 'Admin@otterservicer.com',
      subtitle: ''
    }
  ];

  const services = ['HVAC', 'Plumbing', 'Electrical', 'Appliance repair'];

  return (
    <div className="company-home-container">
      {/* Company Header Component */}
      <CompanyHeader activeTab={activeTab} navigationItems={navigationItems} />

      {/* Main Content */}
      <div className="company-main-content">
        {/* Dashboard Header */}
        <div className="dashboard-header">
          <h1 className="dashboard-title">Company Dashboard</h1>
          <p className="dashboard-subtitle">Manage your business operations and monitor performance</p>
        </div>

        {/* KPI Cards */}
        <div className="kpi-grid">
          {kpiCards.map(card => (
            <div key={card.id} className="kpi-card">
              <div className="kpi-info">
              {card.id === 2 ? 
                card.icon
              :
                <div className="kpi-icon" style={{ 
                  border: `1px solid ${card.changeColor}`, 
                  borderRadius: '2px',
                  background: `${card.changeColor}20`
                }}>
                  {card.icon}
                </div>}
                <h3 className="kpi-title">{card.title}</h3>
              </div>
              <h2 className="kpi-value" style={{ color: card.changeColor }}>{card.value}</h2>
              <p className="kpi-change">{card.change}</p>
            </div>
          ))}
        </div>

        {/* Job Queue Section */}
        <div className="job-queue-section">
          <div className="section-header">
            <h2 className="section-heading">Job Queue</h2>
            <span className="pending-badge">3 Pending</span>
          </div>

          <div className="jobs-list">
            {jobs.map(job => (
              <div key={job.id} className="job-card">
                <div className="job-info">
                  <div className="job-header">
                    <h3 className="job-type">{job.type}</h3>
                    <span 
                      className="priority-badge" 
                      style={{ backgroundColor: job.priorityBgColor }}
                    >
                      {job.priority}
                    </span>
                  </div>
                  <p className="job-customer">{job.customer}</p>
                  <div className="job-address">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M14 6.66667C14 11.3333 8 15.3333 8 15.3333C8 15.3333 2 11.3333 2 6.66667C2 5.07536 2.63214 3.54926 3.75736 2.42405C4.88258 1.29883 6.40869 0.666672 8 0.666672C9.59131 0.666672 11.1174 1.29883 12.2426 2.42405C13.3679 3.54926 14 5.07536 14 6.66667Z" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M8 8.66667C9.10457 8.66667 10 7.77124 10 6.66667C10 5.5621 9.10457 4.66667 8 4.66667C6.89543 4.66667 6 5.5621 6 6.66667C6 7.77124 6.89543 8.66667 8 8.66667Z" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>{job.address}</span>
                  </div>
                </div>
                <div className="job-actions">
                  <button className="delete-job-btn">
                    <img src={tickIcon} alt="Select" width="16" height="16" />
                  </button>
                  <button className="assign-job-btn">Assign Job</button>
                  <button className="delete-job-btn">
                    <img src={crossIcon} alt="Delete" width="16" height="16" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <button className="view-all-btn">View All Jobs</button>
        </div>

        {/* Business Profile Section */}
        <div className="business-profile-section">
          <h2 className="section-heading">Business Profile</h2>
          
          <div className="profile-grid">
            {businessProfile.map(item => (
              <div key={item.id} className="profile-card">
                <div className="profile-icon" style={{ 
                  background: item.iconBg,
                  borderColor: item.iconColor
                }}>
                  {item.icon}
                </div>
                <div className="profile-content">
                  <h3 className="profile-title">{item.title}</h3>
                  {item.subtitle && <p className="profile-subtitle">{item.subtitle}</p>}
                </div>
              </div>
            ))}
          </div>

          {/* Services Offered Section */}
          <div className="services-section">
            <h3 className="services-heading">Services Offered:</h3>
            <div className="services-tags">
              {services.slice(0, 3).map((service, index) => (
                <span key={index} className="service-tag">{service}</span>
              ))}
            </div>
            <div className="services-tags" style={{ marginTop: '0.5rem' }}>
              {services.slice(3).map((service, index) => (
                <span key={index + 3} className="service-tag">{service}</span>
              ))}
            </div>
          </div>

          {/* Edit Profile Button */}
          <div className="edit-profile-container">
            <button className="edit-profile-btn">Edit Profile</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyHome;

