import React, { useState } from 'react';
import ProgressIndicator from './ProgressIndicator';
import './EmailVerificationScreen.css';

const EmailVerificationScreen = ({ onVerify }) => {
  const [code, setCode] = useState(['', '', '', '']);

  const handleChange = (index, value) => {
    if (!/^\d?$/.test(value)) return;
    const next = [...code];
    next[index] = value;
    setCode(next);
  };

  const handleVerify = (e) => {
    e.preventDefault();
    onVerify(code.join(''));
  };

  return (
    <div className="verify-container">
      <ProgressIndicator currentStep={2} />
      <div className="form-section">
        <div className="verify-card">
          <h1 className="verify-title">Email Verification</h1>
          <p className="verify-sub">We've sent a verification code to:</p>
          <form onSubmit={handleVerify} className="verify-form">
            <div className="code-inputs">
              {code.map((v, i) => (
                <input
                  key={i}
                  value={v}
                  onChange={(e) => handleChange(i, e.target.value)}
                  maxLength={1}
                />
              ))}
            </div>
            <button type="submit" className="verify-button">Verify</button>
          </form>
          <p className="verify-note">If you don't verify your email, you won’t be able to continue with registration</p>
        </div>
      </div>
    </div>
  );
};

export default EmailVerificationScreen;
