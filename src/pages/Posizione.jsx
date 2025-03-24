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

const MapContainer = styled.div`
  width: 100%;
  height: 450px;
  margin-bottom: 2rem;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const MapIframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: 0;
`;

const LocationDetails = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const DetailSection = styled.div`
  background: white;
  padding: 2rem;
  margin-bottom: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  line-height: 1.6;
  color: #333;
`;

const SectionTitle = styled.h2`
  color: #2B5592;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const Paragraph = styled.p`
  margin-bottom: 1rem;
  &:last-child {
    margin-bottom: 0;
  }
`;

const Highlight = styled.span`
  color: #2B5592;
  font-weight: 500;
`;

function Posizione() {
  return (
    <PageContainer>
      <Title>Posizione</Title>
      <MapContainer>
        <MapIframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d785.7696589073054!2d9.6758952696038!3d39.931937026589445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMznCsDU1JzU1LjAiTiA5wrA0MCczNS41IkU!5e1!3m2!1ses!2sco!4v1742783211498!5m2!1ses!2sco"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </MapContainer>
      <LocationDetails>
        <DetailSection>
          <SectionTitle>Ubicazione Strategica</SectionTitle>
          <Paragraph>
            Il terreno è strategicamente situato in <Highlight>Via Baccasara a Tortolì</Highlight>, 
            nella provincia di Nuoro, Sardegna. Si trova all'interno della zona industriale, 
            a breve distanza dal porto di Arbatax e dalle principali arterie di comunicazione.
          </Paragraph>
          <Paragraph>
            La posizione offre eccellente visibilità, essendo situata lungo una via di accesso 
            importante, e garantisce un facile collegamento sia con il centro abitato che con 
            le infrastrutture portuali, fondamentali per attività commerciali e industriali nell'area.
          </Paragraph>
        </DetailSection>
        <DetailSection>
          <SectionTitle>Collegamenti e Accessibilità</SectionTitle>
          <Paragraph>
            • Accesso diretto dalla Via Baccasara<br />
            • Vicinanza al porto di Arbatax<br />
            • Collegamento con il centro abitato<br />
            • Accesso alle principali arterie di comunicazione
          </Paragraph>
        </DetailSection>
      </LocationDetails>
    </PageContainer>
  );
}

export default Posizione; 