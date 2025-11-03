import React, { useState } from 'react';
import './PlumbingServicesModal.css';

const PlumbingServicesModal = ({ isOpen, onClose, onOpenProviders, service }) => {
  const [selectedServiceTime, setSelectedServiceTime] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');

  if (!isOpen || !service) return null;

  return (
    <div className="plumbing-modal-overlay" onClick={onClose}>
      <div className="plumbing-modal" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="plumbing-modal-header">
          <div className="header-left">
            {/* <div className="service-icon-box"> */}
              <img src={service.icon} alt={service.title} width={30} height={30} />
            {/* </div> */}
            <h2 className="modal-title-text">{service.title} Services</h2>
          </div>
          <button className="close-btn" onClick={onClose}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M15 5L5 15M5 5L15 15" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Search Bar */}
        <div className="search-container-modal">
          <svg className="search-icon-modal" width="18" height="18" viewBox="0 0 20 20" fill="none">
            <path d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16ZM20 20l-4.35-4.35" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
            <input
              type="text"
              className="search-input-modal"
              placeholder={`Search for ${service.title.toLowerCase()} services (e.g., repair, installation, maintenance)`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
        </div>

        {/* Service Location */}
        <div className="field-section">
          <label className="field-label">Service Location</label>
          <div className="location-input-wrapper">
            <svg className="location-icon-left" width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M12 22s7-6.5 7-12a7 7 0 10-14 0c0 5.5 7 12 7 12z" stroke="#0D90B2" strokeWidth="1.5"/>
              <circle cx="12" cy="10" r="2.5" stroke="#0D90B2" strokeWidth="1.5"/>
            </svg>
            <input
              type="text"
              className="location-input"
              placeholder="Enter address or use current location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <button className="location-btn-right" type="button">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M12 22s7-6.5 7-12a7 7 0 10-14 0c0 5.5 7 12 7 12z" stroke="#111827" strokeWidth="1.5"/>
                <circle cx="12" cy="10" r="2.5" stroke="#111827" strokeWidth="1.5"/>
              </svg>
            </button>
          </div>
        </div>

        {/* When do you need this service? */}
        <div className="field-section">
          <label className="field-label">When do you need this service?</label>
          <div className="service-time-options">
            <button
              className={`time-option ${selectedServiceTime === 'emergency' ? 'selected' : ''}`}
              onClick={() => setSelectedServiceTime('emergency')}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M12 9V13M12 17H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#DC2626" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Emergency ASAP</span>
            </button>
            <button
              className={`time-option ${selectedServiceTime === 'today' ? 'selected' : ''}`}
              onClick={() => setSelectedServiceTime('today')}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Today</span>
            </button>
            <button
              className={`time-option ${selectedServiceTime === 'time' ? 'selected' : ''}`}
              onClick={() => setSelectedServiceTime('time')}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="9" stroke="#111827" strokeWidth="1.5"/>
                <path d="M12 6V12L16 14" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Time</span>
            </button>
            <button
              className={`time-option ${selectedServiceTime === 'schedule' ? 'selected' : ''}`}
              onClick={() => setSelectedServiceTime('schedule')}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="4" width="18" height="18" rx="2" stroke="#111827" strokeWidth="1.5"/>
                <path d="M3 10H21" stroke="#111827" strokeWidth="1.5"/>
                <path d="M8 2V6" stroke="#111827" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M16 2V6" stroke="#111827" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <span>Schedule Pick Date</span>
            </button>
          </div>
        </div>

        {/* Upload/Take photo */}
        <div className="field-section">
          <label className="field-label">Upload/Take photo</label>
          <div className="photo-buttons">
            <button type="button" className="photo-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15M17 8L12 3M12 3L7 8M12 3V15" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Upload Photo</span>
            </button>
            <button type="button" className="photo-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M23 19C23 19.5304 22.7893 20.0391 22.4142 20.4142C22.0391 20.7893 21.5304 21 21 21H3C2.46957 21 1.96086 20.7893 1.58579 20.4142C1.21071 20.0391 1 19.5304 1 19V5C1 4.46957 1.21071 3.96086 1.58579 3.58579C1.96086 3.21071 2.46957 3 3 3H7L9 1H15L17 3H21C21.5304 3 22.0391 3.21071 22.4142 3.58579C22.7893 3.96086 23 4.46957 23 5V19Z" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="11" r="4" stroke="#111827" strokeWidth="1.5"/>
              </svg>
              <span>Take Photo</span>
            </button>
          </div>
        </div>

        {/* Describe the Issue */}
        <div className="field-section">
          <label className="field-label">Describe the Issue</label>
          <textarea
            className="description-textarea"
            placeholder="e.g., The kitchen sink is leaking under the cabinet."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
          />
        </div>

        {/* Footer Buttons */}
        <div className="modal-footer">
          <button className="book-now-btn" onClick={onClose}>Book Now</button>
          <button className="available-companies-btn" onClick={onOpenProviders}>Available Companies</button>
        </div>
      </div>
    </div>
  );
};

export default PlumbingServicesModal;

