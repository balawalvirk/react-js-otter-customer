import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProgressIndicator from './ProgressIndicator';
import aiIcon from '../assets/icons/ai.png';
import './AIAssistantScreen.css';

const AIAssistantScreen = () => {
  const navigate = useNavigate();
  const [aiEnabled, setAiEnabled] = useState(true);

  const handleComplete = () => {
    console.log('AI setup completed');
    navigate('/home');
  };

  return (
    <div className="ai-container">
      <ProgressIndicator currentStep={4} />
      <div className="form-section">
        <div className="ai-card">
          <h1 className="ai-title">AI Assistant Preferences</h1>
          
          <div className="ai-section">
            <div className="ai-header">
              <img src={aiIcon} alt="AI" className="ai-icon" />
              <div className="ai-content">
                <h3>AI Communication</h3>
                <p>Allow Other AI to communicate with service providers on your behalf to get quotes and schedule appointments</p>
                <div className="ai-status-container">
                  <span className="ai-status">{aiEnabled ? 'Enabled' : 'Disabled'}</span>
                  <div className="toggle-container">
                    <button 
                      className={`toggle ${aiEnabled ? 'active' : ''}`}
                      onClick={() => setAiEnabled(!aiEnabled)}
                    >
                      <div className="toggle-slider"></div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="ai-section">
            <h3>What this means :</h3>
            <ul className="ai-list">
              <li>Faster response times</li>
              <li>Automatic quote comparisons</li>
              <li>Smart scheduling based on your availability</li>
              <li>You maintain full control and approval</li>
            </ul>
          </div>

          <div className="ai-actions">
            <button className="complete-button" onClick={handleComplete}>
              Complete Setup
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4.16667 10H15.8333M15.8333 10L10.8333 5M15.8333 10L10.8333 15" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAssistantScreen;
