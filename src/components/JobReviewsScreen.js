import React, { useState } from 'react';
import './JobReviewsScreen.css';

const JobReviewsScreen = () => {
  const [review, setReview] = useState('');
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedFile(file);
      console.log('File uploaded:', file.name);
    }
  };

  const handleReject = () => {
    console.log('Estimate rejected');
  };

  const handleAccept = () => {
    console.log('Estimate accepted');
  };

  const handleSubmitReview = () => {
    console.log('Review submitted:', review);
    setReview('');
  };

  return (
    <div className="job-reviews-container">
      {/* Top Navigation */}
      <div className="top-nav">
        <div className="nav-tabs">
          <button className="nav-tab">Home</button>
          <button className="nav-tab">Chat</button>
          <button className="nav-tab">Tracking</button>
          <button className="nav-tab active">Job Reviews</button>
          <button className="nav-tab">History</button>
          <button className="nav-tab">Profile</button>
          <button className="nav-tab">Logout</button>
        </div>
      </div>

      {/* Main Content */}
      <div className="job-reviews-main-content">
        {/* Job Completion Section */}
        <div className="completion-section">
          <h2 className="section-title">Job Completion</h2>
          <div className="upload-area">
            <input
              type="file"
              id="file-upload"
              className="file-input"
              onChange={handleFileUpload}
              accept="image/*"
            />
            <label htmlFor="file-upload" className="upload-label">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14 2V8H20" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 18V12" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 15L12 12L15 15" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </label>
            {uploadedFile && (
              <p className="uploaded-file">Uploaded: {uploadedFile.name}</p>
            )}
          </div>
        </div>

        {/* Estimate Review Section */}
        <div className="estimate-section">
          <h2 className="section-title">Estimate Review</h2>
          <div className="cost-breakdown">
            <div className="cost-row">
              <span className="cost-label">Service Fee</span>
              <span className="cost-value">$50.00</span>
            </div>
            <div className="cost-row">
              <span className="cost-label">Parts Cost</span>
              <span className="cost-value">$120.00</span>
            </div>
            <div className="cost-separator"></div>
            <div className="cost-row total-row">
              <span className="cost-label">Total</span>
              <span className="cost-value">$170.00</span>
            </div>
          </div>
          <p className="payment-note">Payment will be processed after customer acceptance</p>
          <div className="estimate-actions">
            <button className="reject-button" onClick={handleReject}>
              Reject
            </button>
            <button className="accept-button" onClick={handleAccept}>
              Accept
            </button>
          </div>
        </div>

        {/* Customer Review Section */}
        <div className="review-section">
          <h2 className="section-title">Customer Review</h2>
          <div className="rating-display">
            <div className="overall-rating">
              <span className="rating-number">4.5</span>
              <div className="stars">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 1L12.09 5.26L17 6L13.5 9.74L14.18 15L10 12.77L5.82 15L6.5 9.74L3 6L7.91 5.26L10 1Z" fill="#111827"/>
                </svg>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 1L12.09 5.26L17 6L13.5 9.74L14.18 15L10 12.77L5.82 15L6.5 9.74L3 6L7.91 5.26L10 1Z" fill="#111827"/>
                </svg>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 1L12.09 5.26L17 6L13.5 9.74L14.18 15L10 12.77L5.82 15L6.5 9.74L3 6L7.91 5.26L10 1Z" fill="#111827"/>
                </svg>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 1L12.09 5.26L17 6L13.5 9.74L14.18 15L10 12.77L5.82 15L6.5 9.74L3 6L7.91 5.26L10 1Z" fill="#111827"/>
                </svg>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 1L12.09 5.26L17 6L13.5 9.74L14.18 15L10 12.77L5.82 15L6.5 9.74L3 6L7.91 5.26L10 1Z" fill="#111827"/>
                </svg>
              </div>
            </div>
            <div className="rating-distribution">
              <div className="rating-bar">
                <span className="rating-label">5</span>
                <div className="bar-container">
                  <div className="bar" style={{ width: '50%' }}></div>
                </div>
                <span className="rating-percentage">50%</span>
              </div>
              <div className="rating-bar">
                <span className="rating-label">4</span>
                <div className="bar-container">
                  <div className="bar" style={{ width: '30%' }}></div>
                </div>
                <span className="rating-percentage">30%</span>
              </div>
              <div className="rating-bar">
                <span className="rating-label">3</span>
                <div className="bar-container">
                  <div className="bar" style={{ width: '10%' }}></div>
                </div>
                <span className="rating-percentage">10%</span>
              </div>
              <div className="rating-bar">
                <span className="rating-label">2</span>
                <div className="bar-container">
                  <div className="bar" style={{ width: '5%' }}></div>
                </div>
                <span className="rating-percentage">5%</span>
              </div>
              <div className="rating-bar">
                <span className="rating-label">1</span>
                <div className="bar-container">
                  <div className="bar" style={{ width: '5%' }}></div>
                </div>
                <span className="rating-percentage">5%</span>
              </div>
            </div>
          </div>
          <textarea
            value={review}
            onChange={(e) => setReview(e.target.value)}
            placeholder="Leave a review"
            className="review-textarea"
          />
        </div>

        {/* Submit Button */}
        <button className="submit-button" onClick={handleSubmitReview}>
          Submit Review
        </button>
      </div>
    </div>
  );
};

export default JobReviewsScreen;
