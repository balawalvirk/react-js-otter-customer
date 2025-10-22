import React from 'react';
import './ProgressIndicator.css';

const ProgressIndicator = ({ currentStep = 1 }) => {
  const steps = [
   
    {
      id: 1,
      title: 'Sign Up',
      description: 'Please provide your name and'
    },
    {
      id: 2,
      title: 'Email Verification',
      description: 'Please verify your Email'
    },
    {
      id: 3,
      title: 'Payment',
      description: 'Please provide your payment information'
    },
    {
      id: 4,
      title: 'AI Assistant',
      description: 'Choose AI Assistant preferences'
    }
  ];

  return (
    <div className="progress-section">
      <div className="progress-steps">
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            <div className={`step ${step.id <= currentStep ? 'completed' : ''} ${step.id === currentStep ? 'current' : ''}`}>
              <div className="step-circle">
                {step.id < currentStep  ? (
                  <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                    <path d="M1 4.5L4 7.5L11 1.5" stroke="#0D90B2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
              
                ) :  currentStep === step.id ? (
                  <div className="current-inner-circle-fill">
                    <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
                      <path d="M1 6L5 10L15 1" stroke="#0D90B2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                ) :  <div className="current-inner-circle"></div>}
              </div>
              <div className="step-content">
                <div className="step-title">{step.title}</div>
                <div className="step-description">{step.description}</div>
              </div>
            </div>
            {index < steps.length - 1 && <div className="step-line"></div>}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ProgressIndicator;
