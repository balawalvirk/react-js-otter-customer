import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AddsHeader from '../addsHeader';
import './analytics.css';

const Analytics = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('analytics');

  const navigationItems = [
    {
      key: 'analytics',
      label: 'Analytics',
      onPress: () => setActiveTab('analytics')
    },
    {
      key: 'ad-campaigns',
      label: 'Ad Campaigns',
      onPress: () => setActiveTab('ad-campaigns')
    },
    {
      key: 'payments',
      label: 'Payments',
      onPress: () => setActiveTab('payments')
    },
    {
      key: 'engagement-reports',
      label: 'Engagement Reports',
      onPress: () => setActiveTab('engagement-reports')
    }
  ];

  const kpiCards = [
    {
      id: 1,
      title: 'Total Impressions',
      value: '368K',
      change: '+15.3% vs last month',
      changeColor: '#10B981',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="12" r="3" stroke="#111827" strokeWidth="2"/>
        </svg>
      )
    },
    {
      id: 2,
      title: 'Total Clicks',
      value: '10.1K',
      change: '+12.8% vs last month',
      changeColor: '#10B981',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M9 11L12 8L15 11" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 8V18" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 18H16" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="5" r="1.5" fill="#111827"/>
        </svg>
      )
    },
    {
      id: 3,
      title: 'Total Spend',
      value: '$18,450',
      change: '-3.2% vs last month',
      changeColor: '#EF4444',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 2V22M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      id: 4,
      title: 'Avg CTR',
      value: '2.74%',
      change: '+8.1% vs last month',
      changeColor: '#10B981',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M3 3V21H21" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7 16L12 11L16 15L21 10" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  const alerts = [
    {
      id: 1,
      severity: 'High',
      severityColor: '#EF4444',
      message: 'Refund rate spike in Zone 3A',
      time: '2h ago'
    },
    {
      id: 2,
      severity: 'Medium',
      severityColor: '#F59E0B',
      message: 'CSAT drop for Business #245',
      time: '2h ago'
    },
    {
      id: 3,
      severity: 'Low',
      severityColor: '#9CA3AF',
      message: 'Conversion rate below target in NY',
      time: '2h ago'
    }
  ];

  return (
    <div className="analytics-container">
      <AddsHeader activeTab={activeTab} navigationItems={navigationItems} />

      <div className="analytics-main-content">
        <div className="analytics-header">
          <h1 className="analytics-title">Analytics Overview</h1>
          <p className="analytics-subtitle">Monitor your campaign performance and business metrics</p>
        </div>

        <div className="kpi-grid">
          {kpiCards.map(card => (
            <div key={card.id} className="kpi-card">
              <div className="kpi-icon-wrapper">
                {card.icon}
              </div>
              <div className="kpi-content">
                <h3 className="kpi-title">{card.title}</h3>
                <h2 className="kpi-value">{card.value}</h2>
                <p className="kpi-change" style={{ color: card.changeColor }}>
                  {card.change}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="charts-section">
          <div className="chart-card">
            <h3 className="chart-title">Performance by Territory</h3>
            <div className="bar-chart-container">
              <div className="bar-chart">
                <div className="chart-y-axis">
                  <span>3000</span>
                  <span>2250</span>
                  <span>1500</span>
                  <span>750</span>
                  <span>0</span>
                </div>
                <div className="chart-bars">
                  <div className="chart-bar-group">
                    <div className="chart-bar" style={{ height: '33%' }}></div>
                    <span className="chart-x-label">North Region</span>
                  </div>
                  <div className="chart-bar-group">
                    <div className="chart-bar" style={{ height: '97%' }}></div>
                    <span className="chart-x-label">South Region</span>
                  </div>
                  <div className="chart-bar-group">
                    <div className="chart-bar" style={{ height: '77%' }}></div>
                    <span className="chart-x-label">East Region</span>
                  </div>
                  <div className="chart-bar-group">
                    <div className="chart-bar" style={{ height: '30%' }}></div>
                    <span className="chart-x-label">West Region</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="chart-card">
            <h3 className="chart-title">Total revenue</h3>
            <div className="line-chart-container">
              <div className="line-chart">
                <div className="chart-y-axis">
                  <span>100K</span>
                  <span>50K</span>
                  <span>25K</span>
                  <span>0K</span>
                </div>
                <div className="chart-lines">
                  <div className="line-chart-svg-wrapper">
                    <svg className="line-chart-svg" viewBox="0 0 400 200" preserveAspectRatio="none">
                      {/* Revenue line (solid blue) - starts high, dips in March, rises to May */}
                      <polyline
                        points="0,40 100,30 200,150 300,130 400,20"
                        fill="none"
                        stroke="#2563EB"
                        strokeWidth="2.5"
                      />
                      {/* Outflow line (dashed blue) */}
                      <polyline
                        points="0,100 100,80 200,170 300,150 400,60"
                        fill="none"
                        stroke="#2563EB"
                        strokeWidth="2.5"
                        strokeDasharray="6,4"
                      />
                    </svg>
                  </div>
                  <div className="chart-x-labels">
                    <span>Jan</span>
                    <span>Feb</span>
                    <span>Mar</span>
                    <span>Apr</span>
                    <span>May</span>
                  </div>
                  <div className="chart-legend">
                    <div className="legend-item">
                      <div className="legend-line solid"></div>
                      <span>Revenue</span>
                    </div>
                    <div className="legend-item">
                      <div className="legend-line dashed"></div>
                      <span>Outflow</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="alerts-section">
          <div className="alerts-header">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ marginRight: '0.5rem' }}>
              <path d="M10 1.66667L2.5 17.5H17.5L10 1.66667Z" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10 7.5V11.6667" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="10" cy="14.1667" r="0.833333" fill="#F59E0B"/>
            </svg>
            <h3 className="alerts-title">Active Alerts</h3>
          </div>
          <div className="alerts-list">
            {alerts.map(alert => (
              <div key={alert.id} className="alert-item">
                <span 
                  className="alert-severity" 
                  style={{ 
                    backgroundColor: alert.severityColor === '#EF4444' ? '#FEE2E2' : 
                                    alert.severityColor === '#F59E0B' ? '#FEF3C7' : '#F3F4F6',
                    color: alert.severityColor === '#9CA3AF' ? '#6B7280' : alert.severityColor,
                    border: `1px solid ${alert.severityColor}`
                  }}
                >
                  {alert.severity}
                </span>
                <span className="alert-message">{alert.message}</span>
                <span className="alert-time">{alert.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;

