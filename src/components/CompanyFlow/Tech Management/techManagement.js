import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CompanyHeader from '../companyHeader';
import techOne from '../../../assets/icons/tech one.png';
import techTwo from '../../../assets/icons/tech two.png';
import addNewTechnicianIcon from '../../../assets/icons/Add New Technician.png';
import manageRolesIcon from '../../../assets/icons/Manage Roles.png';
import './techManagement.css';

const TechManagement = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('tech-management');

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
      onPress: () => setActiveTab('tech-management')
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

  const summaryCards = [
    {
      id: 1,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="#1E7318" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8.5 11C10.7091 11 12.5 9.20914 12.5 7C12.5 4.79086 10.7091 3 8.5 3C6.29086 3 4.5 4.79086 4.5 7C4.5 9.20914 6.29086 11 8.5 11Z" stroke="#1E7318" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="#1E7318" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="#1E7318" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      value: '4',
      label: 'Total Techs',
      iconColor: '#1E7318'
    },
    {
      id: 2,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="#0D90B2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="#0D90B2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      value: '2',
      label: 'Available',
      iconColor: '#0D90B2'
    },
    {
      id: 3,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      value: '1',
      label: 'On Job',
      iconColor: '#F59E0B'
    },
    {
      id: 4,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="#FFD400" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      value: '4.8',
      label: 'Avg Rating',
      iconColor: '#FFD400'
    }
  ];

  const technicians = [
    {
      id: 1,
      name: 'John Martinez',
      role: 'Senior HVAC Tech',
      phone: '(555) 234-6789',
      email: 'John@otter.com',
      skills: ['HVAC', 'Electrical'],
      rating: '4.9',
      jobs: '156 jobs',
      avatar: techOne
    },
    {
      id: 2,
      name: 'Sarah Wilson',
      role: 'Plumbing Specialist',
      phone: '(555) 234-6789',
      email: 'sarah@otter.com',
      skills: ['Plumbing', 'Water Heaters'],
      rating: '4.8',
      jobs: '203 jobs',
      avatar: techTwo
    },
    {
      id: 3,
      name: 'Mike Thompson',
      role: 'Electrical Technician',
      phone: '(555) 234-6789',
      email: 'mike@otter.com',
      skills: ['Electrical', 'Smart Home'],
      rating: '4.8',
      jobs: '203 jobs',
      avatar: techTwo
    }
  ];

  return (
    <div className="tech-management-container">
      {/* Company Header Component */}
      <CompanyHeader activeTab={activeTab} navigationItems={navigationItems} />

      {/* Main Content */}
      <div className="tech-main-content">
        {/* Dashboard Header */}
        <div className="tech-dashboard-header">
          <h1 className="tech-dashboard-title">Tech Management</h1>
          <p className="tech-dashboard-subtitle">Manage you service technicians and job assignments</p>
        </div>

        {/* Summary Cards */}
        <div className="tech-summary-grid">
          {summaryCards.map(card => (
            <div key={card.id} className="tech-summary-card">
              <div className="tech-summary-icon" style={{ 
                border: `1px solid ${card.iconColor}`, 
                borderRadius: '2px',
                background: `${card.iconColor}20`
              }}>
                {card.icon}
              </div>
              <div className="tech-summary-content">
                <h2 className="tech-summary-value" style={{ color: card.iconColor }}>{card.value}</h2>
                <p className="tech-summary-label">{card.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Service Technicians Section */}
        <div className="technicians-section">
          <h2 className="technicians-heading">Service Technicians</h2>
          
          <div className="technicians-list">
            {technicians.map(tech => (
              <div key={tech.id} className="technician-card">
                <div className="technician-left">
                  <div className="technician-avatar">
                    <img src={tech.avatar} alt={tech.name} />
                  </div>
                  <div className="technician-info">
                    <h3 className="technician-name">{tech.name}</h3>
                    <p className="technician-role">{tech.role}</p>
                    <div className="technician-contact">
                      <div className="contact-item">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M14.6667 11.3333V13.3333C14.6674 13.5985 14.5627 13.8528 14.3751 14.0404C14.1875 14.228 13.9332 14.3327 13.668 14.3333C11.1953 14.3904 8.80466 13.3907 6.99999 11.6667C5.19533 9.94266 4.19564 7.55201 4.25266 5.07933C4.25733 4.81413 4.36201 4.55987 4.5496 4.37228C4.73719 4.18469 4.99145 4.08001 5.25666 4.07533H7.25666C7.52187 4.08001 7.77613 4.18469 7.96372 4.37228C8.15131 4.55987 8.25599 4.81413 8.26066 5.07933C8.26066 5.34454 8.36534 5.5988 8.55293 5.78639C8.74052 5.97398 8.99478 6.07866 9.25999 6.08333H10.9267C11.1919 6.07866 11.4461 5.97398 11.6337 5.78639C11.8213 5.5988 11.926 5.34454 11.9307 5.07933C11.936 4.81413 12.0407 4.55987 12.2283 4.37228C12.4159 4.18469 12.6701 4.08001 12.9353 4.07533H14.9353C15.2005 4.08001 15.4548 4.18469 15.6424 4.37228C15.83 4.55987 15.9347 4.81413 15.9393 5.07933C15.9447 5.34454 16.0494 5.5988 16.237 5.78639C16.4246 5.97398 16.6788 6.07866 16.944 6.08333V8.08333C16.9393 8.34854 16.8346 8.6028 16.647 8.79039C16.4594 8.97798 16.2052 9.08266 15.94 9.08733" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span>{tech.phone}</span>
                      </div>
                      <div className="contact-item">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M2.66667 3.33333H13.3333C14.0697 3.33333 14.6667 3.93029 14.6667 4.66667V11.3333C14.6667 12.0697 14.0697 12.6667 13.3333 12.6667H2.66667C1.93029 12.6667 1.33333 12.0697 1.33333 11.3333V4.66667C1.33333 3.93029 1.93029 3.33333 2.66667 3.33333Z" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M14.6667 4.66667L8 8.66667L1.33333 4.66667" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span>{tech.email}</span>
                      </div>
                    </div>
                    <div className="technician-skills">
                      {tech.skills.map((skill, index) => (
                        <span key={index} className="skill-tag">{skill}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="technician-right">
                  <div className="technician-rating">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M10 1.66667L12.575 7.15833L18.3333 7.725L14.1667 11.7417L15.15 17.5L10 14.8083L4.85 17.5L5.83333 11.7417L1.66667 7.725L7.425 7.15833L10 1.66667Z" fill="#F59E0B"/>
                    </svg>
                    <span className="rating-value">{tech.rating}</span>
                  </div>
                  <p className="jobs-count">{tech.jobs}</p>
                 
                </div>
                 <button className="more-options-btn">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M10 10.8333C10.4602 10.8333 10.8333 10.4602 10.8333 10C10.8333 9.53976 10.4602 9.16667 10 9.16667C9.53976 9.16667 9.16667 9.53976 9.16667 10C9.16667 10.4602 9.53976 10.8333 10 10.8333Z" fill="#9CA3AF" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M10 5.00001C10.4602 5.00001 10.8333 4.62692 10.8333 4.16667C10.8333 3.70643 10.4602 3.33334 10 3.33334C9.53976 3.33334 9.16667 3.70643 9.16667 4.16667C9.16667 4.62692 9.53976 5.00001 10 5.00001Z" fill="#9CA3AF" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M10 16.6667C10.4602 16.6667 10.8333 16.2936 10.8333 15.8333C10.8333 15.3731 10.4602 15 10 15C9.53976 15 9.16667 15.3731 9.16667 15.8333C9.16667 16.2936 9.53976 16.6667 10 16.6667Z" fill="#9CA3AF" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Sections */}
        <div className="tech-bottom-sections">
          {/* Manual Job Assignment */}
          <div className="manual-assignment-section">
            <h3 className="section-title">Manual Job Assignment</h3>
            <div className="form-group">
              <label>Select Job</label>
              <div className="select-wrapper">
                <select className="form-select">
                  <option>Johnson@gmail.com</option>
                </select>
                <svg className="select-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M4 6L8 10L12 6" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <div className="form-group">
              <label>Assign to technician</label>
              <div className="select-wrapper">
                <select className="form-select">
                  <option>Choose a technician</option>
                </select>
                <svg className="select-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M4 6L8 10L12 6" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <button className="assign-job-button">Assign Job</button>
          </div>

          {/* Quick Actions */}
          <div className="quick-actions-section">
            <h3 className="section-title">Quick Actions</h3>
            <button className="quick-action-btn">
              <img src={addNewTechnicianIcon} alt="Add New Technician" width="20" height="20" />
              <span>Add New Technician</span>
            </button>
            <button className="quick-action-btn">
              <img src={manageRolesIcon} alt="Manage Roles" width="20" height="20" />
              <span>Manage Roles</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechManagement;

