import React from 'react';
import './AvailableServiceProvidersModal.css';
import privacyIcon from '../../assets/icons/privacy.png';

const AvailableServiceProvidersModal = ({ isOpen, onClose, onBook }) => {
  if (!isOpen) return null;

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
          {providers.map((provider) => (
            <div key={provider.id} className="provider-card">
              {/* Top Section: Company Name, Verified Badge, Rating, Price, Time */}
              <div className="provider-card-top">
                <div className="provider-left">
                  <div className="provider-name-row">
                    <h3 className="provider-name">{provider.companyName}</h3>
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
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M3 5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H8.28C8.76228 3 9.20571 3.214 9.50213 3.57L11.2221 5.57C11.5186 5.926 11.962 6.14 12.4443 6.14H19C19.5304 6.14 20.0391 6.35071 20.4142 6.72579C20.7893 7.10086 21 7.60957 21 8.14V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5Z" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>{provider.phone}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AvailableServiceProvidersModal;

