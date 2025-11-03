import React from 'react';
import './AvailableServiceProvidersModal.css';
import privacyIcon from '../../assets/icons/privacy.png';
import phoneIcon from '../../assets/icons/phone.png';

const AvailableServiceProvidersModal = ({ isOpen, onClose, onBook, service }) => {
  if (!isOpen || !service) return null;

  const providers = [
    {
      id: 1,
      companyName: 'Aqua Flow Plumbing',
      verified: true,
      rating: 4.9,
      reviews: 17,
      services: ['Emergency repairs', 'Water Heaters', 'Leak Detection'],
      priceRange: '$75-150',
      estimatedTime: '<30 min',
      phone: '(555), 123-4567'
    },
    {
      id: 2,
      companyName: 'ProPipe Solutions',
      verified: true,
      rating: 4.9,
      reviews: 89,
      services: ['Pipe Repairs', 'Drain Cleaning', 'Installations'],
      priceRange: '$65-120',
      estimatedTime: '<1 hour',
      phone: '(555), 123-4567'
    },
    {
      id: 3,
      companyName: 'Rapids Plumbing Co.',
      verified: true,
      rating: 4.7,
      reviews: 176,
      services: ['Emergency Services', 'Residential', 'Commercial'],
      priceRange: '$65-120',
      estimatedTime: '<1 hour',
      phone: '(555), 123-4567'
    }
  ];

  return (
    <div className="providers-modal-overlay" onClick={onClose}>
      <div className="providers-modal" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="providers-modal-header">
          <h2 className="providers-modal-title">Available Service Providers</h2>
          <button className="close-btn-providers" onClick={onClose}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M15 5L5 15M5 5L15 15" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Providers List */}
        <div className="providers-list">
          {providers.map((provider) => {
            const displayName = provider.companyName.replace(/Plumbing/gi, service.title);
            return (
            <div key={provider.id} className="provider-card">
              {/* Top Section: Company Name, Verified Badge, Rating, Price, Time */}
              <div className="provider-card-top">
                <div className="provider-left">
                  <div className="provider-name-row">
                    <h3 className="provider-name">{displayName}</h3>
                    {provider.verified && (
                      <span className="verified-badge">
                        <img src={privacyIcon} alt="Verified" className="verified-icon" />
                        <span>Verified</span>
                      </span>
                    )}
                  </div>
                  <div className="provider-rating">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M8 1L10.09 5.26L15 6L11.5 9.74L12.18 15L8 12.77L3.82 15L4.5 9.74L1 6L5.91 5.26L8 1Z" fill="#FCD34D"/>
                    </svg>
                    <span className="rating-number">{provider.rating}</span>
                    <span className="reviews-count">({provider.reviews} reviews)</span>
                  </div>
                </div>
                <div className="provider-right">
                  <div className="price-range">{provider.priceRange}</div>
                  <div className="estimated-time">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="9" stroke="#6B7280" strokeWidth="1.5"/>
                      <path d="M12 6V12L16 14" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>{provider.estimatedTime}</span>
                  </div>
                </div>
              </div>

              {/* Services Tags */}
              <div className="services-tags">
                {provider.services.map((service, index) => (
                  <span key={index} className="service-tag">{service}</span>
                ))}
              </div>

              {/* Bottom Section: Contact Button and Phone */}
              <div className="provider-card-bottom">
                <button className="contact-now-btn" onClick={() => onBook && onBook(provider)}>Contact Now</button>
                <div className="phone-box">
                  <img src={phoneIcon} alt="Phone" width={16} height={16} />
                  <span>{provider.phone}</span>
                </div>
              </div>
            </div>
          );})}
        </div>
      </div>
    </div>
  );
};

export default AvailableServiceProvidersModal;

