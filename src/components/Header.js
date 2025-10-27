import React from 'react';
import './Header.css';

const Header = ({ activeTab, onNavigate }) => {
  return (
    <div className="header-container">
      <div className="top-nav">
        <div className="nav-tabs">
          <button 
            className={`nav-tab ${activeTab === 'home' ? 'active' : ''}`} 
            onClick={() => onNavigate('home')}
          >
            Home
          </button>
          <button 
            className={`nav-tab ${activeTab === 'chat' ? 'active' : ''}`} 
            onClick={() => onNavigate('chat')}
          >
            Chat
          </button>
          <button 
            className={`nav-tab ${activeTab === 'tracking' ? 'active' : ''}`} 
            onClick={() => onNavigate('tracking')}
          >
            Tracking
          </button>
          <button 
            className={`nav-tab ${activeTab === 'job-reviews' ? 'active' : ''}`} 
            onClick={() => onNavigate('job-reviews')}
          >
            Job Reviews
          </button>
          <button 
            className={`nav-tab ${activeTab === 'history' ? 'active' : ''}`} 
            onClick={() => onNavigate('history')}
          >
            History
          </button>
          <button 
            className={`nav-tab ${activeTab === 'profile' ? 'active' : ''}`} 
            onClick={() => onNavigate('profile')}
          >
            Profile
          </button>
          <button 
            className={`nav-tab ${activeTab === 'logout' ? 'active' : ''}`} 
            onClick={() => onNavigate('logout')}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
