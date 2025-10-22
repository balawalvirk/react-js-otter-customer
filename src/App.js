import React, { useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import SignUpScreen from './components/SignUpScreen';
import CreateAccountScreen from './components/CreateAccountScreen';
import EmailVerificationScreen from './components/EmailVerificationScreen';
import PaymentScreen from './components/PaymentScreen';
import AIAssistantScreen from './components/AIAssistantScreen';
import './App.css';

function App() {
  const [currentScreen, setCurrentScreen] = useState('welcome');

  const handleSignUp = () => {
    setCurrentScreen('signup');
  };

  const handleContinue = (role) => {
    console.log('Selected role:', role);
    setCurrentScreen('create-account');
  };

  const handleCreateAccount = (formData) => {
    console.log('Account created:', formData);
    setCurrentScreen('email-verification');
  };

  const handleEmailVerification = (code) => {
    console.log('Email verified with code:', code);
    setCurrentScreen('payment');
  };

  const handlePayment = () => {
    console.log('Payment completed');
    setCurrentScreen('ai-assistant');
  };

  const handleAIComplete = () => {
    console.log('AI setup completed');
    // Here you would typically redirect to dashboard or success page
    alert('Setup completed successfully!');
  };

  const handleBack = () => {
    if (currentScreen === 'signup') {
      setCurrentScreen('welcome');
    } else if (currentScreen === 'create-account') {
      setCurrentScreen('signup');
    } else if (currentScreen === 'email-verification') {
      setCurrentScreen('create-account');
    } else if (currentScreen === 'payment') {
      setCurrentScreen('email-verification');
    } else if (currentScreen === 'ai-assistant') {
      setCurrentScreen('payment');
    }
  };

  return (
    <div className="App">
      {currentScreen === 'welcome' && (
        <WelcomeScreen onSignUp={handleSignUp} />
      )}
      {currentScreen === 'signup' && (
        <SignUpScreen onBack={handleBack} onContinue={handleContinue} />
      )}
      {currentScreen === 'create-account' && (
        <CreateAccountScreen onBack={handleBack} onContinue={handleCreateAccount} />
      )}
      {currentScreen === 'email-verification' && (
        <EmailVerificationScreen onVerify={handleEmailVerification} />
      )}
      {currentScreen === 'payment' && (
        <PaymentScreen onContinue={handlePayment} />
      )}
      {currentScreen === 'ai-assistant' && (
        <AIAssistantScreen onComplete={handleAIComplete} />
      )}
    </div>
  );
}

export default App;
