import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AddsHeader from '../addsHeader';
import completeCancelIcon from '../../../assets/icons/history/complete-and-cancel.png';
import icon30 from '../../../assets/icons/adds/Container (30).png';
import icon31 from '../../../assets/icons/adds/Container (31).png';
import icon35 from '../../../assets/icons/Container (35).png';
import icon32 from '../../../assets/icons/Container (32).png';
import icon33 from '../../../assets/icons/Container (33).png';
import icon36 from '../../../assets/icons/Container (36).png';
import './engagementReports.css';

const EngagementReports = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('engagement-reports');

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
      change: '+15.3% vs last month',
      changeColor: '#10B981',
      icon: icon30,
      iconColor: '#F97316'
    },
    {
      id: 2,
      title: 'Total Clicks',
      value: '10.1K',
      change: '+12.8% vs last month',
      changeColor: '#10B981',
      icon: icon31,
      iconColor: '#EF4444'
    },
    {
      id: 3,
      title: 'Conversion',
      value: '250',
      change: '+8.7% Last 30 days',
      changeColor: '#10B981',
      icon: icon35,
      iconColor: '#F97316'
    },
    {
      id: 4,
      title: 'Total Spend',
      value: '$24,000',
      description: 'All-time ad spend',
      valueColor: '#10B981',
      icon: icon32,
      iconColor: '#10B981'
    },
    {
      id: 5,
      title: 'Average CTR',
      value: '2.77%',
      change: '+0.3% Click-through rate',
      changeColor: '#10B981',
      icon: icon33,
      iconColor: '#0EA5E9'
    },
    {
      id: 6,
      title: 'Cost per Conversion',
      value: '$96',
      change: '-5.2% Average CPA',
      changeColor: '#EF4444',
      icon: icon36,
      iconColor: '#EF4444'
    }
  ];

  const cohortData = [
    { cohort: 'Week 1', day1: '100%', day7: '68%', day30: '42%' },
    { cohort: 'Week 2', day1: '100%', day7: '72%', day30: '45%' },
    { cohort: 'Week 3', day1: '100%', day7: '70%', day30: '43%' },
    { cohort: 'Week 4', day1: '100%', day7: '75%', day30: '48%' }
  ];

  const userReports = [
    {
      id: 'USR-001',
      age: 28,
      gender: 'Female',
      location: 'NY',
      sessions: 42,
      avgDuration: '9.2m',
      requestsSent: 15,
      canceled: 2,
      completed: 16,
      lastActive: '2 hours ago'
    },
    {
      id: 'USR-002',
      age: 35,
      gender: 'Male',
      location: 'CA',
      sessions: 38,
      avgDuration: '8.5m',
      requestsSent: 12,
      canceled: 1,
      completed: 14,
      lastActive: '5 hours ago'
    },
    {
      id: 'USR-003',
      age: 22,
      gender: 'Female',
      location: 'TX',
      sessions: 55,
      avgDuration: '10.1m',
      requestsSent: 20,
      canceled: 3,
      completed: 18,
      lastActive: '1 hour ago'
    }
  ];

  // Bar chart data for Engagement by Age & Gender
  const barChartData = [
    { age: '18-24', female: 2000, male: 4200 },
    { age: '25-34', female: 2800, male: 3500 },
    { age: '35-44', female: 2200, male: 3000 },
    { age: '45-54', female: 1800, male: 2500 },
    { age: '55-64', female: 1500, male: 2000 }
  ];

  const maxBarValue = 4500;

  // Line chart data for Session Duration Over Time
  const lineChartData = {
    primary: [100, 25, 50, 100, 120, 150, 180, 200],
    secondary: [25, 20, 40, 80, 100, 120, 150, 180],
    months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
  };

  const maxLineValue = 200;

  // Pie chart data for Platform Distribution
  // Normalized percentages: 45 + 17 + 42 = 104, so we normalize to 100%
  const pieChartData = [
    { platform: 'iOS', percentage: 45, displayPercentage: 45, color: '#D0C8FF' },
    { platform: 'Web', percentage: 17, displayPercentage: 17, color: '#B5F0FF' },
    { platform: 'Android', percentage: 42, displayPercentage: 42, color: '#FFD6D6' }
  ];
  
  // Calculate normalized angles for full circle (total = 104%, normalize to 100%)
  const totalPercent = 104;
  const iosAngle = (45 / totalPercent) * 360; // ≈ 155.77°
  const webAngle = (17 / totalPercent) * 360; // ≈ 58.85°
  const androidAngle = (42 / totalPercent) * 360; // ≈ 145.38°

  // Funnel data
  const funnelData = [
    { stage: 'Opened App', value: 24500, width: 100, color: '#B5F0FF' },
    { stage: 'Used Service', value: 20825, width: 80, color: '#E0F4D5' },
    { stage: 'Completed', value: 17150, width: 60, color: '#FFD6D6' },
    { stage: 'Canceled', value: 0, width: 40, color: '#FF6F6F' }
  ];

  const maxFunnelValue = 24500;

  return (
    <div className="engagement-reports-container">
      <AddsHeader activeTab={activeTab} navigationItems={navigationItems} />

      <div className="engagement-reports-main-content">
        <div className="engagement-reports-header">
          <h1 className="engagement-reports-title">User Engagement & Behavior Reports</h1>
          <p className="engagement-reports-subtitle">
            Analyze user activity, engagement trends, and service usage behavior across demographics and territories.
          </p>
        </div>

        {/* Filters Section */}
        <div className="engagement-filters-card">
          <div className="engagement-filters-section">
            <div className="engagement-filters-header">
              {/* <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ marginRight: '0.5rem' }}>
                <path d="M2 4L8 4M8 4L14 4M8 4V2M8 4V6" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M2 8L6 8M6 8L14 8M6 8V6M6 8V10" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M2 12L10 12M10 12L14 12M10 12V10M10 12V14" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round"/>
              </svg> */}
            <img src={completeCancelIcon} alt="Complete and Cancel" className="engagement-icon" />
              <span className="engagement-filters-label">Filters</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ marginLeft: '0.5rem' }}>
                <path d="M3 4.5L6 7.5L9 4.5" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="engagement-filters-row">
              <div className="engagement-filter-select-wrapper">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="engagement-filter-icon">
                  <rect x="2" y="3" width="12" height="10" rx="1" stroke="#6B7280" strokeWidth="1.5"/>
                  <path d="M5 1V5M11 1V5" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                <select className="engagement-filter-select">
                  <option>Sep 13 - Oct 13</option>
                </select>
              </div>
              <select className="engagement-filter-select">
                <option>All Locations</option>
              </select>
              <select className="engagement-filter-select">
                <option>All Ages</option>
              </select>
              <select className="engagement-filter-select">
                <option>All Genders</option>
              </select>
              <select className="engagement-filter-select">
                <option>All Platforms</option>
              </select>
              <button className="engagement-generate-button">Generate Report</button>
            </div>
          </div>
        </div>

        {/* KPI Cards Grid */}
        <div className="engagement-kpi-section-card">
          <div className="engagement-kpi-grid">
            {kpiCards.map(card => (
              <div key={card.id} className="engagement-kpi-card">
                <div className="engagement-kpi-header-row">
                  <div className="engagement-kpi-icon-wrapper">
                    <img src={card.icon} alt={card.title} className="engagement-kpi-icon" />
                  </div>
                  <h3 className="engagement-kpi-title">{card.title}</h3>
                </div>
                <div className="engagement-kpi-content">
                  <h2 
                    className="engagement-kpi-value" 
                    style={{ color: card.iconColor }}
                  >
                    {card.value}
                  </h2>
                  {card.change && (
                    <p className="engagement-kpi-change" style={{ color: 'black' }}>
                      {card.change}
                    </p>
                  )}
                  {card.description && (
                    <p className="engagement-kpi-description">{card.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Charts Row 1 */}
        <div className="engagement-charts-row">
          {/* Bar Chart */}
          <div className="engagement-chart-card-wrapper">
            <div className="engagement-chart-card">
              <h3 className="engagement-chart-title">Engagement by Age & Gender</h3>
              <div className="engagement-bar-chart-container">
                <div className="engagement-bar-chart">
                  <div className="engagement-chart-y-axis">
                    <span>3000</span>
                    <span>2250</span>
                    <span>1500</span>
                    <span>750</span>
                    <span>0</span>
                  </div>
                  <div className="engagement-chart-bars">
                    {barChartData.map((data, index) => (
                      <div key={index} className="engagement-bar-group">
                        <div className="engagement-bar-wrapper">
                          <div 
                            className="engagement-bar engagement-bar-female" 
                            style={{ height: `${(data.female / maxBarValue) * 100}%` }}
                          ></div>
                          <div 
                            className="engagement-bar engagement-bar-male" 
                            style={{ height: `${(data.male / maxBarValue) * 100}%` }}
                          ></div>
                        </div>
                        <span className="engagement-chart-x-label">{data.age}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Line Chart */}
          <div className="engagement-chart-card-wrapper">
            <div className="engagement-chart-card">
              <h3 className="engagement-chart-title">Session Duration Over Time</h3>
              <div className="engagement-line-chart-container">
                <div className="engagement-line-chart">
                  <div className="engagement-chart-y-axis">
                    <span>200K</span>
                    <span>150K</span>
                    <span>100K</span>
                    <span>50K</span>
                    <span>25K</span>
                    <span>0K</span>
                  </div>
                  <div className="engagement-chart-lines">
                    <div className="engagement-line-chart-svg-wrapper">
                      <svg className="engagement-line-chart-svg" viewBox="0 0 400 200" preserveAspectRatio="none">
                        <defs>
                          <linearGradient id="sessionGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#B5F0FF" />
                            <stop offset="100%" stopColor="#B5F0FF" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                        {/* Area fill under primary line */}
                        <path
                          d={`M 0,${200 - (lineChartData.primary[0] / maxLineValue) * 200} L ${57},${200 - (lineChartData.primary[1] / maxLineValue) * 200} L ${114},${200 - (lineChartData.primary[2] / maxLineValue) * 200} L ${171},${200 - (lineChartData.primary[3] / maxLineValue) * 200} L ${228},${200 - (lineChartData.primary[4] / maxLineValue) * 200} L ${285},${200 - (lineChartData.primary[5] / maxLineValue) * 200} L ${342},${200 - (lineChartData.primary[6] / maxLineValue) * 200} L ${400},${200 - (lineChartData.primary[7] / maxLineValue) * 200} L 400,200 L 0,200 Z`}
                          fill="url(#sessionGradient)"
                        />
                        {/* Primary line (solid teal) */}
                        <polyline
                          points={`0,${200 - (lineChartData.primary[0] / maxLineValue) * 200} ${57},${200 - (lineChartData.primary[1] / maxLineValue) * 200} ${114},${200 - (lineChartData.primary[2] / maxLineValue) * 200} ${171},${200 - (lineChartData.primary[3] / maxLineValue) * 200} ${228},${200 - (lineChartData.primary[4] / maxLineValue) * 200} ${285},${200 - (lineChartData.primary[5] / maxLineValue) * 200} ${342},${200 - (lineChartData.primary[6] / maxLineValue) * 200} ${400},${200 - (lineChartData.primary[7] / maxLineValue) * 200}`}
                          fill="none"
                          stroke="#0D90B2"
                          strokeWidth="2.5"
                        />
                        {/* Secondary line (dashed light green/blue) */}
                        <polyline
                          points={`0,${200 - (lineChartData.secondary[0] / maxLineValue) * 200} ${57},${200 - (lineChartData.secondary[1] / maxLineValue) * 200} ${114},${200 - (lineChartData.secondary[2] / maxLineValue) * 200} ${171},${200 - (lineChartData.secondary[3] / maxLineValue) * 200} ${228},${200 - (lineChartData.secondary[4] / maxLineValue) * 200} ${285},${200 - (lineChartData.secondary[5] / maxLineValue) * 200} ${342},${200 - (lineChartData.secondary[6] / maxLineValue) * 200} ${400},${200 - (lineChartData.secondary[7] / maxLineValue) * 200}`}
                          fill="none"
                          stroke="#B5F0FF"
                          strokeWidth="2.5"
                          strokeDasharray="6,4"
                        />
                      </svg>
                    </div>
                    <div className="engagement-chart-x-labels">
                      {lineChartData.months.map((month, index) => (
                        <span key={index}>{month}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Charts Row 2 */}
        <div className="engagement-charts-row">
          {/* Platform Distribution Pie Chart */}
          <div className="engagement-chart-card-wrapper">
            <div className="engagement-chart-card">
              <h3 className="engagement-chart-title">Platform Distribution</h3>
              <div className="engagement-pie-chart-container">
                <div className="engagement-pie-chart">
                  <svg width="200" height="200" viewBox="0 0 200 200">
                    {/* Helper function to create pie slice path */}
                    {(() => {
                      const createSlice = (startAngle, endAngle, radius = 80) => {
                        const start = {
                          x: 100 + radius * Math.cos((startAngle - 90) * Math.PI / 180),
                          y: 100 + radius * Math.sin((startAngle - 90) * Math.PI / 180)
                        };
                        const end = {
                          x: 100 + radius * Math.cos((endAngle - 90) * Math.PI / 180),
                          y: 100 + radius * Math.sin((endAngle - 90) * Math.PI / 180)
                        };
                        const largeArc = endAngle - startAngle > 180 ? 1 : 0;
                        return `M 100,100 L ${start.x},${start.y} A ${radius},${radius} 0 ${largeArc},1 ${end.x},${end.y} Z`;
                      };
                      
                      // Calculate cumulative angles starting from -90° (top)
                      const iosStart = -90;
                      const iosEnd = iosStart + iosAngle;
                      const webStart = iosEnd;
                      const webEnd = webStart + webAngle;
                      const androidStart = webEnd;
                      const androidEnd = androidStart + androidAngle;
                      
                      return (
                        <>
                          {/* iOS: 45% normalized = 155.77° */}
                          <path
                            d={createSlice(iosStart, iosEnd)}
                            fill={pieChartData[0].color}
                          />
                          {/* Web: 17% normalized = 58.85° */}
                          <path
                            d={createSlice(webStart, webEnd)}
                            fill={pieChartData[1].color}
                          />
                          {/* Android: 42% normalized = 145.38° */}
                          <path
                            d={createSlice(androidStart, androidEnd)}
                            fill={pieChartData[2].color}
                          />
                        </>
                      );
                    })()}
                  </svg>
                </div>
                <div className="engagement-pie-legend">
                  {pieChartData.map((item, index) => (
                    <div key={index} className="engagement-pie-legend-item">
                      <div 
                        className="engagement-pie-legend-dot" 
                        style={{ backgroundColor: item.color }}
                      ></div>
                      <span>{item.platform}: {item.displayPercentage}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* User Journey Funnel */}
          <div className="engagement-chart-card-wrapper">
            <div className="engagement-chart-card">
              <h3 className="engagement-chart-title">User Journey Funnel</h3>
              <div className="engagement-funnel-container">
                {funnelData.map((item, index) => (
                  <div key={index} className="engagement-funnel-item">
                    <div className="engagement-funnel-bar-wrapper">
                      <div 
                        className="engagement-funnel-bar" 
                        style={{ 
                          width: `${item.width}%`,
                          backgroundColor: item.color
                        }}
                      >
                        <div className="engagement-funnel-bar-content">
                          <span className="engagement-funnel-stage">{item.stage}</span>
                          <span className="engagement-funnel-value">{item.value.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Cohort Retention Analysis */}
        <div className="engagement-table-section-card">
          <div className="engagement-table-section">
            <div className="engagement-table-header">
              <div>
                <h3 className="engagement-section-title">Cohort Retention Analysis</h3>
                <p className="engagement-section-subtitle">Detailed metrics for all campaigns</p>
              </div>
            </div>
            <div className="engagement-table-container">
              <table className="engagement-table">
                <thead>
                  <tr>
                    <th>Cohort</th>
                    <th>Day 1</th>
                    <th>Day 7</th>
                    <th>Day 30</th>
                  </tr>
                </thead>
                <tbody>
                  {cohortData.map((row, index) => (
                    <tr key={index}>
                      <td>{row.cohort}</td>
                      <td>{row.day1}</td>
                      <td>{row.day7}</td>
                      <td>{row.day30}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="engagement-insight-section" style={{marginTop:20}}>
            <p className="engagement-insight-text">
              <strong>Key Insight:</strong> Average 30-day retention is 43% with Week 4 cohort showing the strongest performance at 48%. Consider analyzing Week 4 onboarding flow for best practices
            </p>
          </div>
          </div>
        </div>

       

        {/* Detailed User Reports */}
        <div className="engagement-table-section-card">
          <div className="engagement-table-section">
            <div className="engagement-table-header">
              <div>
                <h3 className="engagement-section-title">Detailed User Reports</h3>
                <p className="engagement-section-subtitle">Detailed metrics for the User</p>
              </div>
            </div>
            <div className="engagement-table-container">
              <table className="engagement-table">
                <thead>
                  <tr>
                    <th>User ID</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Location</th>
                    <th>Sessions</th>
                    <th>Avg Duration</th>
                    <th>Requests Sent</th>
                    <th>Canceled</th>
                    <th>Completed</th>
                    <th>Last Active</th>
                  </tr>
                </thead>
                <tbody>
                  {userReports.map((user, index) => (
                    <tr key={index}>
                      <td>{user.id}</td>
                      <td>{user.age}</td>
                      <td>{user.gender}</td>
                      <td>{user.location}</td>
                      <td>{user.sessions}</td>
                      <td>{user.avgDuration}</td>
                      <td>{user.requestsSent}</td>
                      <td>{user.canceled}</td>
                      <td>{user.completed}</td>
                      <td>{user.lastActive}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EngagementReports;

