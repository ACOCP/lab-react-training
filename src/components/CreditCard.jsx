import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
  padding: 20px;
`;

const Card = styled.div`
  border-radius: 10px;
  padding: 20px;
  width: 350px; /* Aumentado */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
  gap: 12px;
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
`;

const Logo = styled.div`
  display: flex;
  justify-content: flex-end;

  img {
    height: 30px;
  }
`;

const Number = styled.div`
  font-size: 20px;
  letter-spacing: 2px;
  font-weight: bold;
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 16px;
`;

const Owner = styled.div`
  font-size: 16px;
  font-weight: 500;
`;

const CreditCard = ({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color
}) => {
  const formattedMonth = expirationMonth.toString().padStart(2, '0');
  const formattedYear = expirationYear.toString().slice(-2);
  const maskedNumber = `•••• •••• •••• ${number.slice(-4)}`;

  const cardLogo = type === 'Visa' 
    ? 'https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg' 
    : 'https://upload.wikimedia.org/wikipedia/commons/b/b7/MasterCard_Logo.svg';

  return (
    <Card bgColor={bgColor} color={color}>
      <Logo>
        <img src={cardLogo} alt={type} />
      </Logo>
      <Number>{maskedNumber}</Number>
      <Info>
        <span>Expires {formattedMonth}/{formattedYear}</span>
        <span>{bank}</span>
      </Info>
      <Owner>{owner}</Owner>
    </Card>
  );
};

const CreditCardPage = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Credit Cards</h1>
      <CardContainer>
        <CreditCard
          type="Visa"
          number="0123456789018845"
          expirationMonth={3}
          expirationYear={2021}
          bank="BNP"
          owner="Maxence Bouret"
          bgColor="#11aa99"
          color="white"
        />
        <CreditCard
          type="Master Card"
          number="0123456789010995"
          expirationMonth={3}
          expirationYear={2021}
          bank="N26"
          owner="Maxence Bouret"
          bgColor="#eeeeee"
          color="#222222"
        />
        <CreditCard
          type="Visa"
          number="0123456789016984"
          expirationMonth={12}
          expirationYear={2019}
          bank="Name of the Bank"
          owner="Firstname Lastname"
          bgColor="#ddbb55"
          color="white"
        />
      </CardContainer>
    </div>
  );
};

export default CreditCardPage;


