import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<WelcomeScreen />} />
          <Route path="/signup" element={<SignUpScreen />} />
          <Route path="/create-account" element={<CreateAccountScreen />} />
          <Route path="/email-verification" element={<EmailVerificationScreen />} />
          <Route path="/payment" element={<PaymentScreen />} />
          <Route path="/ai-assistant" element={<AIAssistantScreen />} />
          <Route path="/home" element={<HomeScreen />} />
          <Route path="/chat" element={<ChatScreen />} />
          <Route path="/tracking" element={<TrackingScreen />} />
          <Route path="/reviews" element={<JobReviewsScreen />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
