import styled from '@emotion/styled';
import { useState } from 'react';
import photo1 from '../assets/photo1.JPG';
import photo2 from '../assets/photo2.jpg';
import photo3 from '../assets/photo3.jpg';
import photo4 from '../assets/photo4.jpg';
import photo5 from '../assets/photo5.jpg';
import photo6 from '../assets/photo6.jpg';
import photo8 from '../assets/photo8.jpg';
import photo9 from '../assets/photo9.jpg';

const PageContainer = styled.div`
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #2B5592;
  margin-bottom: 2rem;
  text-align: center;
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const GalleryItem = styled.div`
  position: relative;
  aspect-ratio: 1;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: scale(1.02);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  
  img {
    max-width: 100%;
    max-height: 90vh;
    object-fit: contain;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: -40px;
  right: 0;
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  padding: 0.5rem;
  
  &:hover {
    color: #ddd;
  }
`;

const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.1);
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  padding: 1rem;
  border-radius: 50%;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  ${props => props.direction === 'prev' ? 'left: 1rem;' : 'right: 1rem;'}
`;

function Galleria() {
  const [selectedImage, setSelectedImage] = useState(null);
  
  const images = [
    { src: photo1, alt: 'Vista del terreno 1' },
    { src: photo2, alt: 'Vista del terreno 2' },
    { src: photo3, alt: 'Vista del terreno 3' },
    { src: photo4, alt: 'Vista del terreno 4' },
    { src: photo5, alt: 'Vista del terreno 5' },
    { src: photo6, alt: 'Vista del terreno 6' },
    { src: photo8, alt: 'Vista del terreno 8' },
    { src: photo9, alt: 'Vista del terreno 9' }
  ];

  const handleNext = (e) => {
    e.stopPropagation();
    const currentIndex = images.findIndex(img => img.src === selectedImage);
    const nextIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[nextIndex].src);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    const currentIndex = images.findIndex(img => img.src === selectedImage);
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[prevIndex].src);
  };

  return (
    <PageContainer>
      <Title>Galleria</Title>
      <GalleryGrid>
        {images.map((image, index) => (
          <GalleryItem key={index} onClick={() => setSelectedImage(image.src)}>
            <img src={image.src} alt={image.alt} loading="lazy" />
          </GalleryItem>
        ))}
      </GalleryGrid>

      {selectedImage && (
        <Modal onClick={() => setSelectedImage(null)}>
          <ModalContent onClick={e => e.stopPropagation()}>
            <CloseButton onClick={() => setSelectedImage(null)}>×</CloseButton>
            <NavigationButton direction="prev" onClick={handlePrev}>‹</NavigationButton>
            <img src={selectedImage} alt="Vista ingrandita del terreno" />
            <NavigationButton direction="next" onClick={handleNext}>›</NavigationButton>
          </ModalContent>
        </Modal>
      )}
    </PageContainer>
  );
}

export default Galleria; 