import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/images/Logo.png';
import sideimage from '../../assets/images/side_image.png';
import icon1 from '../../assets/icons/landingscreen/Container (8).png';
import icon2 from '../../assets/icons/landingscreen/Container (9).png';
import icon3 from '../../assets/icons/landingscreen/Container (10).png';
import icon4 from '../../assets/icons/landingscreen/Container (11).png';
import featureIcon1 from '../../assets/icons/landingscreen/Container (14).png';
import featureIcon2 from '../../assets/icons/landingscreen/Container (12).png';
import featureIcon3 from '../../assets/icons/landingscreen/Container (11).png';
import featureIcon4 from '../../assets/icons/landingscreen/Container (13).png';
import frame11Icon from '../../assets/icons/landingscreen/Frame (11).png';
import stepIcon1 from '../../assets/icons/landingscreen/Icon.png';
import stepIcon2 from '../../assets/icons/landingscreen/Icon (1).png';
import stepIcon3 from '../../assets/icons/landingscreen/Icon (3).png';
import groupImage1 from '../../assets/icons/landingscreen/Group 19.png';
import groupImage2 from '../../assets/icons/landingscreen/Group 20.png';
import securityIcon1 from '../../assets/icons/landingscreen/Container (15).png';
import securityIcon2 from '../../assets/icons/landingscreen/Container (16).png';
import securityIcon3 from '../../assets/icons/landingscreen/Container (17).png';
import securityIcon4 from '../../assets/icons/landingscreen/Container (18).png';
import historyIcon1 from '../../assets/icons/landingscreen/Container (23).png';
import historyIcon2 from '../../assets/icons/landingscreen/Container (21).png';
import historyIcon3 from '../../assets/icons/landingscreen/Container (22).png';
import providerIcon1 from '../../assets/icons/landingscreen/Container (14).png';
import providerIcon2 from '../../assets/icons/landingscreen/Container (24).png';
import providerIcon3 from '../../assets/icons/landingscreen/Container (11) 2.png';
import cameraIcon from '../../assets/icons/landingscreen/camera.png';
import googleIcon from '../../assets/icons/google.png';
import appleIcon from '../../assets/icons/apple.png';
import facebookIcon from '../../assets/icons/facebook.png';
import phoneIcon from '../../assets/icons/phone.png';

import './landingscreen.css';

const LandingScreen = () => {
  const navigate = useNavigate();
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    firstName: '',
    lastName: ''
  });

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    navigate('/create-account');
  };

  const handleSocialLogin = (provider) => {
    console.log('Social login:', provider);
    navigate('/create-account');
  };

  const faqs = [
    {
      question: "Do I pay the service company directly?",
      answer: "No, you don't pay the service company directly. Your payment is held securely in Otter's escrow until the job is completed exactly as quoted. This protects both you and the provider."
    },
    {
      question: "What happens if I'm not satisfied with the work?",
      answer: "Our Make-It-Right policy means we'll work with the provider to fix any issues. If they can't resolve it, we'll send another vetted provider, or issue a full refund. You'll be satisfied."
    },
    {
      question: "Are the service providers insured?",
      answer: "Yes, every provider on Otter is thoroughly vetted and carries proper insurance and licensing for their trade. Otter also adds up to $10M in additional coverage to protect every project."
    },
    {
      question: "Is Otter free for users?",
      answer: "Yes, Otter is 100% free for users. There are no hidden fees or charges. You only pay for the services you approve, and payment is held securely until the job is completed."
    },
    {
      question: "Can I see old jobs and invoices?",
      answer: "Yes, every job, invoice, and photo is automatically saved to your Otter account. You can easily search and filter by date, provider, or service type. This creates a permanent record for warranties and property value."
    }
  ];

  return (
    <div className="landing-screen">
      {/* Header/Navigation */}
      <header className="landing-header">
        <div className="header-content">
          <div className="logo-section">
            <img src={logo} alt="Otter Logo" className="header-logo" />
           
          </div>
          <nav className="header-nav">
            <a href="#how-it-works" className="nav-link">How it Works</a>
            <a href="#protection" className="nav-link">Protection</a>
            <a href="#for-providers" className="nav-link">For Providers</a>
            <a href="#faq" className="nav-link">FAQs</a>
          </nav>
          <div className="header-actions">
            <button className="sign-in-btn" onClick={() => navigate('/welcome')}>Sign In</button>
            <button className="get-started-btn" onClick={() => navigate('/create-account')}>Get Started</button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hire service pros<br />
              without getting<br />
              burned.
            </h1>
            <p className="hero-description">
              Otter connects you with fully vetted, insured, top-rated service companies — and we hold your payment until the job is completed exactly as quoted.
            </p>
            <div className="hero-buttons">
              <button className="create-account-btn" onClick={() => navigate('/create-account')}>
                Create My Otter Account
              </button>
              <button className="browse-services-btn">
                Browse Services Near Me
              </button>
            </div>
            <p className="hero-footer-text">100% free for users.</p>
          </div>
          <div className="hero-visual">
            <div className="device-mockup">
              <div className="side-image-wrapper">
                <img src={sideimage} className="side-image" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefit Cards Section */}
      <section className="benefit-cards-section">
        <div className="benefit-cards-scroll-container">
          <div className="benefit-cards-track">
            {/* First set of cards */}
            <div className="benefit-card">
              <div className="benefit-icon-wrapper">
                <img src={icon1} alt="Vetted & Insured" className="benefit-icon-img" />
              </div>
              <div className="benefit-text-wrapper">
                <h3 className="benefit-title">Vetted & Insured</h3>
                <p className="benefit-subtitle">Providers</p>
              </div>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon-wrapper">
                <img src={icon2} alt="Up to $10M" className="benefit-icon-img" />
              </div>
              <div className="benefit-text-wrapper">
                <h3 className="benefit-title">Up to $10M</h3>
                <p className="benefit-subtitle">In Coverage</p>
              </div>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon-wrapper">
                <img src={icon3} alt="Payments Held" className="benefit-icon-img" />
              </div>
              <div className="benefit-text-wrapper">
                <h3 className="benefit-title">Payments Held</h3>
                <p className="benefit-subtitle">Safely in Otter</p>
              </div>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon-wrapper">
                <img src={icon4} alt="All Work Saved" className="benefit-icon-img" />
              </div>
              <div className="benefit-text-wrapper">
                <h3 className="benefit-title">All Work Saved</h3>
                <p className="benefit-subtitle">& Invoices Saved</p>
              </div>
            </div>
            {/* Duplicate set for infinite scroll */}
            <div className="benefit-card">
              <div className="benefit-icon-wrapper">
                <img src={icon1} alt="Vetted & Insured" className="benefit-icon-img" />
              </div>
              <div className="benefit-text-wrapper">
                <h3 className="benefit-title">Vetted & Insured</h3>
                <p className="benefit-subtitle">Providers</p>
              </div>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon-wrapper">
                <img src={icon2} alt="Up to $10M" className="benefit-icon-img" />
              </div>
              <div className="benefit-text-wrapper">
                <h3 className="benefit-title">Up to $10M</h3>
                <p className="benefit-subtitle">In Coverage</p>
              </div>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon-wrapper">
                <img src={icon3} alt="Payments Held" className="benefit-icon-img" />
              </div>
              <div className="benefit-text-wrapper">
                <h3 className="benefit-title">Payments Held</h3>
                <p className="benefit-subtitle">Safely in Otter</p>
              </div>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon-wrapper">
                <img src={icon4} alt="All Work Saved" className="benefit-icon-img" />
              </div>
              <div className="benefit-text-wrapper">
                <h3 className="benefit-title">All Work Saved</h3>
                <p className="benefit-subtitle">& Invoices Saved</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Heading Section */}
      <section className="main-heading-section">
        <h2 className="main-heading">Only the best companies make it onto Otter.</h2>
        <p className="main-description">
          We thoroughly vet every service provider for insurance, service history, expertise, and compliance. If they're on Otter, they've earned it.
        </p>
      </section>

      {/* Feature Grid Section */}
      <section className="feature-grid-section">
        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <img src={featureIcon1} alt="Insurance Verified" className="feature-icon-img" />
            </div>
            <h3 className="feature-title">Insurance Verified</h3>
            <p className="feature-description">Every provider carries proper insurance and licensing for their trade.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <img src={featureIcon2} alt="Proven Track Record" className="feature-icon-img" />
            </div>
            <h3 className="feature-title">Proven Track Record</h3>
            <p className="feature-description">We review service history, customer ratings, and completed projects.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <img src={featureIcon3} alt="Compliance Checked" className="feature-icon-img" />
            </div>
            <h3 className="feature-title">Compliance Checked</h3>
            <p className="feature-description">All local regulations, permits, and certifications are verified.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <img src={featureIcon4} alt="Ongoing Monitoring" className="feature-icon-img" />
            </div>
            <h3 className="feature-title">Ongoing Monitoring</h3>
            <p className="feature-description">We continuously track performance and customer satisfaction.</p>
          </div>
        </div>
      </section>

      {/* Additional Protection Banner */}
      <section className="protection-banner">
        <div className="protection-banner-content">
          <div className="protection-header">
            <div className="protection-icon-wrapper">
              <img src={frame11Icon} alt="Protection" className="protection-icon-img" />
            </div>
            <h3 className="protection-title">Additional Protection Layer</h3>
          </div>
          <p className="protection-text">
            Otter adds up to <span className="highlight-blue">$10M in additional coverage</span> to protect every project.
          </p>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="how-it-works-section">
        <h2 className="section-title">How It Works</h2>
        <p className="section-subtitle">Three simple steps to protect your next home service project</p>
        
        {/* Icons and Connectors Row */}
        <div className="icons-row">
          <div className="step-icon purple">
            <img src={stepIcon1} alt="Step 1" className="step-icon-img" />
          </div>
          <div className="step-connector">
            <img src={groupImage1} alt="Connector" className="connector-image" />
          </div>
          <div className="step-icon blue">
            <img src={stepIcon2} alt="Step 2" className="step-icon-img" />
          </div>
          <div className="step-connector">
            <img src={groupImage2} alt="Connector" className="connector-image" />
          </div>
          <div className="step-icon orange">
            <img src={stepIcon3} alt="Step 3" className="step-icon-img" />
          </div>
        </div>

        {/* Text Content Row */}
        <div className="steps-container">
          <div className="step-item">
            <h3 className="step-title">Tell us what you Need</h3>
            <p className="step-description">Create your free Otter account and submit your service request. We'll connect you with vetted providers who can help.</p>
          </div>
          <div className="step-item">
            <h3 className="step-title">Approve the quote</h3>
            <p className="step-description">Review quotes from providers. Once you approve one, your payment is held securely in Otter's escrow.</p>
          </div>
          <div className="step-item">
            <h3 className="step-title">Job done = money released</h3>
            <p className="step-description">Payment is only released when the job is completed exactly as quoted. No surprises, no games.</p>
          </div>
        </div>
        <p className="steps-footer">
          This protects both sides — <span className="highlight-blue-text">customers and providers.</span>
        </p>
      </section>

      {/* Your Money Stays Safe Section */}
      <section id="protection" className="money-safe-section">
        <h2 className="section-title">Your money stays safe with Otter.</h2>
        <p className="section-subtitle">
          Our escrow system ensures that your payment is protected until the job is completed to your satisfaction.<br />
          No more paying upfront and hoping for the best.
        </p>
        <div className="money-safe-content">
          <div className="security-features">
            <div className="security-feature">
              <div className="security-icon">
                <img src={securityIcon1} alt="Secure Escrow" className="security-icon-img" />
              </div>
              <div className="security-text">
                <h3 className="security-title">Secure Escrow</h3>
                <p className="security-description">Your payment is held in a secure escrow account managed by Otter. The provider can't access it until your approve the completed work.</p>
              </div>
            </div>
            <div className="security-feature">
              <div className="security-icon">
                <img src={securityIcon2} alt="Dispute Resolution" className="security-icon-img" />
              </div>
              <div className="security-text">
                <h3 className="security-title">Dispute Resolution</h3>
                <p className="security-description">If there's an issue, our team steps in to mediate and ensure a fair outcome for both parties.</p>
              </div>
            </div>
            <div className="security-feature">
              <div className="security-icon">
                <img src={securityIcon3} alt="Money-Back Guarantee" className="security-icon-img" />
              </div>
              <div className="security-text">
                <h3 className="security-title">Money-Back Guarantee</h3>
                <p className="security-description">If the job isn't completed as agreed and can't be resolved, you get a full refund, No exceptions.</p>
              </div>
            </div>
            <div className="security-feature">
              <div className="security-icon">
                <img src={securityIcon4} alt="Fair for Everyone" className="security-icon-img" />
              </div>
              <div className="security-text">
                <h3 className="security-title">Fair for Everyone</h3>
                <p className="security-description">Providers get paid fairly when they complete quality work. Customers only pay when satisfied.</p>
              </div>
            </div>
          </div>
          <div className="make-it-right-card">
            <h3 className="card-title">Make-It-Right Policy</h3>
            <div className="policy-list">
              <div className="policy-item">
                <div className="policy-number">1</div>
                <p>We have the company finish the job correctly</p>
              </div>
              <div className="policy-item">
                <div className="policy-number">2</div>
                <p>We send another vetted provider to complete it</p>
              </div>
              <div className="policy-item">
                <div className="policy-number">3</div>
                <p>Or we issue a full refund - your choice</p>
              </div>
            </div>
            <div className="card-footer">
              <p>Otter protects the user and the service provider at the same time</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service History Section */}
      <section className="service-history-section">
        <div className="history-content">
          <div className="history-visual">
            <div className="history-device-mockup">
              <div className="history-screen">
                <div className="history-nav">
                  <button className="history-nav-item">Analytics</button>
                  <button className="history-nav-item">Ad Campaigns</button>
                  <button className="history-nav-item active">Payment</button>
                  <button className="history-nav-item">Engagement Reports</button>
                </div>
                <div className="history-content-area">
                  <h3 className="history-screen-title">Payment</h3>
                  <p className="history-screen-subtitle">Manage your saved payment methods</p>
                  <div className="history-cards">
                    <div className="history-card">
                      <h4>Total Spend</h4>
                      <p className="history-card-value">$24,000</p>
                      <p className="history-card-label">All-time total spend</p>
                    </div>
                    <div className="history-card">
                      <h4>Pending Payments</h4>
                      <p className="history-card-value">$6,200</p>
                      <p className="history-card-label">Awaiting processing</p>
                    </div>
                    <div className="history-card">
                      <h4>Payment Methods</h4>
                      <p className="history-card-value">2</p>
                      <p className="history-card-label">Active cards</p>
                    </div>
                  </div>
                  <div className="history-payment-methods">
                    <h4>Payment Methods</h4>
                    <div className="payment-card-item">
                      <span>Visa...4242</span>
                      <span>(Expires 12/25)</span>
                    </div>
                    <div className="payment-card-item">
                      <span>Mastercard...6866</span>
                      <span>(Expires 06/26)</span>
                    </div>
                    <button className="add-payment-btn">+ Add Payment Method</button>
                  </div>
                  <div className="history-graph-section">
                    <h4>Monthly Spend & Impressions</h4>
                    <p className="graph-placeholder">Track your advertising investment and reach</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="history-text">
            <h2 className="history-title">Your home's entire service history — in one place.</h2>
            <p className="history-description">
              Every job, every invoice, every photo automatically saved to your Otter account. Perfect for proving work was done, tracking warranties, or adding value when you sell.
            </p>
            <div className="history-features">
              <div className="history-feature">
                <div className="history-feature-icon">
                  <img src={historyIcon1} alt="Permanent Record Keeping" className="history-feature-icon-img" />
                </div>
                <div className="history-feature-text">
                  <h3 className="history-feature-title">Permanent Record Keeping</h3>
                  <p>All invoices, quotes, photos, and service details stored forever</p>
                </div>
              </div>
              <div className="history-feature">
                <div className="history-feature-icon">
                  <img src={historyIcon2} alt="Easy Search & Filter" className="history-feature-icon-img" />
                </div>
                <div className="history-feature-text">
                  <h3 className="history-feature-title">Easy Search & Filter</h3>
                  <p>Find any past service in seconds by date, provider, or service type</p>
                </div>
              </div>
              <div className="history-feature">
                <div className="history-feature-icon">
                  <img src={historyIcon3} alt="Increases Property Value" className="history-feature-icon-img" />
                </div>
                <div className="history-feature-text">
                  <h3 className="history-feature-title">Increases Property Value</h3>
                  <p>Show buyers a complete maintenance history when selling your home</p>
                </div>
              </div>
            </div>
            <div className="history-cta-box">
              <p>No more lost invoices. No more 'Who did that repair?' texts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* For Service Companies Section */}
      <section id="for-providers" className="for-providers-section">
        <h2 className="section-title provider-heading">For service companies: get real jobs,<br />guaranteed payment.</h2>
        <p className="section-subtitle provider-subtitle">
          Otter connects you with serious customers who are ready to hire.<br />No more tire kickers or payment disputes.
        </p>
        <div className="provider-cards">
          <div className="provider-card">
            <div className="provider-icon">
              <img src={providerIcon1} alt="Verified Customers" className="provider-icon-img" />
            </div>
            <h3 className="provider-card-title">Verified Customers</h3>
            <p className="provider-card-description">Only work with real customers who have funds ready in escrow</p>
          </div>
          <div className="provider-card">
            <div className="provider-icon">
              <img src={providerIcon2} alt="Guaranteed Payment" className="provider-icon-img" />
            </div>
            <h3 className="provider-card-title">Guaranteed Payment</h3>
            <p className="provider-card-description">Payment is escrowed before work begins. No more chasing invoices.</p>
          </div>
          <div className="provider-card">
            <div className="provider-icon">
              <img src={providerIcon3} alt="Fair Dispute Resolution" className="provider-icon-img" />
            </div>
            <h3 className="provider-card-title">Fair Dispute Resolution</h3>
            <p className="provider-card-description">Neutral mediation protects you from unfair claims</p>
          </div>
          <div className="provider-card">
            <div className="provider-icon">
              <img src={cameraIcon} alt="Portfolio Tracking" className="provider-icon-img" />
            </div>
            <h3 className="provider-card-title">Portfolio Tracking</h3>
            <p className="provider-card-description">All your completed work photos stay attached to your profile</p>
          </div>
        </div>
        <button className="become-provider-btn">Apply to become an Otter provider</button>
      </section>

      {/* Create Account Section */}
      <section id="create-account" className="create-account-section">
        <h2 className="section-title">Ready to protect every job?</h2>
        <p className="section-subtitle">Create your free Otter account in 60 seconds.</p>
        <div className="create-account-container">
          <div className="create-account-card">
            <h3 className="create-account-title">Create your Account</h3>
            <form onSubmit={handleFormSubmit} className="create-account-form">
              {/* Email Field */}
              <div className="form-group">
                <label htmlFor="landing-email">Email:</label>
                <div className="input-container">
                  <svg className="input-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M2.5 6.25L10 10.625L17.5 6.25M2.5 6.25L10 2.5L17.5 6.25M2.5 6.25V15C2.5 15.3315 2.6317 15.6495 2.86612 15.8839C3.10054 16.1183 3.41848 16.25 3.75 16.25H16.25C16.5815 16.25 16.8995 16.1183 17.1339 15.8839C17.3683 15.6495 17.5 15.3315 17.5 15V6.25" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <input
                    type="email"
                    id="landing-email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Johnson@gmail.com"
                    required
                  />
                </div>
              </div>

              {/* Phone Field */}
              <div className="form-group">
                <label htmlFor="landing-phone">Phone (Optional):</label>
                <div className="input-container">
                  <img src={phoneIcon} alt="Phone" className="input-icon" width="20" height="20" />
                  <input
                    type="tel"
                    id="landing-phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="012 345 6788"
                  />
                </div>
              </div>

              {/* Name Fields */}
              <div className="name-fields">
                <div className="form-group">
                  <label htmlFor="landing-firstName">Full Name:</label>
                  <input
                    type="text"
                    id="landing-firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="landing-lastName">Last Name:</label>
                  <input
                    type="text"
                    id="landing-lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Enter your last name"
                    required
                  />
                </div>
              </div>

              {/* Create Account Button */}
              <button type="submit" className="create-account-button">
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
                Already have an account? <button type="button" className="signin-text" onClick={() => navigate('/welcome')}>Sign in</button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="faq-section">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <p className="section-subtitle">Everything you need to know about using Otter</p>
        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button 
                className={`faq-question ${expandedFaq === index ? 'expanded' : ''}`}
                onClick={() => toggleFaq(index)}
              >
                <span>{faq.question}</span>
                <svg 
                  className={`faq-chevron ${expandedFaq === index ? 'expanded' : ''}`}
                  width="20" height="20" viewBox="0 0 20 20" fill="none"
                >
                  <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              {expandedFaq === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="landing-footer">
        <div className="footer-content">
          <div className="footer-left">
            <div className="footer-logo">
              <img src={logo} alt="Otter Logo" className="footer-logo-img" />
            </div>
            <p className="footer-tagline">
              The trusted marketplace<br />for vetted service professionals<br />with built-in payment protection.
            </p>
          </div>
          <div className="footer-right">
            <div className="footer-column">
              <h4 className="footer-column-title">Platform</h4>
              <a href="#how-it-works" className="footer-link">How it works</a>
              <a href="#protection" className="footer-link">Payment Protection</a>
              <a href="#for-providers" className="footer-link">Become a Provider</a>
            </div>
            <div className="footer-column">
              <h4 className="footer-column-title">Support</h4>
              <a href="#faq" className="footer-link">FAQ</a>
              <a href="#" className="footer-link">Contact Support</a>
              <a href="#" className="footer-link">Help Center</a>
            </div>
            <div className="footer-column">
              <h4 className="footer-column-title">Legal</h4>
              <a href="#" className="footer-link">Terms of Service</a>
              <a href="#" className="footer-link">Privacy Policy</a>
              <a href="#" className="footer-link">About Otter</a>
            </div>
          </div>
        </div>
        <div className="footer-divider"></div>
        <div className="footer-bottom">
          <p className="footer-disclaimer">
            Otter is a trusted marketplace connecting users with vetted, insured service professionals. All payments are held by Otter until completion to protect both sides.
          </p>
          <p className="footer-copyright">© 2025 Otter. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingScreen;

