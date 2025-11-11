import React from 'react';
import { useNavigate } from 'react-router-dom';
import ServiceHeader from '../Header/serviceHeader';
import '../JobAssigned/jobAssigned.css';
import './estimates.css';

const EstimatesScreen = () => {
  const navigate = useNavigate();

  const activeTab = 'estimates';

  const navigationItems = [
    { key: 'job-assigned', label: 'Job Assigned', onPress: () => navigate('/service-job-assigned') },
    { key: 'navigation', label: 'Navigation', onPress: () => navigate('/service-navigation') },
    { key: 'arrived', label: 'Arrived', onPress: () => navigate('/service-arrived') },
    { key: 'diagnostics', label: 'Diagnostics', onPress: () => navigate('/service-diagnostics') },
    { key: 'estimates', label: 'Estimates', onPress: () => navigate('/service-estimates') },
    { key: 'approval', label: 'Approval', onPress: () => navigate('/service-approval') },
    { key: 'complete', label: 'Complete', onPress: () => navigate('/service-complete') },
    { key: 'logout', label: 'Logout', onPress: () => navigate('/logout') }
  ];

  return (
    <div className="service-flow-container estimates-screen">
      <ServiceHeader activeTab={activeTab} navigationItems={navigationItems} />

      <section className="estimates-panel">
        <header className="estimates-header">
          <span className="header-icon">
            <img src={require('../../../assets/icons/doller.png')} alt="Dollar" width={24} height={24} />
          </span>
          <h1>Create Estimates</h1>
        </header>

        <div className="estimate-items">
          <div className="items-row headers">
            <label>Description</label>
            <label>Qty</label>
            <label>
              Price/unit <span className="currency-icon"> ( € )</span>
            </label>
            <label>Total</label>
          </div>
          <div className="items-row inputs">
            <input type="text" placeholder="Describe the services provided..." />
            <input type="number" min="0" defaultValue="1" />
            <input type="number" min="0" defaultValue="0" />
            <div className="item-total">$0.00</div>
          </div>
          <button type="button" className="add-item-btn">
            <span className="plus-icon">+</span>
            <span>Add item</span>
          </button>
        </div>

        <div className="upload-dropzone">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 16V4"
              stroke="#0F172A"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8 7.99997L12 3.99997L16 7.99997"
              stroke="#0F172A"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5 12V18C5 19.1046 5.89543 20 7 20H17C18.1046 20 19 19.1046 19 18V12"
              stroke="#0F172A"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p>Upload Estimate File</p>
        </div>

        <div className="estimate-form">
          <div className="labor-section">
            <h2>Labor</h2>
            <div className="labor-grid">
              <div>
                <label>Hours</label>
                <input type="number" min="0" defaultValue="2" />
              </div>
              <div>
                <label>Rate ($/hr)</label>
                <input type="number" min="0" defaultValue="85" />
              </div>
              <div>
                <label>Labor Total</label>
                <input type="text" value="$170.00" readOnly />
              </div>
            </div>
          </div>

          <div className="tax-section">
            <h2>Tax</h2>
            <div className="tax-grid">
              <div>
                <label>Tax Rate</label>
                <input type="number" min="0" defaultValue="2" />
              </div>
              <div>
                <label>Tax Rate</label>
                <input type="number" min="0" defaultValue="2" />
              </div>
            </div>
          </div>

          <div className="estimate-summary">
            <div className="summary-row">
              <span>Subtotal :</span>
              <span>$170.00</span>
            </div>
            <div className="summary-row">
              <span>Tax :</span>
              <span>$14.45</span>
            </div>
            <div className="summary-row total">
              <span>Subtotal :</span>
              <span>$184.00</span>
            </div>
          </div>

          <div className="additional-text">
            <label>Additional Text</label>
            <textarea placeholder="Any additional notes for the customer...." rows={3} />
          </div>
        </div>

        <button type="button" className="create-estimate-btn">
          Create Estimate
        </button>
      </section>
    </div>
  );
};

export default EstimatesScreen;
