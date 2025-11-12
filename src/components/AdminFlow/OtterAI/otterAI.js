import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminHeader from '../adminHeader';
import aiProfileIcon from '../../../assets/icons/aiProfile.png';
import userIcon from '../../../assets/icons/user.png';
import userProfileIcon from '../../../assets/icons/tech one.png';
import flag2Icon from '../../../assets/icons/flag2.png';
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
      statusColor: '#FFD400',
      statusBg: '#FFFBE8'
    },
    {
      name: 'Creative Dynamics LLC',
      time: '3 minutes ago',
      message: 'I agree with the proposal. Let\'s finalize everything in our upcoming meeting.',
      tags: ['45s', '2 proposals'],
      status: 'Cost Discussion',
      statusColor: '#D200FF',
      statusBg: '#FBE6FF'
    },
    {
      name: 'Visionary Tech Group',
      time: '3 minutes ago',
      message: 'The pricing seems a bit steep. Can we explore more budget-friendly options?',
      tags: ['3m 15s', '2 proposals'],
      status: 'Agreement Reached',
      statusColor: '#1E7318',
      statusBg: '#F0FFEF'
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
            <img src={userIcon} alt="User" width="20" height="20" className="user-icon" />
            <span className="client-name">Techcorp Industries</span>
          </div>

          <div className="chat-messages">
            <div className="message" >
              <div className="message-avatar ai-avatar">
                <img src={aiProfileIcon} alt="AI" width="32" height="32" />
              </div>
              <div className="message-bubble ai-bubble" style={{width:'400px'}}>
                <p>Hello! I understand you're looking for our enterprise solution. Based on your requirements, I can prepare a customized quote.</p>
              </div>
            </div>

            <div className="message user-message">
              <div className="message-avatar user-avatar">
                <img src={userProfileIcon} alt="User" width="32" height="32" />
              </div>
              <div className="message-bubble user-bubble">
                <p>Yes, we need a solution for 500+ users with advanced analytics.</p>
              </div>
            </div>

            <div className="message" style={{width:'580px'}}>
              <div className="message-avatar ai-avatar">
                <img src={aiProfileIcon} alt="AI" width="32" height="32" />
              </div>
              <div className="message-bubble ai-bubble">
                <p>I've prepared a quote for the Enterprise Plus package that includes advanced analytics for 500 users. The total comes to $45,000/year with a 15% discount for annual payment.</p>
              </div>
            </div>
          </div>

          <div className="action-buttons-divider"></div>

          <div className="action-buttons">
            <button className="action-btn secondary-btn">Suggest Response</button>
            <button className="action-btn secondary-btn">Adjust Quote</button>
            <button className="action-btn primary-btn">Send Quote</button>
          </div>
        </div>

        <div className="conversations-section">
          <div className="section-header-row">
            <h2 className="section-title">
              <img src={flag2Icon} alt="Flag" width="20" height="20" className="flag-icon" />
              Current Conversations
            </h2>
          </div>

          <div className="conversations-list">
            {conversations.map((conversation, index) => (
              <div key={index} className="conversation-card">
                <div className="conversation-info">
                  <div className="conversation-header">
                    <h3 className="conversation-name">{conversation.name}</h3>
                    
                  </div>
                  {/* <span className="conversation-time" style={{marginLeft:-1}}>{conversation.time}</span> */}
                  <p className="conversation-message" style={{marginBottom:1}}>{conversation.time}</p>

                  <p className="conversation-message">{conversation.message}</p>
                  <div className="conversation-tags">
                    {conversation.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
                <span 
                  className="conversation-status" 
                  style={{ 
                    backgroundColor: conversation.statusBg,
                    color: conversation.statusColor,
                    borderColor: conversation.statusColor
                  }}
                >
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

