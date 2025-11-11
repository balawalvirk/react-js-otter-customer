import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ServiceHeader from '../Header/serviceHeader';
import '../JobAssigned/jobAssigned.css';
import '../Diagnostics/diagnostics.css';
import './complete.css';

const checklistItems = [
  'All work completed as agreed',
  'Work area cleaned and restored',
  'Customer walkthrough completed',
  'All documents provided to customer'
];

const CompleteScreen = () => {
  const navigate = useNavigate();
  const [isCompleted, setIsCompleted] = useState(false);

  const activeTab = 'complete';

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

  const handleCompleteSteps = () => {
    setIsCompleted(true);
  };

  const handleStartNewJob = () => {
    navigate('/service-job-assigned');
  };

  return (
    <div className="service-flow-container complete-screen">
      <ServiceHeader activeTab={activeTab} navigationItems={navigationItems} />

      {!isCompleted ? (
        <section className="complete-panel">
          <div className="diagnostics-section after-photos">
            <header className="section-header">
              <div className="section-header-left">
                {/* <span className="section-icon"> */}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M16 6H18C19.1046 6 20 6.89543 20 8V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V8C4 6.89543 4.89543 6 6 6H8"
                      stroke="#0F172A"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10 4H14L15 6H9L10 4Z"
                      stroke="#0F172A"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle cx="12" cy="13" r="3" stroke="#0F172A" strokeWidth="1.5" />
                  </svg>
                {/* </span> */}
                <div>
                  <h2>After Photos</h2>
                  {/* <p>Capture photos of showing the completed work</p> */}
                </div>
              </div>
            </header>
             <div style={{marginTop:-20}}>
                <p>Capture photos of the issues before start work</p>
               </div>

            <div className="photo-actions">
              <button type="button" className="photo-btn">
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M6.25 6.25H13.75L15 8.125H17.5C18.1904 8.125 18.75 8.68464 18.75 9.375V15.625C18.75 16.3154 18.1904 16.875 17.5 16.875H2.5C1.80964 16.875 1.25 16.3154 1.25 15.625V9.375C1.25 8.68464 1.80964 8.125 2.5 8.125H5L6.25 6.25Z"
                    stroke="#0F172A"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="10" cy="11.875" r="3" stroke="#0F172A" strokeWidth="1.5" />
                </svg>
                <span>Take photos</span>
              </button>
              <button type="button" className="photo-btn">
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M10 13.3333V2.5"
                    stroke="#0F172A"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6.66675 6.25L10.0001 2.91667L13.3334 6.25"
                    stroke="#0F172A"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4.16675 12.5V15.8333C4.16675 16.2754 4.34235 16.6993 4.65491 17.0119C4.96747 17.3244 5.3914 17.5 5.83341 17.5H14.1667C14.6087 17.5 15.0327 17.3244 15.3452 17.0119C15.6578 16.6993 15.8334 16.2754 15.8334 15.8333V12.5"
                    stroke="#0F172A"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Upload Photo</span>
              </button>
            </div>

            <p className="photo-count">0 photo(s) captured</p>
          </div>

          <div className="diagnostics-section checklist">
            <header className="section-header">
              <div className="section-header-left">
                <span className="section-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M13.3334 3.33333L16.6667 6.66667L6.66675 16.6667H3.33341V13.3333L13.3334 3.33333Z"
                      stroke="#6B7280"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <h2 style={{marginTop:-1}}>Diagnostics Checklist</h2>
              </div>
            </header>

            <ul className="checklist-items">
              {checklistItems.map(item => (
                <li key={item} className="checklist-item">
                  <span>{item}</span>
                  <div className="checklist-actions">
                    <button type="button" aria-label={`Edit ${item}`}>
                      <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                        <path
                          d="M13.3334 3.33333L16.6667 6.66667L6.66675 16.6667H3.33341V13.3333L13.3334 3.33333Z"
                          stroke="#6B7280"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                    <button type="button" aria-label={`Remove ${item}`}>
                      <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                        <path d="M5 6H15" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" />
                        <path
                          d="M14.1666 6V15C14.1666 15.442 13.991 15.866 13.6784 16.1785C13.3659 16.4911 12.942 16.6667 12.5 16.6667H7.5C7.05798 16.6667 6.63405 16.4911 6.32149 16.1785C6.00893 15.866 5.83333 15.442 5.83333 15V6M8.33333 6V4.16667C8.33333 3.72464 8.50893 3.30072 8.82149 2.98816C9.13405 2.6756 9.55798 2.5 10 2.5C10.442 2.5 10.866 2.6756 11.1785 2.98816C11.4911 3.30072 11.6667 3.72464 11.6667 4.16667V6"
                          stroke="#6B7280"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="diagnostics-section work-summary">
            <header className="section-header">
              <div className="section-header-left">
                {/* <span className="section-icon"> */}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M6 4H18C19.1046 4 20 4.89543 20 6V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V6C4 4.89543 4.89543 4 6 4Z"
                      stroke="#0F172A"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path d="M8 8H16" stroke="#0F172A" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M8 12H16" stroke="#0F172A" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M8 16H13" stroke="#0F172A" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                {/* </span> */}
                <h2>Work Summary</h2>
              </div>
            </header>

            <textarea
              className="work-summary-textarea"
              placeholder="Summary the work completed, any additional findings, and recommendations for the customer...."
              rows={4}
            />
            <p className="summary-note">This summary will be included in the final job report sent to the customer</p>
          </div>

          <button type="button" className="complete-steps-btn" onClick={handleCompleteSteps}>
            Completed All Steps First
          </button>
          <p className="completion-note">Complete all sections above to finalize the job</p>
        </section>
      ) : (
        <section className="complete-success-card">
          <div className="success-header">
            <span className="success-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <rect x="4" y="4" width="16" height="16" rx="3" stroke="#1E7318" strokeWidth="1.5" />
                <path d="M9 12.5L11 14.5L15 10" stroke="#1E7318" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <h2>Jobs Completed Successfully</h2>
          </div>
          <p className="success-message">
            Great work! The job has been completed and all documentations has been submitted.
          </p>
          <button type="button" className="start-job-btn" onClick={handleStartNewJob}>
            Start New Job
          </button>
        </section>
      )}
    </div>
  );
};

export default CompleteScreen;
