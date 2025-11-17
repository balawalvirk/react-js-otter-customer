import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AddsHeader from '../addsHeader';
import icon30 from '../../../assets/icons/adds/Container (30).png';
import icon31 from '../../../assets/icons/adds/Container (31).png';
import icon32 from '../../../assets/icons/adds/Container (32).png';
import icon33 from '../../../assets/icons/adds/Container (33).png';
import './analytics.css';

const Analytics = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('analytics');

  const navigationItems = [
    {
      key: 'analytics',
      label: 'Analytics',
      onPress: () => navigate('/adds-analytics')
    },
    {
      key: 'ad-campaigns',
      label: 'Ad Campaigns',
      onPress: () => navigate('/adds-ad-campaigns')
    },
    {
      key: 'payments',
      label: 'Payment',
      onPress: () => navigate('/adds-payment')
    },
    {
      key: 'engagement-reports',
      label: 'Engagement Reports',
      onPress: () => navigate('/adds-engagement-reports')
    }
  ];

  const kpiCards = [
    {
      id: 1,
      title: 'Total Impressions',
      value: '368K',
      valueColor: '#F97316',
      change: '+15.3% vs last month',
      changeColor: '#6B7280',
      icon: icon30
    },
    {
      id: 2,
      title: 'Total Clicks',
      value: '10.1K',
      valueColor: '#EF4444',
      change: '+12.8% vs last month',
      changeColor: '#6B7280',
      icon: icon31
    },
    {
      id: 3,
      title: 'Total Spend',
      value: '$18,450',
      valueColor: '#10B981',
      change: '-3.2% vs last month',
      changeColor: '#6B7280',
      icon: icon32
    },
    {
      id: 4,
      title: 'Avg CTR',
      value: '2.74%',
      valueColor: '#0EA5E9',
      change: '+8.1% vs last month',
      changeColor: '#6B7280',
      icon: icon33
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

        <div className="analytics-content-card">
          <div className="kpi-grid">
            {kpiCards.map(card => (
              <div key={card.id} className="kpi-card">
                <div className="kpi-header-row">
                  <div className="kpi-icon-wrapper">
                    <img src={card.icon} alt={card.title} />
                  </div>
                  <h3 className="kpi-title">{card.title}</h3>
                </div>
                <div className="kpi-content">
                  <h2 className="kpi-value" style={{ color: card.valueColor }}>
                    {card.value}
                  </h2>
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
              <div className="chart-title-row">
                <h3 className="chart-title">Total revenue</h3>
                <div className="chart-legend">
                  <div className="legend-item">
                    <div className="legend-dot revenue"></div>
                    <span>Revenue</span>
                  </div>
                  <div className="legend-item">
                    <div className="legend-dot outflow"></div>
                    <span>Outflow</span>
                  </div>
                </div>
              </div>
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
                        <defs>
                          <linearGradient id="revenueGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#B5F0FF" />
                            <stop offset="100%" stopColor="#BBF49C" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                        {/* Area fill under revenue line */}
                        <path
                          d="M 0,40 L 100,30 L 200,150 L 300,130 L 400,20 L 400,200 L 0,200 Z"
                          fill="url(#revenueGradient)"
                        />
                        {/* Revenue line (solid) */}
                        <polyline
                          points="0,40 100,30 200,150 300,130 400,20"
                          fill="none"
                          stroke="#0D90B2"
                          strokeWidth="2.5"
                        />
                        {/* Outflow line (dashed) */}
                        <polyline
                          points="0,100 100,80 200,170 300,150 400,60"
                          fill="none"
                          stroke="#0D90B2"
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
    </div>
  );
};

export default Analytics;

