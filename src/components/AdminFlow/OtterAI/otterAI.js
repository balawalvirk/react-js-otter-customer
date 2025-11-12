import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminHeader from '../adminHeader';
import './otterAI.css';

const OtterAI = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('otter-ai');

  const navigationItems = [
    {
      key: 'home',
      label: 'Home',
      onPress: () => navigate('/admin-home')
    },
    {
      key: 'companies',
      label: 'Companies',
      onPress: () => navigate('/admin-companies')
    },
    {
      key: 'disputes',
      label: 'Disputes',
      onPress: () => navigate('/admin-disputes')
    },
    {
      key: 'payments',
      label: 'Payments',
      onPress: () => navigate('/admin-payments')
    },
    {
      key: 'otter-ai',
      label: 'Otter AI',
      onPress: () => setActiveTab('otter-ai')
    },
    {
      key: 'ratings',
      label: 'Ratings',
      onPress: () => navigate('/admin-ratings')
    },
    {
      key: 'logout',
      label: 'Logout',
      onPress: () => navigate('/admin-logout')
    }
  ];

  const conversations = [
    {
      name: 'FutureTech Solutions',
      time: 'Just now',
      message: 'The proposal seems promising, but we should clarify the deadlines...',
      tags: ['1m 45s', '2 proposals'],
      status: 'Proposal Assessment',
      statusColor: '#F59E0B'
    },
    {
      name: 'Creative Dynamics LLC',
      time: '3 minutes ago',
      message: 'I agree with the proposal. Let\'s finalize everything in our upcoming meeting.',
      tags: ['45s', '2 proposals'],
      status: 'Cost Discussion',
      statusColor: '#EC4899'
    },
    {
      name: 'Visionary Tech Group',
      time: '3 minutes ago',
      message: 'The pricing seems a bit steep. Can we explore more budget-friendly options?',
      tags: ['3m 15s', '2 proposals'],
      status: 'Agreement Reached',
      statusColor: '#10B981'
    }
  ];

  return (
    <div className="admin-otter-ai-container">
      <AdminHeader activeTab={activeTab} navigationItems={navigationItems} />

      <div className="admin-main-content">
        <div className="page-header">
          <h1 className="page-title">AI Interaction Records</h1>
          <p className="page-subtitle">Track the progress of discussions and negotiations.</p>
        </div>

        <div className="ai-interaction-section">
          <div className="client-header">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="search-icon">
              <path d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M17.5 17.5L13.875 13.875" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="client-name">Techcorp Industries</span>
          </div>

          <div className="chat-messages">
            <div className="message ai-message">
              <div className="message-avatar ai-avatar">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 1.66667C5.4 1.66667 1.66667 5.4 1.66667 10C1.66667 14.6 5.4 18.3333 10 18.3333C14.6 18.3333 18.3333 14.6 18.3333 10C18.3333 5.4 14.6 1.66667 10 1.66667Z" fill="white"/>
                </svg>
              </div>
              <div className="message-bubble ai-bubble">
                <p>Hello! I understand you're looking for our enterprise solution. Based on your requirements, I can prepare a customized quote.</p>
              </div>
            </div>

            <div className="message user-message">
              <div className="message-avatar user-avatar">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 10C12.7614 10 15 7.76142 15 5C15 2.23858 12.7614 0 10 0C7.23858 0 5 2.23858 5 5C5 7.76142 7.23858 10 10 10Z" fill="white"/>
                  <path d="M10 12.5C5.85938 12.5 2.5 15.8594 2.5 20H17.5C17.5 15.8594 14.1406 12.5 10 12.5Z" fill="white"/>
                </svg>
              </div>
              <div className="message-bubble user-bubble">
                <p>Yes, we need a solution for 500+ users with advanced analytics.</p>
              </div>
            </div>

            <div className="message ai-message">
              <div className="message-avatar ai-avatar">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 1.66667C5.4 1.66667 1.66667 5.4 1.66667 10C1.66667 14.6 5.4 18.3333 10 18.3333C14.6 18.3333 18.3333 14.6 18.3333 10C18.3333 5.4 14.6 1.66667 10 1.66667Z" fill="white"/>
                </svg>
              </div>
              <div className="message-bubble ai-bubble">
                <p>I've prepared a quote for the Enterprise Plus package that includes advanced analytics for 500 users. The total comes to $45,000/year with a 15% discount for annual payment.</p>
              </div>
            </div>
          </div>

          <div className="action-buttons">
            <button className="action-btn secondary-btn">Suggest Response</button>
            <button className="action-btn secondary-btn">Adjust Quote</button>
            <button className="action-btn primary-btn">Send Quote</button>
          </div>
        </div>

        <div className="conversations-section">
          <div className="section-header-row">
            <h2 className="section-title">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ marginRight: '0.5rem', display: 'inline' }}>
                <path d="M15 2.5H5C4.13125 2.5 3.4375 3.19375 3.4375 4.0625V15.9375C3.4375 16.8063 4.13125 17.5 5 17.5H15C15.8688 17.5 16.5625 16.8063 16.5625 15.9375V4.0625C16.5625 3.19375 15.8688 2.5 15 2.5Z" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3.4375 6.25H16.5625" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Current Conversations
            </h2>
          </div>

          <div className="conversations-list">
            {conversations.map((conversation, index) => (
              <div key={index} className="conversation-card">
                <div className="conversation-info">
                  <div className="conversation-header">
                    <h3 className="conversation-name">{conversation.name}</h3>
                    <span className="conversation-time">{conversation.time}</span>
                  </div>
                  <p className="conversation-message">{conversation.message}</p>
                  <div className="conversation-tags">
                    {conversation.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
                <span className="conversation-status" style={{ backgroundColor: conversation.statusColor }}>
                  {conversation.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtterAI;

