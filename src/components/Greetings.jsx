import React from 'react';

const Greetings = ({ lang, children }) => {
  const getGreeting = (language) => {
    switch (language) {
      case 'de':
        return 'Hallo';
      case 'en':
        return 'Hello';
      case 'es':
        return 'Hola';
      case 'fr':
        return 'Bonjour';
      default:
        return 'Hello';
    }
  };

  return (
    <div style={{ 
      padding: '10px', 
      border: '1px solid black', 
      margin: '10px auto', 
      width: '300px', 
      textAlign: 'center',
      borderRadius: '8px',
      backgroundColor: '#f9f9f9'
    }}>
      <p>{getGreeting(lang)} {children}</p>
    </div>
  );
};

const GreetingsPage = () => {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '100vh', 
      textAlign: 'center' 
    }}>
      <h1>Greetings Page</h1>
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
      <Greetings lang="es">Carlos</Greetings>
      <Greetings lang="en">John</Greetings>
    </div>
  );
};

export default GreetingsPage;
