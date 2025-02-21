import React from 'react';
import styled from 'styled-components';

const ColorSquare = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 4px;
`;

const Input = styled.input`
  border: 1px solid #ccc;
  padding: 8px;
  border-radius: 4px;
  width: 60px;
  text-align: center;
`;

const Label = styled.label`
  margin-left: 8px;
`;

export default function SingleColorPicker({ color, value, onChange }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
      <ColorSquare 
        style={{ backgroundColor: color === 'r' ? `rgb(${value},0,0)` : color === 'g' ? `rgb(0,${value},0)` : `rgb(0,0,${value})` }}
      />
      <Label>{color.toUpperCase()}:</Label>
      <Input
        type="number"
        min="0"
        max="255"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      />
    </div>
  );
}