import React, { useState } from 'react';
import Header from './Header';
import PlumbingServicesModal from './home/PlumbingServicesModal';
import AvailableServiceProvidersModal from './home/AvailableServiceProvidersModal';
import BookServiceModal from './home/BookServiceModal';
import './HomeScreen.css';
import container1 from '../assets/icons/home icons/Container (1).png';
import container2 from '../assets/icons/home icons/Container (2).png';
import container3 from '../assets/icons/home icons/Container (3).png';
import container4 from '../assets/icons/home icons/Container (4).png';
import container5 from '../assets/icons/home icons/Container (5).png';
import container6 from '../assets/icons/home icons/Container (6).png';
import container7 from '../assets/icons/home icons/Container (7).png';
import container from '../assets/icons/home icons/Container.png';
import chatIcon from '../assets/icons/home icons/chat.png';

const HomeScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [chatMessage, setChatMessage] = useState('');
  const [showServiceModal, setShowServiceModal] = useState(false);
  const [showProvidersModal, setShowProvidersModal] = useState(false);
  const [showBookModal, setShowBookModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Search query:', searchQuery);
  };

  const handleChatSubmit = (e) => {
    e.preventDefault();
    console.log('Chat message:', chatMessage);
    setChatMessage('');
  };

  const handleQuickPrompt = (prompt) => {
    setChatMessage(prompt);
  };

  const services = [
    {
      id: 1,
      title: 'Plumbing',
      description: 'Emergency repairs, installations, & maintenance',
      icon: container,
      color: '#3B82F6'
    },
    {
      id: 2,
      title: 'HVAC',
      description: 'Heating, cooling, and air quality solutions',
      icon: container1,
      color: '#10B981'
    },
    {
      id: 3,
      title: 'Roofing',
      description: 'Repairs, replacements, and inspections',
      icon: container2,
      color: '#EF4444'
    },
    {
      id: 4,
      title: 'Cleaning',
      description: 'Regular and deep cleaning services',
      icon: container3,
      color: '#8B5CF6'
    },
    {
      id: 5,
      title: 'Electrical',
      description: 'Wiring, Outlets and lightening',
      icon: container4,
      color: '#F59E0B'
    },
    {
      id: 6,
      title: 'Appliance',
      description: 'Repair and installation',
      icon: container6,
      color: '#06B6D4'
    },
    {
      id: 7,
      title: 'Painting',
      description: 'Interior and exterior services',
      icon: container5,
      color: '#EC4899'
    },
    {
      id: 8,
      title: 'Landscaping',
      description: 'Lawn care and gardening',
      icon: container7,
      color: '#F97316'
    }
  ];

  return (
    <div className="home-container">
      {/* Header Component */}
        <Header activeTab="home" />

      {/* Main Content */}
      <div className="main-content">
        {/* Talk to Otter Section */}
        <div className="talk-to-otter-section">
          <h1 className="section-title">Talk to Otter</h1>
          <p className="section-subtitle">Tel me what you need help with</p>
          
          <form onSubmit={handleChatSubmit} className="chat-form">
            <div className="chat-input-container">
              <input
                type="text"
                value={chatMessage}
                onChange={(e) => setChatMessage(e.target.value)}
                placeholder="Talk to Otter"
                className="chat-input"
              />
              {/* <button type="submit" className="send-button">
                  <svg className="send-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M2.5 10L17.5 10M17.5 10L12.5 5M17.5 10L12.5 15" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
              </button> */}
               {/* <button type="submit" className="send-button"> */}
                  <img src={chatIcon} alt="Send" height={30} width={30} style={{marginRight:7}}  />
                {/* </button> */}
            </div>
          </form>

          {/* Quick Prompts */}
          <div className="quick-prompts">
            <button className="prompt-button" onClick={() => handleQuickPrompt('Emergency Plumber')}>
              Emergency Plumber
            </button>
            <button className="prompt-button" onClick={() => handleQuickPrompt('AC not working')}>
              AC not working
            </button>
            <button className="prompt-button" onClick={() => handleQuickPrompt('Electrician needed')}>
              Electrician needed
            </button>
            <button className="prompt-button" onClick={() => handleQuickPrompt('Need help with the kitchen sink?')}>
              Need help with the kitchen sink?
            </button>
          </div>
        </div>

        {/* Popular Services Section */}
        <div className="popular-services-section">
          <h1 className="section-title">Popular services</h1>
          <p className="section-subtitle">Professional home services you can trust</p>
          
          <form onSubmit={handleSearch} className="search-form">
            <div className="search-container">
              <svg className="search-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16ZM20 20l-4.35-4.35" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search"
                className="search-input"
              />
            </div>
          </form>

          {/* Service Cards Grid */}
          <div className="services-grid">
            {services.map((service) => (
              <div 
                key={service.id} 
                className="service-card"
                onClick={() => {
                  setSelectedService(service);
                  setShowServiceModal(true);
                }}
                style={{ cursor: 'pointer' }}
              >
                <div className="service-icon" >
                  <img src={service.icon} alt={service.title} className="service-icon-img" />
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <PlumbingServicesModal 
        isOpen={showServiceModal}
        service={selectedService}
        onClose={() => setShowServiceModal(false)}
        onOpenProviders={() => { setShowServiceModal(false); setShowProvidersModal(true); }}
      />
      <AvailableServiceProvidersModal 
        isOpen={showProvidersModal}
        service={selectedService}
        onClose={() => setShowProvidersModal(false)}
        onBook={() => { setShowProvidersModal(false); setShowBookModal(true); }}
      />
      <BookServiceModal 
        isOpen={showBookModal} 
        service={selectedService}
        onClose={() => setShowBookModal(false)} 
      />
    </div>
  );
};

export default HomeScreen;
