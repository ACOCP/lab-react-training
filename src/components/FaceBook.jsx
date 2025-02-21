import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const ProfileGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
`;

const ProfileCard = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  padding: 16px;
  border-radius: 8px;
  background-color: ${props => (props.highlight ? '#cce7ff' : '#fff')};
`;

const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 16px;
`;

const ProfileDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ProfileInfo = styled.p`
  margin: 4px 0;
  font-size: 16px;
  color: #333;

  & span {
    font-weight: bold;
  }
`;

const CountryButton = styled.button`
  font-size: 14px;
  margin: 4px;
  padding: 6px 12px;
  border: none;
  border-radius: 6px;
  background-color: ${props => (props.active ? '#007BFF' : '#ccc')};
  color: white;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  justify-content: center;
  margin-bottom: 16px;
`;

const FaceBook = () => {
  const [profiles, setProfiles] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');

  useEffect(() => {
    fetch('/data/berlin.json')
      .then(response => response.json())
      .then(data => setProfiles(data))
      .catch(error => console.error('Error fetching profiles:', error));
  }, []);

  const countries = [...new Set(profiles.map(profile => profile.country))];

  return (
    <div>
      <ButtonContainer>
        {countries.map(country => (
          <CountryButton
            key={country}
            active={selectedCountry === country}
            onClick={() => setSelectedCountry(country)}
          >
            {country}
          </CountryButton>
        ))}
      </ButtonContainer>

      <ProfileGrid>
        {profiles.map((profile, index) => (
          <ProfileCard 
            key={index} 
            highlight={selectedCountry === profile.country}
          >
            <ProfileImage 
              src={profile.img} 
              alt={`${profile.firstName} ${profile.lastName}`} 
            />
            <ProfileDetails>
              <ProfileInfo><span>First name:</span> {profile.firstName}</ProfileInfo>
              <ProfileInfo><span>Last name:</span> {profile.lastName}</ProfileInfo>
              <ProfileInfo><span>Country:</span> {profile.country}</ProfileInfo>
              <ProfileInfo><span>Type:</span> {profile.isStudent ? 'Student' : 'Teacher'}</ProfileInfo>
            </ProfileDetails>
          </ProfileCard>
        ))}
      </ProfileGrid>
    </div>
  );
};

export default FaceBook;
