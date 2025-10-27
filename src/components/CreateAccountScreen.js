import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProgressIndicator from './ProgressIndicator';
import googleIcon from '../assets/icons/google.png';
import appleIcon from '../assets/icons/apple.png';
import facebookIcon from '../assets/icons/facebook.png';
import './CreateAccountScreen.css';

const CreateAccountScreen = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: 'Johnson@gmail.com',
    phone: '012 345 6788',
    firstName: 'John',
    lastName: 'Doe'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    navigate('/email-verification');
  };

  const handleBack = () => {
    navigate('/signup');
  };

  const handleSocialLogin = (provider) => {
    console.log('Social login:', provider);
  };

  return (
    <div className="create-account-container">
      {/* Left Progress Section */}
      <ProgressIndicator currentStep={2} />

      {/* Right Form Section */}
      <div className="form-section">
        <div className="form-container">
          <div className="form-card">
            {/* Title */}
            <div className="form-title">
              <h1>Create your Account</h1>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="create-account-form">
              {/* Email Field */}
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <div className="input-container">
                  <svg className="input-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M2.5 6.25L10 10.625L17.5 6.25M2.5 6.25L10 2.5L17.5 6.25M2.5 6.25V15C2.5 15.3315 2.6317 15.6495 2.86612 15.8839C3.10054 16.1183 3.41848 16.25 3.75 16.25H16.25C16.5815 16.25 16.8995 16.1183 17.1339 15.8839C17.3683 15.6495 17.5 15.3315 17.5 15V6.25" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              {/* Phone Field */}
              <div className="form-group">
                <label htmlFor="phone">Phone (Optional):</label>
                <div className="input-container">
                  <svg className="input-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M2.5 3.75C2.5 2.50736 3.50736 1.5 4.75 1.5H15.25C16.4926 1.5 17.5 2.50736 17.5 3.75V16.25C17.5 17.4926 16.4926 18.5 15.25 18.5H4.75C3.50736 18.5 2.5 17.4926 2.5 16.25V3.75Z" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8.75 6.25H11.25" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6.25 8.75H13.75" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6.25 11.25H13.75" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              {/* Name Fields */}
              <div className="name-fields">
                <div className="form-group">
                  <label htmlFor="firstName">Full Name:</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name:</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Enter your last name"
                    required
                  />
                </div>
              </div>

              {/* Create Account Button */}
              <button 
              type="submit" 
              className="create-account-button">
                Create Account
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4.16667 10H15.8333M15.8333 10L10.8333 5M15.8333 10L10.8333 15" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              {/* Separator */}
              <div className="separator">
                <div className="separator-line"></div>
                <span className="separator-text">or</span>
                <div className="separator-line"></div>
              </div>

              {/* Social Login Buttons */}
              <div className="social-login">
                <button type="button" className="social-button google" onClick={() => handleSocialLogin('google')}>
                  <img src={googleIcon} alt="Google" width="20" height="20" />
                  Google
                </button>

                <button type="button" className="social-button apple" onClick={() => handleSocialLogin('apple')}>
                  <img src={appleIcon} alt="Apple" width="20" height="20" />
                  Apple
                </button>

                <button type="button" className="social-button facebook" onClick={() => handleSocialLogin('facebook')}>
                  <img src={facebookIcon} alt="Facebook" width="20" height="20" />
                  Facebook
                </button>
              </div>

              {/* Sign In Link */}
              <div className="signin-link">
                Already have an account? <button type="button" className="signin-text">Sign in</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccountScreen;
