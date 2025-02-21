import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const Card = styled.div`
  display: flex;
  align-items: center;
  background-color: #4257b2;
  color: white;
  border-radius: 10px;
  padding: 20px;
  width: 500px;
  margin: 16px 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Image = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  margin-right: 20px;
  object-fit: cover;
`;

const TextContainer = styled.div`
  text-align: left;
`;

const Stars = styled.p`
  font-size: 24px;
  margin: 8px 0;
`;

const DriverCard = ({ name, rating, img, car }) => {
  const roundedRating = Math.round(rating);
  const stars = Array.from({ length: 5 }, (_, index) =>
    index < roundedRating ? '★' : '☆'
  );

  return (
    <Card>
      <Image src={img} alt={name} />
      <TextContainer>
        <h2>{name}</h2>
        <Stars>{stars.join(' ')}</Stars>
        <p>{car.model} - {car.licensePlate}</p>
      </TextContainer>
    </Card>
  );
};

const DriverCardPage = () => {
  return (
    <PageContainer>
      <h1>Driver Cards</h1>
      <DriverCard
        name="Travis Kalanick"
        rating={4.2}
        img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
        car={{ model: 'Toyota Corolla Altis', licensePlate: 'CO42DE' }}
      />
      <DriverCard
        name="Dara Khosrowshahi"
        rating={4.9}
        img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
        car={{ model: 'Audi A3', licensePlate: 'BE33ER' }}
      />
    </PageContainer>
  );
};

export default DriverCardPage;
