import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProgressIndicator from './ProgressIndicator';
import './SignUpScreen.css';

const SignUpScreen = () => {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState('customer');

  const handleRoleChange = (role) => {
    setSelectedRole(role);
  };

  const handleContinue = () => {
    navigate('/create-account');
  };

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="signup-container">
      {/* Left Progress Section */}
      <ProgressIndicator currentStep={1} />

      {/* Right Form Section */}
      <div className="form-section">
        <div className="form-container">
          <div className="form-card">
            {/* Title */}
            <div className="signup-title">
              <h1>Sign Up as</h1>
            </div>

            {/* Role Selection */}
            <div className="role-selection">
              <div className="radio-group">
                <label className="radio-option">
                  <input
                    type="radio"
                    name="role"
                    value="customer"
                    checked={selectedRole === 'customer'}
                    onChange={() => handleRoleChange('customer')}
                  />
                  <span className="radio-custom"></span>
                  <span className="radio-label">Customer</span>
                </label>

                <label className="radio-option">
                  <input
                    type="radio"
                    name="role"
                    value="company"
                    checked={selectedRole === 'company'}
                    onChange={() => handleRoleChange('company')}
                  />
                  <span className="radio-custom"></span>
                  <span className="radio-label">Company</span>
                </label>

                <label className="radio-option">
                  <input
                    type="radio"
                    name="role"
                    value="service-tech"
                    checked={selectedRole === 'service-tech'}
                    onChange={() => handleRoleChange('service-tech')}
                  />
                  <span className="radio-custom"></span>
                  <span className="radio-label">Service Tech</span>
                </label>
              </div>
            </div>

            {/* Continue Button */}
            {/* <button type="button" className="continue-button" onClick={handleContinue}>
              Continue
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4.16667 10H15.8333M15.8333 10L10.8333 5M15.8333 10L10.8333 15" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button> */}

            <div className="actions">
						<button className="primary" onClick={handleContinue}>Continue
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4.16667 10H15.8333M15.8333 10L10.8333 5M15.8333 10L10.8333 15" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>

						</button>
					</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpScreen;
