import styled from '@emotion/styled';

const PageContainer = styled.div`
  padding: 1rem;
  max-width: 100%;
  overflow-x: hidden;
  
  @media (min-width: 768px) {
    padding: 2rem;
  }
`;

const Title = styled.h1`
  font-size: 1.8rem;
  color: #2B5592;
  margin-bottom: 1.5rem;
  text-align: center;
  
  @media (min-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }
`;

const ContentSection = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 0.5rem;
  
  @media (min-width: 768px) {
    padding: 0 1rem;
  }
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FeatureItem = styled.li`
  background: white;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  
  @media (min-width: 640px) {
    flex-direction: row;
    align-items: baseline;
    padding: 1.5rem;
  }
`;

const FeatureLabel = styled.span`
  font-weight: bold;
  color: #2B5592;
  font-size: 1rem;
  
  @media (min-width: 640px) {
    min-width: 200px;
    margin-right: 1rem;
    flex-shrink: 0;
  }
`;

const FeatureValue = styled.span`
  color: #333;
  font-size: 0.95rem;
  line-height: 1.5;
  word-wrap: break-word;
  
  @media (min-width: 640px) {
    font-size: 1rem;
  }
`;

const Divider = styled.hr`
  border: none;
  height: 2px;
  background-color: #2B5592;
  margin: 2rem 0;
`;

function Caratteristiche() {
  const features = [
    {
      label: 'Superficie:',
      value: '611 mq'
    },
    {
      label: 'Destinazione d\'uso:',
      value: 'Industriale/Commerciale (D/1)'
    },
    {
      label: 'Ubicazione:',
      value: 'Via Baccasara SN, Tortolì (NU)'
    },
    {
      label: 'Fronteggia:',
      value: 'Via Baccasara'
    },
    {
      label: 'Riferimenti catastali:',
      value: 'Foglio 5, Particella 3994/3995, Subalterno 1'
    },
    {
      label: 'Zonizzazione:',
      value: 'Piano Regolatore Generale Industriale'
    },
    {
      label: 'Altezza edificabile:',
      value: '8,50 mt'
    }
  ];

  return (
    <PageContainer>
      <Title>Caratteristiche</Title>
      <ContentSection>
        <FeatureList>
          {features.map((feature, index) => (
            <FeatureItem key={index}>
              <FeatureLabel>{feature.label}</FeatureLabel>
              <FeatureValue>{feature.value}</FeatureValue>
            </FeatureItem>
          ))}
        </FeatureList>
      </ContentSection>
    </PageContainer>
  );
}

export default Caratteristiche; 