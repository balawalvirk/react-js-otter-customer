import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingScreen from './components/LandingScreen/landingscreen';
import WelcomeScreen from './components/WelcomeScreen';
import SignUpScreen from './components/SignUpScreen';
import CreateAccountScreen from './components/CreateAccountScreen';
import EmailVerificationScreen from './components/EmailVerificationScreen';
import PaymentScreen from './components/PaymentScreen';
import AIAssistantScreen from './components/AIAssistantScreen';
import HomeScreen from './components/HomeScreen';
import ChatScreen from './components/ChatScreen';
import TrackingScreen from './components/TrackingScreen';
import JobReviewsScreen from './components/JobReviewsScreen';
import ProfileScreen from './components/ProfileScreen';
import HistoryScreen from './components/HistoryScreen';
import LogoutScreen from './components/LogoutScreen';
import CompanyHome from './components/CompanyFlow/CompanyHome/companyHome';
import TechManagement from './components/CompanyFlow/Tech Management/techManagement';
import ContractsEstimates from './components/CompanyFlow/Contracts & Estimates/contractsEstimates';
import Payments from './components/CompanyFlow/Payments/payments';
import CompanyLogoutScreen from './components/CompanyFlow/LogoutScreen/companyLogoutScreen';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingScreen />} />
          <Route path="/welcome" element={<WelcomeScreen />} />
          <Route path="/signup" element={<SignUpScreen />} />
          <Route path="/create-account" element={<CreateAccountScreen />} />
          <Route path="/email-verification" element={<EmailVerificationScreen />} />
          <Route path="/payment" element={<PaymentScreen />} />
          <Route path="/ai-assistant" element={<AIAssistantScreen />} />
          <Route path="/home" element={<HomeScreen />} />
          <Route path="/chat" element={<ChatScreen />} />
          <Route path="/tracking" element={<TrackingScreen />} />
          <Route path="/job-reviews" element={<JobReviewsScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
          <Route path="/history" element={<HistoryScreen />} />
          <Route path="/logout" element={<LogoutScreen />} />
          <Route path="/company-home" element={<CompanyHome />} />
          <Route path="/tech-management" element={<TechManagement />} />
          <Route path="/contracts-estimates" element={<ContractsEstimates />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/company-logout" element={<CompanyLogoutScreen />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;