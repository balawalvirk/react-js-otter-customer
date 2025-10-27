import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = ({ activeTab }) => {
  const navigate = useNavigate();
  return (
    <div className="header-container">
      <div className="top-nav">
        <div className="nav-tabs">
          <button 
            className={`nav-tab ${activeTab === 'home' ? 'active' : ''}`} 
            onClick={() => navigate('/home')}
          >
            Home
          </button>
          <button 
            className={`nav-tab ${activeTab === 'chat' ? 'active' : ''}`} 
            onClick={() => navigate('/chat')}
          >
            Chat
          </button>
          <button 
            className={`nav-tab ${activeTab === 'tracking' ? 'active' : ''}`} 
            onClick={() => navigate('/tracking')}
          >
            Tracking
          </button>
          <button 
            className={`nav-tab ${activeTab === 'job-reviews' ? 'active' : ''}`} 
            onClick={() => navigate('/job-reviews')}
          >
            Job Reviews
          </button>
          <button 
            className={`nav-tab ${activeTab === 'history' ? 'active' : ''}`} 
          >
            History
          </button>
          <button 
            className={`nav-tab ${activeTab === 'profile' ? 'active' : ''}`} 
          >
            Profile
          </button>
          <button 
            className={`nav-tab ${activeTab === 'logout' ? 'active' : ''}`} 
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
