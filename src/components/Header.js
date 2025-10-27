import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const getActiveTab = () => {
    const path = location.pathname;
    if (path === '/home') return 'home';
    if (path === '/chat') return 'chat';
    if (path === '/tracking') return 'tracking';
    if (path === '/reviews') return 'job-reviews';
    return 'home';
  };

  const activeTab = getActiveTab();
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
            onClick={() => navigate('/reviews')}
          >
            Job Reviews
          </button>
          <button 
            className={`nav-tab ${activeTab === 'history' ? 'active' : ''}`} 
            onClick={() => navigate('/history')}
          >
            History
          </button>
          <button 
            className={`nav-tab ${activeTab === 'profile' ? 'active' : ''}`} 
            onClick={() => navigate('/profile')}
          >
            Profile
          </button>
          <button 
            className={`nav-tab ${activeTab === 'logout' ? 'active' : ''}`} 
            onClick={() => navigate('/logout')}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
