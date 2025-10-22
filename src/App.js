import React, { useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import SignUpScreen from './components/SignUpScreen';
import CreateAccountScreen from './components/CreateAccountScreen';
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
    // Here you would typically navigate to the next step
    // For now, we'll just log the data
  };

  const handleBack = () => {
    if (currentScreen === 'signup') {
      setCurrentScreen('welcome');
    } else if (currentScreen === 'create-account') {
      setCurrentScreen('signup');
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
    </div>
  );
}

export default App;
