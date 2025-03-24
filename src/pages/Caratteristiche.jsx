import styled from '@emotion/styled';

const PageContainer = styled.div`
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #2B5592;
  margin-bottom: 2rem;
  text-align: center;
`;

const ContentSection = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
`;

const FeatureItem = styled.li`
  background: white;
  padding: 1.5rem;
  margin-bottom: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: baseline;
`;

const FeatureLabel = styled.span`
  font-weight: bold;
  color: #2B5592;
  min-width: 200px;
  margin-right: 1rem;
`;

const FeatureValue = styled.span`
  color: #333;
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