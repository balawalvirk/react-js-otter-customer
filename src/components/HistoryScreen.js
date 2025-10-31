import React, { useState } from 'react';
import Header from './Header';
import allFilterIcon from '../assets/icons/history/all.png';
import completedFilterIcon from '../assets/icons/history/complete-and-cancel.png';
import receiptIcon from '../assets/icons/history/Receipt.png';
import bookAgainIcon from '../assets/icons/history/book-again.png';
import './HistoryScreen.css';

const HistoryScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [serviceSearch, setServiceSearch] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  const jobs = [
    {
      id: 1,
      title: 'Kitchen Faucet Repair',
      company: "Mike's Expert Plumbing",
      provider: 'Mike Johnson',
      date: 'Dec 15, 2024',
      cost: '$95.00',
      status: 'completed',
      rating: 5,
      actions: ['receipt', 'photos', 'book-again', 'download']
    },
    {
      id: 2,
      title: 'AC Maintenance Check',
      company: 'Cool Air HVAC',
      provider: 'Sarah Williams',
      date: 'Nov 28, 2024',
      cost: '$150.00',
      status: 'completed',
      rating: 4,
      actions: ['receipt', 'photos']
    },
    {
      id: 3,
      title: 'Electrical Outlet Installation',
      company: 'Spark Electric Co.',
      provider: 'David Chen',
      date: 'Nov 12, 2024',
      cost: '$85.00',
      status: 'completed',
      rating: 5,
      actions: ['receipt', 'download']
    },
    {
      id: 4,
      title: 'Bathroom Tile Repair',
      company: 'Fix-it Handy',
      provider: 'Carlous Rodriguez',
      date: 'Oct 20, 2024',
      status: 'completed',
      rating: 5,
      actions: ['book-again', 'download']
    },
    {
      id: 5,
      title: 'Garbage Disposal Replacement',
      company: "Mike's Expert Plumbing",
      provider: 'Mike Johnson',
      date: 'Oct 6, 2024',
      cost: '$85.00',
      status: 'completed',
      rating: 5,
      actions: ['receipt', 'photos', 'book-again', 'download']
    }
  ];

  const handleAction = (action, jobId) => {
    console.log(`${action} clicked for job ${jobId}`);
  };

  return (
    <div className="history-container">
      {/* Header Component */}
      <Header activeTab="history" />

      {/* Main Content */}
      <div className="history-main-content">
        {/* Title */}
        <h1 className="history-title">Job History</h1>

        {/* Top Search Bar */}
        <div className="search-container">
          <svg className="search-icon" width="15" height="15" viewBox="0 0 25 25" fill="none">
            <path d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16ZM20 20l-4.35-4.35" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for Job"
            className="search-input"
          />
        </div>

        {/* Summary Cards */}
        <div className="summary-cards">
          <div className="summary-card">
            <div className="summary-number">4</div>
            <div className="summary-label">Jobs Completed</div>
          </div>
          <div className="summary-card">
            <div className="summary-number">$575.00</div>
            <div className="summary-label">Total Spent</div>
          </div>
        </div>

        {/* Service Search */}
         <div className="search-container">
          <svg className="search-icon" width="15" height="15" viewBox="0 0 25 25" fill="none">
            <path d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16ZM20 20l-4.35-4.35" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for Job"
            className="search-input"
          />
        </div>

        {/* Filter Buttons */}
        <div className="filter-buttons">
          <button
            className={`filter-button ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All
            {activeFilter === 'all' ? (

           
              <img src={allFilterIcon} alt="All" width={16} height={16} />
              ) : (
              <img src={completedFilterIcon} alt="Completed" width={16} height={16} />
                         )}
          </button>
          <button
            className={`filter-button ${activeFilter === 'completed' ? 'active' : ''}`}
            onClick={() => setActiveFilter('completed')}
          >
            Completed
            {activeFilter === 'completed' ? (
          <img src={allFilterIcon} alt="All" width={16} height={16} />
              ) : (
              <img src={completedFilterIcon} alt="Completed" width={16} height={16} />
                         )}          
          </button>
          <button
            className={`filter-button ${activeFilter === 'cancelled' ? 'active' : ''}`}
            onClick={() => setActiveFilter('cancelled')}
          >
            Cancelled
            {activeFilter === 'cancelled' ? (
  <img src={allFilterIcon} alt="All" width={16} height={16} />
              ) : (
              <img src={completedFilterIcon} alt="Completed" width={16} height={16} />
                         )}
          </button>
        </div>

        {/* Job Entries List */}
        <div className="jobs-list">
          {jobs.map((job) => (
            <div key={job.id} className="job-entry">
              <div className="job-content">
                <h3 className="job-title">{job.title}</h3>
                <p className="job-details">
                  {job.company} • {job.provider}
                </p>
                <p className="job-details">
                  {job.date}
                  {job.cost && ` • ${job.cost}`}
                </p>
                <div className="job-actions">
                  {job.actions.includes('receipt') && (
                    <button
                      className="job-action-btn"
                      onClick={() => handleAction('receipt', job.id)}
                    >
                      <img src={receiptIcon} alt="Receipt" width={18} height={18} />
                      <span>Receipt</span>
                    </button>
                  )}
                  {job.actions.includes('photos') && (
                    <button
                      className="job-action-btn"
                      onClick={() => handleAction('photos', job.id)}
                    >
                      <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
                        <path d="M2 5.33333C2 4.59695 2.59695 4 3.33333 4H5.33333L6.66667 2H9.33333L10.6667 4H12.6667C13.403 4 14 4.59695 14 5.33333V12.6667C14 13.403 13.403 14 12.6667 14H3.33333C2.59695 14 2 13.403 2 12.6667V5.33333Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <circle cx="8" cy="9" r="2" stroke="currentColor" strokeWidth="1.5"/>
                      </svg>
                      <span>Photos</span>
                    </button>
                  )}
                  {job.actions.includes('book-again') && (
                    <button
                      className="job-action-btn"
                      onClick={() => handleAction('book-again', job.id)}
                    >
                      <img src={bookAgainIcon} alt="Book Again" width={18} height={18} />
                      <span>Book Again</span>
                    </button>
                  )}
                  {job.actions.includes('download') && (
                    <button
                      className="job-action-btn"
                      onClick={() => handleAction('download', job.id)}
                    >
                      <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
                        <path d="M8 11V2M8 11L5 8M8 11L11 8M2 14H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>Download</span>
                    </button>
                  )}
                </div>
              </div>

              <div className="job-status-rating">
                <span className={`status-badge ${job.status}`}>{job.status}</span>
                <div className="rating-display">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 1L10.09 5.26L15 6L11.5 9.74L12.18 15L8 12.77L3.82 15L4.5 9.74L1 6L5.91 5.26L8 1Z" fill="#FCD34D"/>
                  </svg>
                  <span className="rating-number">{job.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions Section */}
        <div className="quick-actions-section">
          <h2 className="quick-actions-title">Quick Actions</h2>
          <div className="quick-actions-cards">
            <button className="quick-action-card" onClick={() => handleAction('download-all', null)}>
             <img src={receiptIcon} alt="Receipt" width={18} height={18} />
              {/* <span>Quick Actions</span> */}
              <span>Download All Receipts</span>
            </button>
            <button className="quick-action-card" onClick={() => handleAction('favorite-providers', null)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L15.09 8.26L22 9L16 13L17.18 20L12 16.77L6.82 20L8 13L2 9L8.91 8.26L12 2Z" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Favorite Providers</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryScreen;

