import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = ({ activeTab }) => {
  const navigate = useNavigate();
  const navTabsRef = useRef(null);
  const topNavRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  const checkScrollButtons = () => {
    // Check both nav-tabs and top-nav for scrolling
    const navTabs = navTabsRef.current;
    const topNav = topNavRef.current;
    const scrollableElement = topNav || navTabs;
    
    if (scrollableElement) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollableElement;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    const navTabs = navTabsRef.current;
    const topNav = topNavRef.current;
    const scrollableElement = topNav || navTabs;
    
    if (scrollableElement) {
      // Check immediately and after a short delay to ensure DOM is ready
      checkScrollButtons();
      setTimeout(checkScrollButtons, 100);
      
      scrollableElement.addEventListener('scroll', checkScrollButtons);
      window.addEventListener('resize', checkScrollButtons);
      
      return () => {
        scrollableElement.removeEventListener('scroll', checkScrollButtons);
        window.removeEventListener('resize', checkScrollButtons);
      };
    }
  }, []);

  const handleNavClick = (path, e) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Save current scroll position before navigation
    const navTabs = navTabsRef.current;
    const topNav = topNavRef.current;
    const scrollableElement = topNav || navTabs;
    
    if (scrollableElement) {
      const savedScrollLeft = scrollableElement.scrollLeft;
      sessionStorage.setItem('headerScrollPosition', savedScrollLeft.toString());
      
      // Prevent any automatic scrolling by temporarily disabling scroll
      scrollableElement.style.overflowX = 'hidden';
      
      // Navigate
      navigate(path);
      
      // Re-enable scroll after a brief moment
      setTimeout(() => {
        if (scrollableElement) {
          scrollableElement.style.overflowX = 'auto';
          scrollableElement.scrollLeft = savedScrollLeft;
        }
      }, 10);
    } else {
      navigate(path);
    }
  };

  // Restore scroll position after component mounts/updates
  useEffect(() => {
    const navTabs = navTabsRef.current;
    const topNav = topNavRef.current;
    const scrollableElement = topNav || navTabs;
    
    if (scrollableElement) {
      const savedScroll = sessionStorage.getItem('headerScrollPosition');
      if (savedScroll !== null) {
        // Use requestAnimationFrame to ensure DOM is ready
        const restoreScroll = () => {
          scrollableElement.scrollLeft = parseFloat(savedScroll);
          sessionStorage.removeItem('headerScrollPosition');
        };
        
        // Try multiple times to ensure it works
        requestAnimationFrame(restoreScroll);
        setTimeout(restoreScroll, 10);
        setTimeout(restoreScroll, 50);
      }
    }
  }, [activeTab]);

  const scrollLeft = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    const navTabs = navTabsRef.current;
    const topNav = topNavRef.current;
    const scrollableElement = topNav || navTabs;
    
    if (!scrollableElement || !navTabs) return;
    
    const tabs = Array.from(navTabs.children);
    if (tabs.length === 0) return;
    
    // Get the first tab's width as reference
    const firstTab = tabs[0];
    const tabWidth = firstTab.offsetWidth || 120; // fallback width
    const gap = 8; // 0.5rem = 8px
    const scrollAmount = tabWidth + gap;
    
    // Scroll left by one tab width
    scrollableElement.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    
    // Update button visibility after scroll
    setTimeout(() => checkScrollButtons(), 300);
  };

  const scrollRight = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    const navTabs = navTabsRef.current;
    const topNav = topNavRef.current;
    const scrollableElement = topNav || navTabs;
    
    if (!scrollableElement || !navTabs) return;
    
    const tabs = Array.from(navTabs.children);
    if (tabs.length === 0) return;
    
    // Get the first tab's width as reference
    const firstTab = tabs[0];
    const tabWidth = firstTab.offsetWidth || 120; // fallback width
    const gap = 8; // 0.5rem = 8px
    const scrollAmount = tabWidth + gap;
    
    // Scroll right by one tab width
    scrollableElement.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    
    // Update button visibility after scroll
    setTimeout(() => checkScrollButtons(), 300);
  };

  return (
    <div className="header-container">
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
      <div className="top-nav" ref={topNavRef}>
        <div className="nav-tabs" ref={navTabsRef}>
          <button 
            className={`nav-tab ${activeTab === 'home' ? 'active' : ''}`} 
            onClick={(e) => handleNavClick('/home', e)}
          >
            Home
          </button>
          <button 
            className={`nav-tab ${activeTab === 'chat' ? 'active' : ''}`} 
            onClick={(e) => handleNavClick('/chat', e)}
          >
            Chat
          </button>
          <button 
            className={`nav-tab ${activeTab === 'tracking' ? 'active' : ''}`} 
            onClick={(e) => handleNavClick('/tracking', e)}
          >
            Tracking
          </button>
          <button 
            className={`nav-tab ${activeTab === 'job-reviews' ? 'active' : ''}`} 
            onClick={(e) => handleNavClick('/job-reviews', e)}
          >
            Job Reviews
          </button>
          <button 
            className={`nav-tab ${activeTab === 'history' ? 'active' : ''}`} 
            onClick={(e) => handleNavClick('/history', e)}
          >
            History
          </button>
          <button 
            className={`nav-tab ${activeTab === 'profile' ? 'active' : ''}`} 
            onClick={(e) => handleNavClick('/profile', e)}
          >
            Profile
          </button>
          <button 
            className={`nav-tab ${activeTab === 'logout' ? 'active' : ''}`} 
            onClick={(e) => handleNavClick('/logout', e)}
          >
            Logout
          </button>
        </div>
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
  );
};

export default Header;
