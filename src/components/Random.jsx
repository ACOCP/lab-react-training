import React from 'react';

const Random = ({ min, max }) => {
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  return (
    <div style={{ 
      border: '1px solid black', 
      padding: '10px', 
      margin: '10px auto', /* Centraliza horizontalmente */
      fontFamily: 'Arial, sans-serif',
      width: '300px', /* Define uma largura fixa */
      textAlign: 'center', /* Centraliza o texto */
      borderRadius: '8px',
      backgroundColor: '#f9f9f9'
    }}>
      Random value between {min} and {max} =&gt; {randomNumber}
    </div>
  );
};

const RandomPage = () => {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '100vh', 
      textAlign: 'center' 
    }}>
      <h1>Random Numbers</h1>
      <Random min={1} max={6} />
      <Random min={1} max={100} />
    </div>
  );
};

export default RandomPage;
