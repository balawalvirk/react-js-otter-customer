import React, { useState } from 'react';
import Header from './Header';
import privacyIcon from '../assets/icons/privacy.png';
import locationPng from '../assets/icons/location.png';
import cardPng from '../assets/icons/card.png';
import './ProfileScreen.css';

const Row = ({ icon, title, hasChevron = true, rightContent = null }) => {
  return (
    <div className="profile-row">
      <div className="row-left">
        <div className="row-icon">
          {icon}
        </div>
        <span className="row-title">{title}</span>
      </div>
      <div className="row-right">
        {rightContent}
        {hasChevron && (
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
            <path d="M7 5L12 10L7 15" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </div>
    </div>
  );
};

const ProfileScreen = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showLocationModal, setShowLocationModal] = useState(false);
  const [showSecurityModal, setShowSecurityModal] = useState(false);

  return (
    <div className="profile-container">
      <Header activeTab="profile" />
      <div className="profile-main">
        <h1 className="profile-title">Profile Settings</h1>

        <div className="profile-card">
          <div onClick={() => setShowPaymentModal(true)} role="button" tabIndex={0} onKeyDown={(e) => (e.key === 'Enter' ? setShowPaymentModal(true) : null)}>
          <Row
            title="Payment Method"
            icon={(
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="5" width="18" height="14" rx="2" stroke="#0D90B2" strokeWidth="1.8"/>
                <rect x="3" y="9" width="18" height="2" fill="#0D90B2"/>
              </svg>
            )}
          />
          </div>

          <div onClick={() => setShowLocationModal(true)} role="button" tabIndex={0} onKeyDown={(e) => (e.key === 'Enter' ? setShowLocationModal(true) : null)}>
            <Row
              title="Location"
              icon={(
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M12 22s7-6.5 7-12a7 7 0 10-14 0c0 5.5 7 12 7 12z" stroke="#0D90B2" strokeWidth="1.8"/>
                  <circle cx="12" cy="10" r="2.5" stroke="#0D90B2" strokeWidth="1.8"/>
                </svg>
              )}
            />
          </div>

          <Row
            title="Notification"
            hasChevron={false}
            icon={(
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M12 22a2.5 2.5 0 002.5-2.5h-5A2.5 2.5 0 0012 22z" fill="#0D90B2"/>
                <path d="M18 16V11a6 6 0 10-12 0v5l-1.5 2h15L18 16z" stroke="#0D90B2" strokeWidth="1.8"/>
              </svg>
            )}
            rightContent={(
              <button
                className={`toggle ${notificationsEnabled ? 'on' : 'off'}`}
                onClick={() => setNotificationsEnabled(v => !v)}
                aria-label="Toggle notifications"
              >
                <span className="knob" />
              </button>
            )}
          />

          <div onClick={() => setShowSecurityModal(true)} role="button" tabIndex={0} onKeyDown={(e) => (e.key === 'Enter' ? setShowSecurityModal(true) : null)}>
            <Row
              title="Privacy & Security"
              icon={(
                <img src={privacyIcon} alt="Privacy" width={14} height={14} />
              )}
            />
          </div>
        </div>
      </div>

      {showPaymentModal && (
        <div className="payment-modal-overlay" onClick={() => setShowPaymentModal(false)}>
          <div className="payment-modal" onClick={(e) => e.stopPropagation()}>
            <h2 className="modal-title">Payment Method</h2>

            <div className="field-group">
              <label className="field-label">Card Number</label>
              <div className="input-with-icon">
                <span className="input-icon">
                  <img src={cardPng} alt="Card" width={16} height={16} />
                </span>
                <input className="modal-input" placeholder="1234 5678 9012 3456" />
              </div>
            </div>

            <div className="row-2">
              <div className="field-group">
                <label className="field-label">Expiry</label>
                <input className="modal-input" placeholder="MM/YY" />
              </div>
              <div className="field-group">
                <label className="field-label">CVV</label>
                <input className="modal-input" placeholder="MM/YY" />
              </div>
            </div>

            <div className="or-sep">
              <span className="line" />
              <span className="or-text">or</span>
              <span className="line" />
            </div>

            <button className="bank-button">Add Bank Account</button>

            <button className="continue-button">
              Continue
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                <path d="M2.5 10H17.5M17.5 10L12.5 5M17.5 10L12.5 15" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      )}

      {showLocationModal && (
        <div className="payment-modal-overlay" onClick={() => setShowLocationModal(false)}>
          <div className="location-modal" onClick={(e) => e.stopPropagation()}>
            <h2 className="modal-title">Location</h2>

            <div className="search-row">
              <span className="loc-search-icon">
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                  <path d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16ZM20 20l-4.35-4.35" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <input className="loc-search-input" placeholder="Search my location" />
              <button className="loc-clear-btn" aria-label="Clear">
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                  <path d="M5 5L15 15M15 5L5 15" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

            <button className="use-location-row">
              <span className="plane-icon">
                <img src={locationPng} alt="Location" width={18} height={18} />
              </span>
              <span className="use-location-text">Use my current location</span>
            </button>

            <div className="divider-line" />

            <div className="search-results-title">Search Results :</div>
          </div>
        </div>
      )}

      {showSecurityModal && (
        <div className="payment-modal-overlay" onClick={() => setShowSecurityModal(false)}>
          <div className="security-modal" onClick={(e) => e.stopPropagation()}>
            <h2 className="modal-title">Security & Privacy</h2>
            <p className="modal-subtitle">Manage security & privacy settings to protect your account.</p>

            <div className="panel">
              <div className="panel-title">Account Details</div>
              <div className="panel-divider" />

              <div className="panel-row">
                <div className="row-texts">
                  <div className="row-title">Verify Email Address</div>
                  <div className="row-sub">Verify your email address to confirm the credentials</div>
                </div>
                <button className="tag-button success">Verified</button>
              </div>

              <div className="panel-divider" />

              <div className="panel-row">
                <div className="row-texts">
                  <div className="row-title">Updated Password</div>
                  <div className="row-sub">Change you password to update & protect your account</div>
                </div>
                <button className="tag-button">Changed Password</button>
              </div>
            </div>

            <div className="panel">
              <div className="panel-title">Recovery Settings</div>
              <div className="panel-divider" />

              <div className="panel-row">
                <div className="row-texts">
                  <div className="row-title">Recovery Email Address</div>
                  <div className="row-sub">Setup recovery email to secure your account</div>
                </div>
              </div>

              <div className="panel-divider" />

              <div className="panel-row">
                <div className="row-texts fullwidth">
                  <div className="row-title">Another email address</div>
                  <input className="panel-input" placeholder="info@gmail.com" />
                </div>
              </div>

              <div className="panel-divider" />

              <div className="panel-row">
                <div className="row-texts">
                  <div className="row-title">Recovery Phone Number</div>
                  <div className="row-sub">Add Phone number to setup for your account</div>
                </div>
                <button className="small-button">Set Up</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileScreen;


