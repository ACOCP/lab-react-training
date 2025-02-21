import React, { useState } from 'react';
import styled from 'styled-components';
import SingleColorPicker from './SingleColorPicker';

const Container = styled.div`
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 300px;
  margin: 0 auto;
`;

const RGBDisplay = styled.div`
  width: 100%;
  height: 64px;
  border-radius: 4px;
  margin-top: 16px;
`;

export default function RGBColorPicker() {
  const [rValue, setRValue] = useState(0);
  const [gValue, setGValue] = useState(0);
  const [bValue, setBValue] = useState(0);

  return (
    <Container>
      <h1>RGB Color Picker</h1>
      <SingleColorPicker color="r" value={rValue} onChange={setRValue} />
      <SingleColorPicker color="g" value={gValue} onChange={setGValue} />
      <SingleColorPicker color="b" value={bValue} onChange={setBValue} />

      <RGBDisplay 
        style={{ backgroundColor: `rgb(${rValue},${gValue},${bValue})` }}
      ></RGBDisplay>
      <p>RGB({rValue}, {gValue}, {bValue})</p>
    </Container>
  );
}
