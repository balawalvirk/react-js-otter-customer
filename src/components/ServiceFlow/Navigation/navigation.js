import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ServiceHeader from '../Header/serviceHeader';
import techTwoIcon from '../../../assets/icons/tech two.png';
import '../JobAssigned/jobAssigned.css';
import './navigation.css';

const NavigationScreen = () => {
  const navigate = useNavigate();
  const [showContactModal, setShowContactModal] = useState(false);
  const [showCallPopup, setShowCallPopup] = useState(false);
  const [showCallScreen, setShowCallScreen] = useState(false);
  const [showChatScreen, setShowChatScreen] = useState(false);

  const activeTab = 'navigation';

  const navigationItems = [
    { key: 'job-assigned', label: 'Job Assigned', onPress: () => navigate('/service-job-assigned') },
    { key: 'navigation', label: 'Navigation', onPress: () => navigate('/service-navigation') },
    { key: 'arrived', label: 'Arrived', onPress: () => navigate('/service-arrived') },
    { key: 'diagnostics', label: 'Diagnostics', onPress: () => navigate('/service-diagnostics') },
    { key: 'estimates', label: 'Estimates', onPress: () => navigate('/service-estimates') },
    { key: 'approval', label: 'Approval', onPress: () => navigate('/service-approval') },
    { key: 'complete', label: 'Complete', onPress: () => navigate('/service-complete') },
    { key: 'logout', label: 'Logout', onPress: () => navigate('/service-logout') }
  ];

  return (
    <div className="service-flow-container navigation-screen">
      <ServiceHeader activeTab={activeTab} navigationItems={navigationItems} />

      <div className="service-flow-alert navigation-alert">
        <p>Navigate to the job site. Tap “I’ve Arrived” when you reach the location.</p>
      </div>

      <section className="job-assigned-panel">
        <header className="job-panel-header">
          <h2>Job Details</h2>
          <span className="priority-badge">High Priority</span>
        </header>

        <div className="job-details-list">
          <div className="job-info-card">
            <div className="job-icon customer">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
                  stroke="#F8B200"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4 20.0004C4.0018 17.3472 6.13655 15.209 8.78978 15.2109H15.2102C17.8634 15.209 19.9982 17.3472 20 20.0004"
                  stroke="#F8B200"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="job-info-content">
              <h3>Sarah Johnson</h3>
              <p>Customer</p>
            </div>
          </div>

          <div className="job-info-card" onClick={() => setShowContactModal(true)} style={{ cursor: 'pointer' }}>
            <div className="job-icon phone">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                <path
                  d="M6.5 4H9.5L11 8L8.75 9.25C9.7 11.2 11.3 12.8 13.25 13.75L14.5 11.5L18.5 13L19 16.5C19 16.5 17.5 18.5 15 18.5C11.9624 18.3252 9.07467 16.9527 6.987 14.865C4.89933 12.7773 3.52685 9.88957 3.352 6.852C3.352 4.5 5.5 3 5.5 3L6.5 4Z"
                  stroke="#F97316"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="job-info-content">
              <h3>(555) 123-4567</h3>
              <p>Call Customer</p>
            </div>
          </div>

          <div className="job-info-card">
            <div className="job-icon location">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 21C12 21 5 14.992 5 9.5C5 6.46243 7.46243 4 10.5 4H13.5C16.5376 4 19 6.46243 19 9.5C19 14.992 12 21 12 21Z"
                  stroke="#0D9488"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="12" cy="9.5" r="2.5" stroke="#0D9488" strokeWidth="1.5" />
              </svg>
            </div>
            <div className="job-info-content">
              <h3>1234 Oak Street, Springfield, IL 62701</h3>
              <p>Service Location</p>
            </div>
          </div>

          <div className="job-info-card">
            <div className="job-icon schedule">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="8" stroke="#34A853" strokeWidth="1.5" />
                <path
                  d="M12 8V12L14.5 13.5"
                  stroke="#34A853"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="job-info-content">
              <h3>2:00 PM - 4:00 PM</h3>
              <p>Scheduled Time</p>
            </div>
          </div>
        </div>

        <div className="job-service-details">
          <div className="service-type">
            <h4>Service Type</h4>
            <span>HVAC Repair</span>
          </div>

          <div className="problem-description">
            <h4>Problem Description</h4>
            <p>Air conditioning unit not working properly, Customer reports warm air coming from vents.</p>
          </div>
        </div>

        <div className="navigation-actions">
          <button type="button" className="maps-navigation-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2C8.68629 2 6 4.68629 6 8C6 12.667 12 22 12 22C12 22 18 12.667 18 8C18 4.68629 15.3137 2 12 2Z"
                stroke="#0D90B2"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="12" cy="8" r="2" stroke="#0D90B2" strokeWidth="1.5" />
            </svg>
            <span>Open Maps Navigation</span>
          </button>

          <button type="button" className="arrived-action-btn">
            <span className="arrived-icon-box">
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                <path
                  d="M15.8333 5.83337L8.33325 13.3334L4.16659 9.16671"
                  stroke="#0D90B2"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span>I’ve Arrived</span>
          </button>
        </div>
      </section>

      {/* Contact Modal */}
      {showContactModal && (
        <div className="modal-overlay" onClick={() => setShowContactModal(false)}>
          <div className="contact-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3 className="modal-title">Contact Sarah Johnson</h3>
              <button className="modal-close" onClick={() => setShowContactModal(false)}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M15 5L5 15M5 5L15 15" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            <div className="contact-options">
              <div 
                className="contact-option" 
                onClick={() => {
                  setShowContactModal(false);
                  setShowCallPopup(true);
                }}
              >
                <div className="contact-icon-wrapper call">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M6.5 4H9.5L11 8L8.75 9.25C9.7 11.2 11.3 12.8 13.25 13.75L14.5 11.5L18.5 13L19 16.5C19 16.5 17.5 18.5 15 18.5C11.9624 18.3252 9.07467 16.9527 6.987 14.865C4.89933 12.7773 3.52685 9.88957 3.352 6.852C3.352 4.5 5.5 3 5.5 3L6.5 4Z"
                      stroke="#0D90B2"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="contact-option-content">
                  <h4>Call Customer</h4>
                  <p>(555) 123-4567</p>
                </div>
              </div>
              <div 
                className="contact-option" 
                onClick={() => {
                  setShowContactModal(false);
                  setShowChatScreen(true);
                }}
              >
                <div className="contact-icon-wrapper text">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z"
                      stroke="#0D90B2"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="contact-option-content">
                  <h4>Text Customer</h4>
                  <p>(555) 123-4567</p>
                </div>
              </div>
            </div>
            <button 
              type="button" 
              className="start-diagnostics-btn-modal"
              onClick={() => {
                setShowContactModal(false);
                navigate('/service-arrived');
              }}
            >
              I've Arrived
            </button>
          </div>
        </div>
      )}

      {/* Call Popup */}
      {showCallPopup && (
        <div className="modal-overlay" onClick={() => setShowCallPopup(false)}>
          <div className="call-popup" onClick={(e) => e.stopPropagation()}>
            <div className="call-popup-profile">
              <div className="call-popup-avatar">
                <img src={techTwoIcon} alt="Sarah Johnson" />
              </div>
              <h3 className="call-popup-name">Sarah Johnson</h3>
              <p className="call-popup-number">(555) 123-4567</p>
              <p className="call-popup-status">Ready to call</p>
            </div>
            <button 
              type="button" 
              className="start-call-btn"
              onClick={() => {
                setShowCallPopup(false);
                setShowCallScreen(true);
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ marginRight: '0.5rem' }}>
                <path
                  d="M6.5 4H9.5L11 8L8.75 9.25C9.7 11.2 11.3 12.8 13.25 13.75L14.5 11.5L18.5 13L19 16.5C19 16.5 17.5 18.5 15 18.5C11.9624 18.3252 9.07467 16.9527 6.987 14.865C4.89933 12.7773 3.52685 9.88957 3.352 6.852C3.352 4.5 5.5 3 5.5 3L6.5 4Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Start Call
            </button>
            <button 
              type="button" 
              className="back-to-job-btn"
              onClick={() => setShowCallPopup(false)}
            >
              Back to Job
            </button>
          </div>
        </div>
      )}

      {/* Call Screen */}
      {showCallScreen && (
        <div className="call-screen-overlay">
          <div className="call-screen-background">
            <img src={techTwoIcon} alt="Background" className="call-screen-bg-image" />
            <div className="call-screen-blur"></div>
          </div>
          <div className="call-screen-content">
            <div className="call-screen-profile">
              <div className="call-screen-avatar">
                <img src={techTwoIcon} alt="Sarah Johnson" />
              </div>
              <h2 className="call-screen-name">Sarah Johnson</h2>
              <p className="call-screen-status">Calling...</p>
            </div>
            <div className="call-screen-controls">
              <button className="call-control-btn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M11 5L6 9H2V15H6L11 19V5Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M19.07 4.93C20.9447 6.81 22 9.29 22 12C22 14.71 20.9447 17.19 19.07 19.07M15.54 8.46C16.4774 9.4 17 10.65 17 12C17 13.35 16.4774 14.6 15.54 15.54" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button 
                className="call-control-btn end-call"
                onClick={() => setShowCallScreen(false)}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M6.5 4H9.5L11 8L8.75 9.25C9.7 11.2 11.3 12.8 13.25 13.75L14.5 11.5L18.5 13L19 16.5C19 16.5 17.5 18.5 15 18.5C11.9624 18.3252 9.07467 16.9527 6.987 14.865C4.89933 12.7773 3.52685 9.88957 3.352 6.852C3.352 4.5 5.5 3 5.5 3L6.5 4Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button className="call-control-btn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 1C12 1 8 1 8 5V11C8 15 12 15 12 15C12 15 16 15 16 11V5C16 1 12 1 12 1Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M19 10V11C19 14.866 15.866 18 12 18C8.13401 18 5 14.866 5 11V10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 18V23M8 21H16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Chat Screen */}
      {showChatScreen && (
        <div className="chat-screen-overlay">
          <div className="service-chat-container">
            <div className="service-chat-header">
              <div className="service-chat-profile">
                <div className="service-chat-avatar">
                  <img src={techTwoIcon} alt="Sarah Johnson" />
                </div>
                <div className="service-chat-info">
                  <h3>Sarah Johnson</h3>
                  <p>(555) 123-4567</p>
                </div>
              </div>
              <button 
                className="service-chat-close"
                onClick={() => setShowChatScreen(false)}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M15 5L5 15M5 5L15 15" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            <div className="service-chat-messages">
              <div className="service-message-wrapper user-message">
                <div className="service-message-bubble user-message">
                  <p>Hi, I'm on my way to your location.</p>
                  <span className="message-time">1:00 PM</span>
                </div>
                <div className="service-message-avatar">
                  <img src={techTwoIcon} alt="Sender" />
                </div>
              </div>
            </div>
            <div className="service-chat-input-area">
              <input 
                type="text" 
                placeholder="Type a message..." 
                className="service-chat-input"
              />
              <button className="service-chat-send">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavigationScreen;
