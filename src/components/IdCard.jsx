import React from 'react';

const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {
  return (
    <div style={{ 
      display: 'flex', 
      border: '1px solid #ccc', 
      borderRadius: '10px', 
      padding: '16px', 
      margin: '16px auto',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
      width: '600px',
      alignItems: 'center',
      backgroundColor: '#f9f9f9'
    }}>
      <img 
        src={picture} 
        alt={`${firstName} ${lastName}`} 
        style={{ 
          width: '150px', 
          height: '200px', 
          objectFit: 'cover', 
          borderRadius: '8px', 
          marginRight: '16px' 
        }} 
      />
      <div>
        <p><strong>First name:</strong> {firstName}</p>
        <p><strong>Last name:</strong> {lastName}</p>
        <p><strong>Gender:</strong> {gender}</p>
        <p><strong>Height:</strong> {(height / 100).toFixed(2)}m</p>
        <p><strong>Birth:</strong> {new Date(birth).toDateString()}</p>
      </div>
    </div>
  );
};

const IdCardPage = () => {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '100vh', 
      textAlign: 'center' 
    }}>
      <h1>Id Cards</h1>
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={180}
        birth="1992-07-14"
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <IdCard
        lastName="Delores"
        firstName="Obrien"
        gender="female"
        height={172}
        birth="1988-05-11"
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
    </div>
  );
};

export default IdCardPage;
