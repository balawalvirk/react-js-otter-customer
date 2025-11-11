import React, { useEffect, useRef, useState } from 'react';
import './serviceHeader.css';

const ServiceHeader = ({ activeTab, navigationItems = [] }) => {
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

  useEffect(() => {
    const navTabs = navTabsRef.current;
    const topNav = topNavRef.current;
    const scrollableElement = topNav || navTabs;

    if (scrollableElement) {
      if (isMobile) {
        scrollableElement.scrollLeft = sessionStorage.getItem('serviceHeaderScrollPosition')
          ? parseFloat(sessionStorage.getItem('serviceHeaderScrollPosition'))
          : scrollableElement.scrollLeft;
      } else {
        const savedScroll = sessionStorage.getItem('serviceHeaderScrollPosition');
        if (savedScroll !== null) {
          const restoreScroll = () => {
            scrollableElement.scrollLeft = parseFloat(savedScroll);
            sessionStorage.removeItem('serviceHeaderScrollPosition');
          };

          requestAnimationFrame(restoreScroll);
          setTimeout(restoreScroll, 10);
          setTimeout(restoreScroll, 50);
        }
      }
    }
  }, [activeTab, isMobile]);

  const handleNavClick = (item, event) => {
    event.preventDefault();
    event.stopPropagation();

    if (item.key === activeTab) {
      return;
    }

    if (typeof item.onPress === 'function') {
      item.onPress();
    }

    if (isMobile) {
      const navTabs = navTabsRef.current;
      const topNav = topNavRef.current;
      const scrollableElement = topNav || navTabs;
      if (scrollableElement) {
        const currentScroll = scrollableElement.scrollLeft;
        sessionStorage.setItem('serviceHeaderScrollPosition', currentScroll.toString());
      }
      return;
    }

    const navTabs = navTabsRef.current;
    const topNav = topNavRef.current;
    const scrollableElement = topNav || navTabs;

    if (scrollableElement) {
      const savedScrollLeft = scrollableElement.scrollLeft;
      sessionStorage.setItem('serviceHeaderScrollPosition', savedScrollLeft.toString());
      scrollableElement.style.overflowX = 'hidden';

      setTimeout(() => {
        if (scrollableElement) {
          scrollableElement.style.overflowX = 'auto';
          scrollableElement.scrollLeft = savedScrollLeft;
        }
      }, 10);
    }
  };

  const scrollByAmount = (direction) => {
    const navTabs = navTabsRef.current;
    const topNav = topNavRef.current;
    const scrollableElement = topNav || navTabs;

    if (!scrollableElement || !navTabs) return;

    const tabs = Array.from(navTabs.children);
    if (tabs.length === 0) return;

    const firstTab = tabs[0];
    const tabWidth = firstTab.offsetWidth || 140;
    const gap = 8;
    const scrollAmount = tabWidth + gap;

    scrollableElement.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });

    setTimeout(() => checkScrollButtons(), 300);
  };

  return (
    <div className="service-header-container">
      <button
        className="service-scroll-arrow service-scroll-arrow-left"
        onClick={() => scrollByAmount('left')}
        style={{ display: showLeftArrow ? 'flex' : 'none' }}
        aria-label="Scroll left"
        type="button"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <div className="service-top-nav" ref={topNavRef}>
        <div
          className="service-nav-tabs"
          style={{ paddingLeft: isMobile ? 400 : 0 }}
          ref={navTabsRef}
        >
          {navigationItems.map((item) => (
            <button
              key={item.key}
              type="button"
              className={`service-nav-tab${activeTab === item.key ? ' active' : ''}`}
              onClick={(event) => handleNavClick(item, event)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <button
        className="service-scroll-arrow service-scroll-arrow-right"
        onClick={() => scrollByAmount('right')}
        style={{ display: showRightArrow ? 'flex' : 'none' }}
        aria-label="Scroll right"
        type="button"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
};

export default ServiceHeader;
