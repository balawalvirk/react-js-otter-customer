import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminHeader from '../adminHeader';
import chatIcon from '../../../assets/icons/home icons/chat.png';
import editIcon from '../../../assets/icons/edit.png';
import eyeIcon from '../../../assets/icons/eye.png';
import downloadIcon from '../../../assets/icons/download.png';
import filterIcon from '../../../assets/icons/filter.png';
import locationIcon from '../../../assets/icons/location.png';
import './companies.css';

const Companies = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('companies');

  const navigationItems = [
    {
      key: 'home',
      label: 'Home',
      onPress: () => navigate('/admin-home')
    },
    {
      key: 'companies',
      label: 'Companies',
      onPress: () => setActiveTab('companies')
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

  const companies = [
    {
      name: 'QuickFix Plumbing',
      email: 'contact@fixplumbing.co...',
      rating: '$450',
      jobs: '156',
      revenue: '$4,587',
      status: 'Open',
      statusColor: '#8CCA19'
    },
    {
      name: 'Elite Carpentry',
      email: 'info@elitecarpentry.com',
      rating: '$450',
      jobs: '89',
      revenue: '$27.09',
      status: 'Pending',
      statusColor: '#F9CF47'
    },
    {
      name: 'Budget Repairs Co',
      email: 'hello@budgetrepairs.com',
      rating: '$450',
      jobs: '45',
      revenue: '$6,798',
      status: 'Suspended',
      statusColor: '#EF4444'
    },
    {
      name: 'Swift Electrical',
      email: 'Service@swiftelectrical.co...',
      rating: '$450',
      jobs: '203',
      revenue: '$45,907',
      status: 'Open',
      statusColor: '#8CCA19'
    },
    {
      name: 'Fast Service LLC',
      email: 'contact@fastservice.com',
      rating: '$450',
      jobs: '25',
      revenue: '$45,00',
      status: 'Open',
      statusColor: '#8CCA19'
    }
  ];

  return (
    <div className="admin-companies-container">
      <AdminHeader activeTab={activeTab} navigationItems={navigationItems} />

      <div className="admin-main-content">
        <div className="page-header">
          <h1 className="page-title">Companies</h1>
          <p className="page-subtitle">Manage and oversee all the registered companies</p>
        </div>

        <div className="companies-content-card">
          <div className="search-filter-bar">
            <div className="search-container">
              <input 
                type="text" 
                placeholder="Search companies by name or email..." 
                className="search-input"
              />
              <img src={chatIcon} alt="Send" height={25} width={25} style={{marginRight:7}} />
            </div>
            <button className="filter-btn">
              <img src={filterIcon} alt="Filter" width="16" height="16" />
              All Statuses
            </button>
          </div>

          <div className="filter-options">
            <button className="filter-option-btn">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 1.33333C5.79086 1.33333 4 3.12419 4 5.33333C4 9.33333 8 14.6667 8 14.6667C8 14.6667 12 9.33333 12 5.33333C12 3.12419 10.2091 1.33333 8 1.33333ZM8 7.33333C7.26362 7.33333 6.66667 6.73638 6.66667 6C6.66667 5.26362 7.26362 4.66667 8 4.66667C8.73638 4.66667 9.33333 5.26362 9.33333 6C9.33333 6.73638 8.73638 7.33333 8 7.33333Z" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Filter by location
            </button>
            <div className="filter-select-wrapper">
              <img src={filterIcon} alt="Filter" width="16" height="16" className="select-filter-icon" />
              <select className="filter-select">
                <option>Services Type</option>
              </select>
            </div>
            <div className="filter-select-wrapper">
              <select className="filter-select">
                <option>All Status</option>
              </select>
            </div>
            <div className="filter-select-wrapper">
              <select className="filter-select">
                <option>No Sorting</option>
              </select>
            </div>
           
          </div>

          <div className="companies-table-container">
            <table className="companies-table">
              <thead>
                <tr>
                  <th>Company</th>
                  <th>Email</th>
                  <th>Rating</th>
                  <th>Jobs</th>
                  <th>Revenue</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {companies.map((company, index) => (
                  <tr key={index}>
                    <td>{company.name}</td>
                    <td>{company.email}</td>
                    <td>{company.rating}</td>
                    <td>{company.jobs}</td>
                    <td>{company.revenue}</td>
                    <td>
                      <span 
                        className="status-badge" 
                        style={{ 
                          backgroundColor: company.statusColor,
                          color: company.status === 'Pending' ? '#111827' : 'white'
                        }}
                      >
                        {company.status}
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

export default Companies;

