import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = ({ activeTab }) => {
  const navigate = useNavigate();
  const navTabsRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  const checkScrollButtons = () => {
    const navTabs = navTabsRef.current;
    if (navTabs) {
      const { scrollLeft, scrollWidth, clientWidth } = navTabs;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    const navTabs = navTabsRef.current;
    if (navTabs) {
      checkScrollButtons();
      navTabs.addEventListener('scroll', checkScrollButtons);
      window.addEventListener('resize', checkScrollButtons);
      
      return () => {
        navTabs.removeEventListener('scroll', checkScrollButtons);
        window.removeEventListener('resize', checkScrollButtons);
      };
    }
  }, []);

  const scrollLeft = () => {
    if (navTabsRef.current) {
      navTabsRef.current.scrollBy({ left: -150, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (navTabsRef.current) {
      navTabsRef.current.scrollBy({ left: 150, behavior: 'smooth' });
    }
  };

  return (
    <div className="header-container">
      <div className="top-nav">
        <button 
          className="scroll-arrow scroll-arrow-left"
          onClick={scrollLeft}
          style={{ display: showLeftArrow ? 'flex' : 'none' }}
          aria-label="Scroll left"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <div className="nav-tabs" ref={navTabsRef}>
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
        <button 
          className="scroll-arrow scroll-arrow-right"
          onClick={scrollRight}
          style={{ display: showRightArrow ? 'flex' : 'none' }}
          aria-label="Scroll right"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Header;
