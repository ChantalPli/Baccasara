import { useState, useEffect } from 'react';
import styled from '@emotion/styled';

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const CarouselSlide = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: ${props => (props.active ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
`;

const CarouselImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CarouselButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.3);
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;
  z-index: 2;

  &:hover {
    background: rgba(255, 255, 255, 0.5);
  }

  ${props => props.direction === 'prev' ? 'left: 1rem;' : 'right: 1rem;'}
`;

const CarouselDots = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.5rem;
  z-index: 2;
`;

const Dot = styled.button`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: none;
  background: ${props => props.active ? 'white' : 'rgba(255, 255, 255, 0.5)'};
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background: white;
  }
`;

function Carousel({ images, autoPlayInterval = 5000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [images.length, autoPlayInterval]);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <CarouselContainer>
      {images.map((image, index) => (
        <CarouselSlide key={index} active={index === currentIndex}>
          <CarouselImage src={image.src} alt={image.alt} />
        </CarouselSlide>
      ))}
      <CarouselButton direction="prev" onClick={handlePrevious}>‹</CarouselButton>
      <CarouselButton direction="next" onClick={handleNext}>›</CarouselButton>
      <CarouselDots>
        {images.map((_, index) => (
          <Dot
            key={index}
            active={index === currentIndex}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </CarouselDots>
    </CarouselContainer>
  );
}

export default Carousel; 