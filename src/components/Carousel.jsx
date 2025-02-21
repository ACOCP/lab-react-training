import React, { useState } from 'react';
import styled from 'styled-components';

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
`;

const ImageWrapper = styled.div`
  overflow: hidden;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 200px;
  margin: 0 auto;
`;

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;

const Button = styled.button`
  background-color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 9999px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  &:hover {
    background-color: #f3f4f6;
  }
`;

const Carousel = ({ images = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (images.length === 0) {
    return <div>No images to display</div>;
  }

  const goToPrevious = () => {
    const isFirstImage = currentIndex === 0;
    const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastImage = currentIndex === images.length - 1;
    const newIndex = isLastImage ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <CarouselContainer>
      <ImageWrapper>
        <StyledImage
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
        />
      </ImageWrapper>
      <ButtonContainer>
        <Button onClick={goToPrevious}>Previous</Button>
        <Button onClick={goToNext}>Next</Button>
      </ButtonContainer>
    </CarouselContainer>
  );
};

const CarouselPage = () => {
  return (
    <div>
      <h1>Image Carousel</h1>
      <Carousel
        images={[
          'https://randomuser.me/api/portraits/women/1.jpg',
          'https://randomuser.me/api/portraits/men/1.jpg',
          'https://randomuser.me/api/portraits/women/2.jpg',
          'https://randomuser.me/api/portraits/men/2.jpg'
        ]}
      />
    </div>
  );
};

export default CarouselPage;

