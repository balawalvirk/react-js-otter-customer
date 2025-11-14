import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ServiceHeader from '../Header/serviceHeader';
import '../JobAssigned/jobAssigned.css';
import './estimates.css';

const EstimatesScreen = () => {
  const navigate = useNavigate();
  const [laborEntries, setLaborEntries] = useState([
    { hours: 2, rate: 85, total: 170.00 }
  ]);

  const activeTab = 'estimates';

  const navigationItems = [
    { key: 'job-assigned', label: 'Job Assigned', onPress: () => navigate('/service-job-assigned') },
    { key: 'navigation', label: 'Navigation', onPress: () => navigate('/service-navigation') },
    { key: 'arrived', label: 'Arrived', onPress: () => navigate('/service-arrived') },
    { key: 'diagnostics', label: 'Diagnostics', onPress: () => navigate('/service-diagnostics') },
    { key: 'estimates', label: 'Estimates', onPress: () => navigate('/service-estimates') },
    { key: 'approval', label: 'Approval', onPress: () => navigate('/service-approval') },
    { key: 'complete', label: 'Complete', onPress: () => navigate('/service-complete') },
    { key: 'logout', label: 'Logout', onPress: () => navigate('/service-logout') }
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
            {laborEntries.map((entry, index) => {
              const handleHoursChange = (e) => {
                const newHours = parseFloat(e.target.value) || 0;
                const newTotal = newHours * entry.rate;
                const updatedEntries = [...laborEntries];
                updatedEntries[index] = { ...entry, hours: newHours, total: newTotal };
                setLaborEntries(updatedEntries);
              };

              const handleRateChange = (e) => {
                const newRate = parseFloat(e.target.value) || 0;
                const newTotal = entry.hours * newRate;
                const updatedEntries = [...laborEntries];
                updatedEntries[index] = { ...entry, rate: newRate, total: newTotal };
                setLaborEntries(updatedEntries);
              };

              return (
                <div key={index} className="labor-entry">
                  <div className="labor-grid">
                    <div>
                      <label>Labor Hours</label>
                      <input 
                        type="number" 
                        min="0" 
                        step="0.01"
                        value={entry.hours}
                        onChange={handleHoursChange}
                      />
                    </div>
                    <div>
                      <label>Rate($/hr)</label>
                      <input 
                        type="number" 
                        min="0" 
                        step="0.01"
                        value={entry.rate}
                        onChange={handleRateChange}
                      />
                    </div>
                    <div>
                      <label>Labor Total</label>
                      <input 
                        type="text" 
                        value={`$${entry.total.toFixed(2)}`} 
                        readOnly 
                      />
                    </div>
                    {index > 0 ? (
                      <div className="labor-delete-btn-wrapper">
                        <button
                          type="button"
                          className="labor-delete-btn"
                          onClick={() => {
                            const updatedEntries = laborEntries.filter((_, i) => i !== index);
                            setLaborEntries(updatedEntries);
                          }}
                        >
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <path
                              d="M18 6L6 18M6 6L18 18"
                              stroke="#EF4444"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                      </div>
                    ) : (
                      <div className="labor-delete-btn-wrapper"></div>
                    )}
                  </div>
                </div>
              );
            })}
            <button 
              type="button" 
              className="add-labor-entry-btn"
              onClick={() => {
                setLaborEntries([...laborEntries, { hours: 0, rate: 0, total: 0.00 }]);
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 5V19M5 12H19"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Add Another Labor Entry</span>
            </button>
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
