import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  font-family: Arial, sans-serif;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 8px;
  max-width: 500px;
`;

const NumberBox = styled.div`
  padding: 16px;
  text-align: center;
  border: 1px solid black;
  background-color: ${(props) => (props.isEven ? 'red' : 'white')};
  color: black;
  font-weight: bold;
  font-size: 18px;
`;

const NumbersTable = ({ limit }) => {
  const numbers = Array.from({ length: limit }, (_, i) => i + 1);

  return (
    <Grid>
      {numbers.map((number) => (
        <NumberBox key={number} isEven={number % 2 === 0}>
          {number}
        </NumberBox>
      ))}
    </Grid>
  );
};

const Number = () => {
  return (
    <Container>
      <h1>Numbers Table</h1>
      <NumbersTable limit={12} />
    </Container>
  );
};

export default Number;
