import React from 'react';
import './BookServiceModal.css';

const BookServiceModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="book-modal-overlay" onClick={onClose}>
      <div className="book-modal" onClick={(e) => e.stopPropagation()}>
        <div className="book-header">
          <h2 className="book-title">Book Service</h2>
          <button className="book-close" onClick={onClose}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M15 5L5 15M5 5L15 15" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Selected Service Banner (with provider row inside) */}
        <div className="selected-service">
          <div className="service-row">
            <div className="service-titles">
              <span className="service-main">Emergency Plumbing Services</span>
              <span className="arrow">→</span>
              <span className="service-sub">Pipe Leak Solutions</span>
            </div>
            <span className="availability">Currently Available</span>
          </div>
          <div className="service-description">Repair dripping faucets, burst pipes, and water leaks</div>

          <div className="provider-row">
            <div className="profile-left">
              <div className="avatar">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="8" r="4" stroke="#0D90B2" strokeWidth="1.5"/>
                  <path d="M4 20C4 15.5817 7.58172 12 12 12C16.4183 12 20 15.5817 20 20" stroke="#0D90B2" strokeWidth="1.5"/>
                </svg>
              </div>
              <div className="profile-texts">
                <span className="provider-name">John Smith</span>
                <div className="rating-line">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <path d="M8 1L10.09 5.26L15 6L11.5 9.74L12.18 15L8 12.77L3.82 15L4.5 9.74L1 6L5.91 5.26L8 1Z" fill="#FCD34D"/>
                  </svg>
                  <span>4.8</span>
                  <span className="dot">•</span>
                  <span>License #PLB-1234</span>
                </div>
              </div>
            </div>
            <div className="cost-right">
              <div className="cost">$80-160</div>
              <div className="cost-sub">Estimated Cost</div>
            </div>
          </div>
        </div>

        {/* Urgent Assistance */}
        <div className="section-card">
          <div className="section-title">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Immediate Plumbing Help</span>
          </div>
          <div className="urgent-row">
            <div className="urgent-texts">
              <div className="urgent-title">Require urgent help?</div>
              <div className="urgent-sub">Book now for immediate service response</div>
            </div>
            <label className="toggle">
              <input type="checkbox" defaultChecked />
              <span className="slider" />
            </label>
          </div>
        </div>

        {/* Date & Time */}
        <div className="section-card">
          <div className="section-heading">When do you need service?</div>
          <div className="field">
            <label>Select date</label>
            <div className="input-like">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="4" width="18" height="18" rx="2" stroke="#111827" strokeWidth="1.5"/>
                <path d="M3 10H21" stroke="#111827" strokeWidth="1.5"/>
              </svg>
              <span>Pick a date</span>
            </div>
          </div>
          <div className="field">
            <label>Select Time</label>
            <div className="input-like">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="9" stroke="#111827" strokeWidth="1.5"/>
                <path d="M12 6V12L16 14" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Pick a Time</span>
            </div>
          </div>
        </div>

        {/* Service Address */}
        <div className="section-card">
          <div className="section-title">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M12 22s7-6.5 7-12a7 7 0 10-14 0c0 5.5 7 12 7 12z" stroke="#111827" strokeWidth="1.5"/>
              <circle cx="12" cy="10" r="2.5" stroke="#111827" strokeWidth="1.5"/>
            </svg>
            <span>Service Location</span>
          </div>
          <div className="field">
            <label>Your Location</label>
            <div className="address-input">Please provide your address</div>
            <div className="address-hint">Technician will arrive at this address</div>
          </div>
        </div>

        <button className="proceed-button">Continue to Payment</button>
      </div>
    </div>
  );
};

export default BookServiceModal;


