import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AddsHeader from '../addsHeader';
import dollarIcon from '../../../assets/icons/Container (32).png';
import clockIcon from '../../../assets/icons/Container (34).png';
import revenueIcon from '../../../assets/icons/revenue.png';
import atmIcon from '../../../assets/icons/atm.png';
import './payment.css';

const Payment = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('payments');

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

  const summaryCards = [
    {
      id: 1,
      title: 'Total Spend',
      value: '$24,000',
      valueColor: '#10B981',
      label: 'All-time ad spend',
      icon: dollarIcon
    },
    {
      id: 2,
      title: 'Pending Payments',
      value: '$6,200',
      valueColor: '#EF4444',
      label: 'Awaiting processing',
      icon: clockIcon
    },
    {
      id: 3,
      title: 'Payment Methods',
      value: '2',
      valueColor: '#F97316',
      label: 'Active cards',
      icon: revenueIcon
    }
  ];

  const paymentMethods = [
    {
      id: 1,
      type: 'Visa',
      number: '4242',
      expires: '12/25',
      isDefault: true
    },
    {
      id: 2,
      type: 'Mastercard',
      number: '8888',
      expires: '09/26',
      isDefault: false
    }
  ];

  const invoices = [
    {
      id: 1,
      campaignName: 'Summer Promotion 2024',
      startDate: '2024-06-01',
      endDate: '2024-08-31',
      totalSpend: '$2,855',
      status: 'Open',
      statusColor: '#10B981'
    },
    {
      id: 2,
      campaignName: 'Holiday Sale Campaign',
      startDate: '2024-11-15',
      endDate: '2024-12-31',
      totalSpend: '$27.09',
      status: 'Pending',
      statusColor: '#F59E0B'
    },
    {
      id: 3,
      campaignName: 'Spring Launch',
      startDate: '2024-03-01',
      endDate: '2024-05-31',
      totalSpend: '$5,700',
      status: 'Suspended',
      statusColor: '#EF4444'
    },
    {
      id: 4,
      campaignName: 'New Product Awareness',
      startDate: '2024-07-16',
      endDate: '2024-09-30',
      totalSpend: '$45,907',
      status: 'Open',
      statusColor: '#10B981'
    },
    {
      id: 5,
      campaignName: 'Back to School',
      startDate: '2024-08-01',
      endDate: '2024-09-15',
      totalSpend: '$45,00',
      status: 'Open',
      statusColor: '#10B981'
    }
  ];

  // Chart data for Monthly Spend & Impressions
  const chartData = {
    spend: [0, 20, 50, 100, 150, 200, 180, 190, 200, 200],
    impressions: [0, 15, 40, 80, 120, 160, 140, 150, 160, 160],
    months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct']
  };

  // Calculate SVG path for lines
  const getPath = (values, maxValue, width, height) => {
    const points = values.map((value, index) => {
      const x = (index / (values.length - 1)) * width;
      const y = height - (value / maxValue) * height;
      return `${x},${y}`;
    });
    return points.join(' ');
  };

  // Calculate area fill path
  const getAreaPath = (values, maxValue, width, height) => {
    const points = values.map((value, index) => {
      const x = (index / (values.length - 1)) * width;
      const y = height - (value / maxValue) * height;
      return `${x},${y}`;
    });
    return `M 0,${height} L ${points.join(' L ')} L ${width},${height} Z`;
  };

  const maxValue = 800;
  const chartWidth = 800;
  const chartHeight = 200;

  const spendPath = getPath(chartData.spend, maxValue, chartWidth, chartHeight);
  const impressionsPath = getPath(chartData.impressions, maxValue, chartWidth, chartHeight);
  const spendAreaPath = getAreaPath(chartData.spend, maxValue, chartWidth, chartHeight);

  return (
    <div className="payment-container">
      <AddsHeader activeTab={activeTab} navigationItems={navigationItems} />

      <div className="payment-main-content">
        <div className="payment-header">
          <h1 className="payment-title">Payment</h1>
          <p className="payment-subtitle">Manage your saved payment methods</p>
        </div>

        <div className="payment-content-card">
          {/* Summary Cards */}
          <div className="payment-summary-grid">
            {summaryCards.map(card => (
              <div key={card.id} className="payment-summary-card">
                <div className="payment-summary-header">
                  <img src={card.icon} alt={card.title} className="payment-summary-icon" />
                  <h3 className="payment-summary-title">{card.title}</h3>
                </div>
                <div className="payment-summary-content">
                  <h2 className="payment-summary-value" style={{ color: card.valueColor }}>
                    {card.value}
                  </h2>
                  <p className="payment-summary-label">{card.label}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Payment Methods Section */}
          <div className="payment-methods-section">
            <div className="payment-methods-header">
              <div>
                <h3 className="payment-section-title">Payment Methods</h3>
                <p className="payment-section-subtitle">Manage your saved payment methods</p>
              </div>
              <button className="payment-add-button">
                + Add Payment Method
              </button>
            </div>
            <div className="payment-methods-grid">
              {paymentMethods.map(method => (
                <div key={method.id} className="payment-method-card">
                  <div className="payment-method-icon-wrapper">
                    {/* <img src={cardIcon} alt={method.type} className="payment-method-icon" /> */}
                     <img src={atmIcon} style={{width:30,height:30}}/>
                  </div>
                  <div className="payment-method-info">
                    <div className="payment-method-type">{method.type} .... {method.number}</div>
                    <div className="payment-method-expires">Expires {method.expires}</div>
                    {method.isDefault && (
                      <span className="payment-method-default" style={{marginLeft:-30}}>Default</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Monthly Spend & Impressions Chart */}
          <div className="payment-chart-section">
            <div className="payment-chart-header">
              <div>
                <h3 className="payment-section-title">Monthly Spend & Impressions</h3>
                <p className="payment-section-subtitle">Track your advertising investment and reach</p>
              </div>
              {/* <div className="payment-chart-legend">
                <div className="payment-legend-item">
                  <div className="payment-legend-line payment-legend-line-solid"></div>
                  <span>Spend</span>
                </div>
                <div className="payment-legend-item">
                  <div className="payment-legend-line payment-legend-line-dashed"></div>
                  <span>Impressions</span>
                </div>
              </div> */}
            </div>
            <div className="payment-line-chart-container">
              <div className="payment-line-chart">
                <div className="payment-chart-y-axis">
                  <span>800K</span>
                  <span>200K</span>
                  <span>150K</span>
                  <span>100K</span>
                  <span>50K</span>
                  <span>20K</span>
                  <span>0K</span>
                </div>
                <div className="payment-chart-lines">
                  <div className="payment-line-chart-svg-wrapper">
                    <svg className="payment-line-chart-svg" viewBox={`0 0 ${chartWidth} ${chartHeight}`} preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="spendGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#B5F0FF" />
                          <stop offset="100%" stopColor="#BBF49C" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      {/* Area fill under Spend line */}
                      <path
                        d={spendAreaPath}
                        fill="url(#spendGradient)"
                      />
                      {/* Spend line (solid teal) */}
                      <polyline
                        points={spendPath}
                        fill="none"
                        stroke="#0D90B2"
                        strokeWidth="2.5"
                      />
                      {/* Impressions line (dashed light green) */}
                      <polyline
                        points={impressionsPath}
                        fill="none"
                        stroke="#10B981"
                        strokeWidth="2.5"
                        strokeDasharray="6,4"
                      />
                    </svg>
                  </div>
                  <div className="payment-chart-x-labels">
                    {chartData.months.map((month, index) => (
                      <span key={index}>{month}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Invoices & Receipts Table */}
          <div className="payment-invoices-section">
            <div className="payment-invoices-header">
              <div>
                <h3 className="payment-section-title">Invoices & Receipts</h3>
                <p className="payment-section-subtitle">View your payment history</p>
              </div>
            </div>
            <div className="payment-table-container">
              <table className="payment-table">
                <thead>
                  <tr>
                    <th>Campaign Name</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Total Spend</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {invoices.map((invoice) => (
                    <tr key={invoice.id}>
                      <td>{invoice.campaignName}</td>
                      <td>{invoice.startDate}</td>
                      <td>{invoice.endDate}</td>
                      <td>{invoice.totalSpend}</td>
                      <td>
                        <span 
                          className="payment-status-badge" 
                          style={{ 
                            backgroundColor: invoice.statusColor,
                            color: invoice.status === 'Pending' ? '#111827' : 'white'
                          }}
                        >
                          {invoice.status}
                        </span>
                      </td>
                      <td>-</td>
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

export default Payment;

