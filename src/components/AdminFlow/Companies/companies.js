import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminHeader from '../adminHeader';
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
      statusColor: '#10B981'
    },
    {
      name: 'Elite Carpentry',
      email: 'info@elitecarpentry.com',
      rating: '$450',
      jobs: '89',
      revenue: '$27.09',
      status: 'Pending',
      statusColor: '#F59E0B'
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
      statusColor: '#10B981'
    },
    {
      name: 'Fast Service LLC',
      email: 'contact@fastservice.com',
      rating: '$450',
      jobs: '25',
      revenue: '$45.00',
      status: 'Open',
      statusColor: '#10B981'
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
              <button className="search-btn">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17.5 17.5L13.875 13.875" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            <button className="filter-btn">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M2 4H14M4 8H12M6 12H10" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              All Statuses
            </button>
          </div>

          <div className="filter-options">
            <button className="filter-option-btn">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 1.33333V14.6667M1.33333 8H14.6667" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              Filter by location
            </button>
            <select className="filter-select">
              <option>Services Type</option>
            </select>
            <select className="filter-select">
              <option>All Status</option>
            </select>
            <select className="filter-select">
              <option>No Sorting</option>
            </select>
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
                      <span className="status-badge" style={{ backgroundColor: company.statusColor }}>
                        {company.status}
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
                            <path d="M8 1.33333V14.6667M1.33333 8H14.6667" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round"/>
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

export default Companies;

