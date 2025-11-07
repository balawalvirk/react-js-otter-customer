import React, { useState } from 'react';
import Header from './Header';
import chatIcon from '../assets/icons/home icons/chat.png';
import phoneIcon from '../assets/icons/phone.png';
import './ChatScreen.css';

const ChatScreen = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      console.log('Sending message:', message);
      setMessage('');
    }
  };

  const handleVoiceInput = () => {
    console.log('Voice input activated');
  };

  return (
    <div className="chat-container">
      {/* Header Component */}
        <Header activeTab="chat" />

      {/* Main Content */}
      <div className="chat-main-content">
        {/* Chat Header */}
        <div className="chat-header">
          <button className="back-button">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M15 10H5M5 10L10 5M5 10L10 15" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <h1 className="chat-title">Otter AI</h1>
        </div>

        {/* Chat Messages */}
        <div className="chat-messages">
          <div className="message-bubble ai-message">
            <p className="message-text">
              Hi Tooba! I'm Otter, your AI assistant. I'm here to help you find the perfect service provider. What do you need help with today?
            </p>
            <span className="message-time">06:52 PM</span>
          </div>
        </div>

        {/* Chat Input */}
        <div className="chat-input-area">
          {/* Big Circle Phone Button */}
          <div className="mic-button-container">
            <button 
              type="button" 
              className="big-mic-button" 
              onClick={handleVoiceInput}
            >
              <img src={phoneIcon} alt="Phone" width="32" height="32" />
            </button>
          </div>
          <form onSubmit={handleSubmit} className="message-form">
            <div className="input-and-buttons">
              <div className="message-input-container">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="message-input"
                />
              </div>
              <div className="action-buttons">
                <button type="button" className="voice-button" onClick={handleVoiceInput}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10 1C8.34315 1 7 2.34315 7 4V10C7 11.6569 8.34315 13 10 13C11.6569 13 13 11.6569 13 10V4C13 2.34315 11.6569 1 10 1Z" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5 10V10.5C5 12.9853 7.01472 15 9.5 15H10.5C12.9853 15 15 12.9853 15 10.5V10" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10 15V19M6 19H14" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button type="submit" className="send-button">
                  <img src={chatIcon} alt="Send" className="send-icon" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatScreen;
