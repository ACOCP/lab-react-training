import React from 'react';
import styled from 'styled-components';

const RatingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  font-size: 30px;
  margin: 10px 0;
`;

const PageContainer = styled.div`
  text-align: center;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const Rating = ({ children }) => {
  const rating = Math.round(children);
  const stars = Array.from({ length: 5 }, (_, index) =>
    index < rating ? '★' : '☆'
  );

  return (
    <RatingContainer>
      {stars.map((star, index) => (
        <span key={index}>{star}</span>
      ))}
    </RatingContainer>
  );
};

const RatingPage = () => {
  return (
    <PageContainer>
      <h1>Ratings</h1>
      <h3>Rating: <Rating>3.9</Rating></h3>
      <h3>Rating: <Rating>2.5</Rating></h3>
      <h3>Rating: <Rating>4</Rating></h3>
      <h3>Rating: <Rating>0</Rating></h3>
    </PageContainer>
  );
};

export default RatingPage;
