import React from 'react';
import './TrackingScreen.css';

const TrackingScreen = ({ onNavigate }) => {
  const handleCallTech = () => {
    console.log('Calling technician');
  };

  const handleMessage = () => {
    console.log('Messaging technician');
  };

  const handleGetDirections = () => {
    console.log('Getting directions to job site');
  };

  return (
    <div className="tracking-container">
      {/* Top Navigation */}
      <div className="top-nav">
        <div className="nav-tabs">
          <button className="nav-tab" onClick={() => onNavigate('home')}>Home</button>
          <button className="nav-tab" onClick={() => onNavigate('chat')}>Chat</button>
          <button className="nav-tab active" onClick={() => onNavigate('tracking')}>Tracking</button>
          <button className="nav-tab" onClick={() => onNavigate('job-reviews')}>Job Reviews</button>
          <button className="nav-tab" onClick={() => onNavigate('history')}>History</button>
          <button className="nav-tab" onClick={() => onNavigate('profile')}>Profile</button>
          <button className="nav-tab" onClick={() => onNavigate('logout')}>Logout</button>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Live Tracking Section */}
        <div className="tracking-section">
          <div className="section-header">
            <div className="live-indicator">
              <div className="live-dot"></div>
              <h2 className="section-title">Live Tracking</h2>
            </div>
          </div>
          
          <div className="map-container">
            <div className="map-placeholder">
              <div className="map-pin">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M16 2C10.477 2 6 6.477 6 12C6 20 16 30 16 30S26 20 26 12C26 6.477 21.523 2 16 2Z" fill="black"/>
                  <circle cx="16" cy="12" r="4" fill="white"/>
                </svg>
              </div>
              <p className="map-label">Interactive Map</p>
              <p className="map-subtitle">Real-time GPS tracking</p>
            </div>
          </div>

          <div className="tech-info">
            <div className="tech-details">
              <p className="tech-name">Mike Johnson</p>
              <p className="tech-eta">ETA : 3:20 PM</p>
            </div>
            <div className="distance-info">
              <p className="distance">12 min away</p>
              <p className="vehicle">White Ford Transit Van</p>
            </div>
          </div>
        </div>

        {/* Job Progress Section */}
        <div className="progress-section">
          <h2 className="section-title">Job Progress</h2>
          <div className="progress-steps">
            <div className="progress-step completed">
              <div className="step-icon">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M1 6L5 10L15 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="step-content">
                <p className="step-title">Job Accepted</p>
                <p className="step-time">2:15 PM</p>
              </div>
            </div>
            
            <div className="progress-step completed">
              <div className="step-icon">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M1 6L5 10L15 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="step-content">
                <p className="step-title">Technician En Route</p>
                <p className="step-time">2:42 PM</p>
              </div>
            </div>
            
            <div className="progress-step completed">
              <div className="step-icon">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M1 6L5 10L15 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="step-content">
                <p className="step-title">Arrived On Site</p>
                <p className="step-time">3:18 PM</p>
              </div>
            </div>
            
            <div className="progress-step current">
              <div className="step-icon">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M1 6L5 10L15 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="step-content">
                <p className="step-title current-text">Job Completed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Your Technician Section */}
        <div className="technician-section">
          <h2 className="section-title">Your Technician</h2>
          <div className="technician-profile">
            <div className="tech-avatar">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <circle cx="20" cy="20" r="20" fill="#3B82F6"/>
                <circle cx="20" cy="16" r="6" fill="white"/>
                <path d="M8 32C8 26.4772 12.4772 22 18 22H22C27.5228 22 32 26.4772 32 32" fill="white"/>
              </svg>
            </div>
            <div className="tech-details">
              <p className="tech-name">Mike Johnson</p>
              <div className="tech-rating">
                <span className="rating">4.9</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 1L10.09 5.26L15 6L11.5 9.74L12.18 15L8 12.77L3.82 15L4.5 9.74L1 6L5.91 5.26L8 1Z" fill="#FCD34D"/>
                </svg>
                <span className="license">License #PLB-2847</span>
              </div>
            </div>
          </div>
          <div className="tech-actions">
            <button className="action-button" onClick={handleCallTech}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122L9.96 12.01a.678.678 0 0 1-.55-.122L6.122 8.59a.678.678 0 0 1-.122-.55l.122-2.307a.678.678 0 0 0-.122-.58L3.654 1.328Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Call Tech
            </button>
            <button className="action-button" onClick={handleMessage}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M2.5 3.5C2.5 2.67157 3.17157 2 4 2H12C12.8284 2 13.5 2.67157 13.5 3.5V10.5C13.5 11.3284 12.8284 12 12 12H8L4.5 15V12H4C3.17157 12 2.5 11.3284 2.5 10.5V3.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Message
            </button>
          </div>
        </div>

        {/* Job Details Section */}
        <div className="job-details-section">
          <h2 className="section-title">Job Details</h2>
          <div className="job-details">
            <div className="detail-row">
              <span className="detail-label">Service:</span>
              <span className="detail-value">Kitchen Faucet Repair</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Provider:</span>
              <span className="detail-value">Mike's Expert Plumbing</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Duration:</span>
              <span className="detail-value">45-60 minutes</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Estimated Cost:</span>
              <span className="detail-value">$85 - 120</span>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <button className="directions-button" onClick={handleGetDirections}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M2.5 10L17.5 10M17.5 10L12.5 5M17.5 10L12.5 15" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Get Direction to Job Site
        </button>
      </div>
    </div>
  );
};

export default TrackingScreen;
