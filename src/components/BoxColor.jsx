import React from 'react';

const BoxColor = ({ r, g, b }) => {
  const boxStyle = {
    backgroundColor: `rgb(${r}, ${g}, ${b})`,
    width: '100%',
    height: '200px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    color: '#fff',
    fontSize: '20px',
    border: '1px solid #000',
  };

  return (
    <div style={boxStyle}>
      rgb({r}, {g}, {b})
    </div>
  );
};

const BoxColorPage = () => {
  return (
    <div>
      <h1>Box Colors</h1>
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
    </div>
  );
};

export default BoxColorPage;
