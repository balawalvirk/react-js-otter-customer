import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/images/Logo.png';
import ProgressIndicator from './ProgressIndicator';
import './WelcomeScreen.css';

const WelcomeScreen = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', { email, password });
    
    // Check if it's a company login
    if (email === 'company@gmail.com' && password === '123456') {
      navigate('/company-home');
    } else if (email === 'service@gmail.com' && password === '123456') {
      navigate('/service-job-assigned');
    } else if (email === 'admin@gmail.com' && password === '123456') {
      navigate('/admin-home');
    } else {
      navigate('/home');
    }
  };

  const handleSignUpClick = () => {
    navigate('/signup');
  };

  return (
    <div className="welcome-container">
      {/* Left Progress Section */}
      <ProgressIndicator currentStep={1} />

      {/* Right Form Section */}
      <div className="form-section">
        <div className="form-container">
          <div className="form-card">
            {/* Logo */}
            <div className="logo-container">
              <img src={logo} alt="Otter Logo" className="logo" />
            </div>

            {/* Welcome Message */}
            <div className="welcome-message">
              <h1>Welcome to Otter.</h1>
              <p>Your AI-powered service marketplace. Get help with home repairs, maintenance, and more.</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="welcome-form">
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <div className="input-container">
                  <svg className="input-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M2.5 6.25L10 10.625L17.5 6.25M2.5 6.25L10 2.5L17.5 6.25M2.5 6.25V15C2.5 15.3315 2.6317 15.6495 2.86612 15.8839C3.10054 16.1183 3.41848 16.25 3.75 16.25H16.25C16.5815 16.25 16.8995 16.1183 17.1339 15.8839C17.3683 15.6495 17.5 15.3315 17.5 15V6.25" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Johnson@gmail.com"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <div className="input-container">
                  <svg className="input-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M15.8333 9.16667H4.16667C3.24619 9.16667 2.5 9.91286 2.5 10.8333V16.6667C2.5 17.5871 3.24619 18.3333 4.16667 18.3333H15.8333C16.7538 18.3333 17.5 17.5871 17.5 16.6667V10.8333C17.5 9.91286 16.7538 9.16667 15.8333 9.16667Z" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5.83333 9.16667V5.83333C5.83333 4.72826 6.27232 3.66847 7.05372 2.88707C7.83512 2.10567 8.89491 1.66667 10 1.66667C11.1051 1.66667 12.1649 2.10567 12.9463 2.88707C13.7277 3.66847 14.1667 4.72826 14.1667 5.83333V9.16667" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    required
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M10 3.75C3.75 3.75 1.25 10 1.25 10C1.25 10 3.75 16.25 10 16.25C16.25 16.25 18.75 10 18.75 10C18.75 10 16.25 3.75 10 3.75Z" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="10" cy="10" r="2.5" stroke="#9CA3AF" strokeWidth="1.5"/>
                    </svg>
                  </button>
                </div>
              </div>

              <div className="forgot-password">
                <button type="button" className="forgot-link">Forgot Password?</button>
              </div>

              <button type="submit" className="signup-button">
                Sign In
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4.16667 10H15.8333M15.8333 10L10.8333 5M15.8333 10L10.8333 15" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              <div className="signin-link">
                Don't have an account? <button type="button" className="signin-text" onClick={handleSignUpClick}>Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
