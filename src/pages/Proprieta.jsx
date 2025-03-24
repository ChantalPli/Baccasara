import styled from '@emotion/styled';
import photo10 from '../assets/photo10.png';
import photo8 from '../assets/photo8.jpg';
import photo9 from '../assets/photo9.jpg';
import Carousel from '../components/Carousel';

const PageContainer = styled.div`
  padding: 1rem;
  max-width: 100%;
  overflow-x: hidden;
  
  @media (min-width: 768px) {
    padding: 2rem;
  }
`;

const HeroSection = styled.div`
  text-align: center;
  margin: 1rem auto 2rem;
  max-width: 100%;
  padding: 0 1rem;
  
  @media (min-width: 768px) {
    margin: 2rem auto 3rem;
    max-width: 1400px;
  }
`;

const Title = styled.h1`
  font-size: 1.5rem;
  color: #2B5592;
  margin-bottom: 1rem;
  padding: 0 0.5rem;
  
  @media (min-width: 768px) {
    font-size: 2rem;
  }

  @media (min-width: 1024px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 0.95rem;
  color: #666;
  max-width: 800px;
  margin: 0 auto 1.5rem;
  padding: 0 0.5rem;
  
  @media (min-width: 768px) {
    font-size: 1.1rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }
`;

const DescriptionSection = styled.div`
  width: 100%;
  max-width: 100%;
  margin: 1.5rem auto;
  padding: 1rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  
  @media (min-width: 768px) {
    max-width: 90%;
    margin: 2rem auto;
    padding: 1.5rem;
  }

  @media (min-width: 1024px) {
    max-width: 1000px;
    margin: 3rem auto;
    padding: 2rem;
  }
`;

const DescriptionTitle = styled.h2`
  color: #2B5592;
  font-size: 1.5rem;
  margin-bottom: 1.25rem;
  text-align: center;
  position: relative;
  
  &:after {
    content: '';
    display: block;
    width: 80px;
    height: 3px;
    background-color: #F4A460;
    margin: 0.5rem auto 0;
  }
  
  @media (min-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
    
    &:after {
      width: 100px;
    }
  }
`;

const DescriptionText = styled.p`
  color: #666;
  line-height: 1.6;
  font-size: 1rem;
  text-align: left;
  margin-bottom: 1rem;
  
  @media (min-width: 768px) {
    line-height: 1.8;
    font-size: 1.1rem;
    text-align: justify;
    margin-bottom: 1.5rem;
  }
`;

const ContentSection = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin: 1.5rem 0.5rem;
  width: calc(100% - 1rem);
  
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    margin: 2rem 1rem;
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: 0.8fr 1.4fr 0.8fr;
    gap: 2rem;
    margin: 2rem auto;
    max-width: 1200px;
    width: 90%;
  }
`;

const Card = styled.div`
  background: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  height: fit-content;
  
  @media (min-width: 640px) {
    padding: 1.25rem;
  }
  
  @media (min-width: 1024px) {
    padding: 1.5rem;
  }
`;

const CardTitle = styled.h2`
  color: #2B5592;
  font-size: 1.3rem;
  margin-bottom: 1rem;
  position: relative;

  &:after {
    content: '';
    display: block;
    width: 50px;
    height: 3px;
    background-color: #F4A460;
    margin-top: 0.5rem;
  }
  
  @media (min-width: 768px) {
    font-size: 1.5rem;
    
    &:after {
      width: 60px;
    }
  }
`;

const CardContent = styled.p`
  color: #666;
  line-height: 1.5;
  font-size: 0.9rem;
  margin: 0;
  white-space: pre-line;
  
  & + & {
    margin-top: 0.75rem;
  }
  
  @media (min-width: 768px) {
    font-size: 0.95rem;
    line-height: 1.6;
  }

  @media (min-width: 1024px) {
    font-size: 1rem;
  }
`;

const AdditionalSection = styled.div`
  width: calc(100% - 2rem);
  margin: 1.5rem auto;
  padding: 1rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  
  @media (min-width: 768px) {
    width: 90%;
    max-width: 1000px;
    margin: 2rem auto;
    padding: 1.5rem;
  }

  @media (min-width: 1024px) {
    margin: 3rem auto;
    padding: 2rem;
  }
`;

const SectionTitle = styled.h2`
  color: #2B5592;
  font-size: 1.5rem;
  margin-bottom: 1.25rem;
  position: relative;

  &:after {
    content: '';
    display: block;
    width: 80px;
    height: 3px;
    background-color: #F4A460;
    margin: 0.5rem 0;
  }
  
  @media (min-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
    
    &:after {
      width: 100px;
    }
  }
`;

const SectionText = styled.p`
  color: #666;
  line-height: 1.6;
  font-size: 1rem;
  text-align: left;
  margin-bottom: 1.25rem;
  
  @media (min-width: 768px) {
    line-height: 1.8;
    font-size: 1.1rem;
    text-align: justify;
    margin-bottom: 1.5rem;
  }
`;

function Proprieta() {
  const carouselImages = [
    { src: photo10, alt: 'Vista principale del terreno' },
    { src: photo8, alt: 'Vista del terreno' },
    { src: photo9, alt: 'Vista del terreno' }
  ];

  return (
    <PageContainer>
      <HeroSection>
        <Title>Terreno Commerciale Baccasara</Title>
        <Subtitle>
          Un'opportunità unica per investire in un terreno commerciale strategico
        </Subtitle>
        <Carousel images={carouselImages} />
      </HeroSection>

      <DescriptionSection>
        <DescriptionTitle>Descrizione della Proprietà</DescriptionTitle>
        <DescriptionText>
          Proponiamo in vendita un immobile commerciale con terreno situato in una posizione strategica nella zona industriale di Tortolì (NU), in Via Baccasara. La proprietà comprende un'officina già esistente e un'ampia corte esterna, per una superficie catastale totale di 2702 mq.
        </DescriptionText>
        <DescriptionText>
          L'immobile è identificato al Catasto Fabbricati del Comune di Tortolì al Foglio 5, Particelle 3995, 3994, 3996 e 3998. L'area è completamente urbanizzata, servita da tutte le utenze necessarie per attività commerciali e industriali con eccellente accessibilità e visibilità dalla strada principale.
        </DescriptionText>
      </DescriptionSection>

      <ContentSection>
        <Card>
          <CardTitle>Superficie</CardTitle>
          <CardContent>{`2702 mq totali
Comprende officina esistente e corte
Categoria catastale: F/1
Consistenza: 181 m²`}</CardContent>
        </Card>

        <Card>
          <CardTitle>Destinazione d'uso</CardTitle>
          <CardContent>{`Commerciale / Industriale conforme al Piano Regolatore Generale Industriale. Adattabile a molteplici attività:

Industriale: officine, attività produttive, logistica, magazzini

Commerciale: negozi, showroom, supermercati, centri commerciali

Servizi: uffici, studi professionali, strutture ricettive

Grande distribuzione: punti vendita al dettaglio e all'ingrosso

La posizione strategica e l'ampia metratura offrono infinite possibilità di sviluppo per la vostra attività.`}</CardContent>
        </Card>

        <Card>
          <CardTitle>Zona</CardTitle>
          <CardContent>{`Zona Industriale di Tortolì (NU).

La zona è caratterizzata dalla presenza di altre attività commerciali e industriali affermate, creando un polo attrattivo per potenziali clienti.`}</CardContent>
        </Card>
      </ContentSection>

      <AdditionalSection>
        <SectionTitle>Dettagli Legali e Permessi</SectionTitle>
        <SectionText>
          La destinazione urbanistica è conforme al Piano Regolatore Generale Industriale che permette lo sviluppo di attività produttive e commerciali. Tutta la documentazione catastale e le visure sono aggiornate e disponibili per la consultazione.
        </SectionText>
      </AdditionalSection>

      <AdditionalSection>
        <SectionTitle>Opportunità di Sviluppo</SectionTitle>
        <SectionText>
          Questo terreno di 611 mq offre eccellenti possibilità di sviluppo nel contesto industriale e commerciale di Tortolì. La sua classificazione D/1 (Opifici) consente l'implementazione di diverse attività produttive, manifatturiere, artigianali o di stoccaggio. La posizione è particolarmente vantaggiosa per attività che necessitano di collegamenti con il porto di Arbatax e le principali vie di comunicazione della costa orientale sarda. Sulla proprietà è già presente una struttura adibita ad officina che può essere mantenuta, ampliata o riconvertita secondo le esigenze dell'acquirente, con possibilità di edificare fino a un'altezza di 8,50 metri.
        </SectionText>
      </AdditionalSection>
    </PageContainer>
  );
}

export default Proprieta; 