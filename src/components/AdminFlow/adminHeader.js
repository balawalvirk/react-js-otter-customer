import React, { useRef, useState, useEffect } from 'react';
import './adminHeader.css';

const AdminHeader = ({ activeTab, navigationItems = [] }) => {
  const navTabsRef = useRef(null);
  const topNavRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const checkScrollButtons = () => {
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

  const handleNavClick = (item, e) => {
    e.preventDefault();
    e.stopPropagation();

    if (item.key === activeTab) {
      return;
    }

    if (item.onPress) {
      item.onPress();
    }

    const navTabs = navTabsRef.current;
    const topNav = topNavRef.current;
    const scrollableElement = topNav || navTabs;

    if (!scrollableElement) return;

    if (isMobile) {
      const currentScroll = scrollableElement.scrollLeft;
      sessionStorage.setItem('adminHeaderScrollPosition', currentScroll.toString());
      return;
    }

    const savedScrollLeft = scrollableElement.scrollLeft;
    sessionStorage.setItem('adminHeaderScrollPosition', savedScrollLeft.toString());
    
    scrollableElement.style.overflowX = 'hidden';
    
    setTimeout(() => {
      if (scrollableElement) {
        scrollableElement.style.overflowX = 'auto';
        scrollableElement.scrollLeft = savedScrollLeft;
      }
    }, 10);
  };

  useEffect(() => {
    const navTabs = navTabsRef.current;
    const topNav = topNavRef.current;
    const scrollableElement = topNav || navTabs;
    
    if (scrollableElement) {
      if (isMobile) {
        const savedScroll = sessionStorage.getItem('adminHeaderScrollPosition');
        if (savedScroll !== null) {
          scrollableElement.scrollLeft = parseFloat(savedScroll);
        }
      } else {
        const savedScroll = sessionStorage.getItem('adminHeaderScrollPosition');
        if (savedScroll !== null) {
          const restoreScroll = () => {
            scrollableElement.scrollLeft = parseFloat(savedScroll);
            sessionStorage.removeItem('adminHeaderScrollPosition');
          };
          
          requestAnimationFrame(restoreScroll);
          setTimeout(restoreScroll, 10);
          setTimeout(restoreScroll, 50);
        }
      }
    }
  }, [activeTab, isMobile]);

  const scrollLeft = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    const navTabs = navTabsRef.current;
    const topNav = topNavRef.current;
    const scrollableElement = topNav || navTabs;
    
    if (!scrollableElement || !navTabs) return;
    
    const tabs = Array.from(navTabs.children);
    if (tabs.length === 0) return;
    
    const firstTab = tabs[0];
    const tabWidth = firstTab.offsetWidth || 120;
    const gap = 8;
    const scrollAmount = tabWidth + gap;
    
    scrollableElement.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
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
    
    const firstTab = tabs[0];
    const tabWidth = firstTab.offsetWidth || 120;
    const gap = 8;
    const scrollAmount = tabWidth + gap;
    
    scrollableElement.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    setTimeout(() => checkScrollButtons(), 300);
  };

  return (
    <div className="admin-header-container">
      <button 
        className="admin-scroll-arrow admin-scroll-arrow-left"
        onClick={scrollLeft}
        style={{ display: showLeftArrow ? 'flex' : 'none' }}
        aria-label="Scroll left"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <div className="admin-top-nav" ref={topNavRef}>
        <div
          className="admin-nav-tabs"
          style={{ paddingLeft: isMobile ? 220 : 0 }}
          ref={navTabsRef}
        >
          {navigationItems.map((item, index) => (
            <button 
              key={index}
              className={`admin-nav-tab ${activeTab === item.key ? 'active' : ''}`} 
              onClick={(e) => handleNavClick(item, e)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
      <button 
        className="admin-scroll-arrow admin-scroll-arrow-right"
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

export default AdminHeader;

