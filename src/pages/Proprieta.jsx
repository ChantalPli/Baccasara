import styled from '@emotion/styled';
import photo10 from '../assets/photo10.png';
import photo8 from '../assets/photo8.jpg';
import photo9 from '../assets/photo9.jpg';
import Carousel from '../components/Carousel';

const PageContainer = styled.div`
  padding: 2rem;
`;

const HeroSection = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #2B5592;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #666;
  max-width: 800px;
  margin: 0 auto 2rem;
`;

const DescriptionSection = styled.div`
  max-width: 1000px;
  margin: 3rem auto;
  padding: 2rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const DescriptionTitle = styled.h2`
  color: #2B5592;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  text-align: center;
  position: relative;
  
  &:after {
    content: '';
    display: block;
    width: 100px;
    height: 3px;
    background-color: #F4A460;
    margin: 0.5rem auto 0;
  }
`;

const DescriptionText = styled.p`
  color: #666;
  line-height: 1.8;
  font-size: 1.1rem;
  text-align: justify;
`;

const ContentSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const Card = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const CardTitle = styled.h2`
  color: #2B5592;
  margin-bottom: 1rem;
  position: relative;

  &:after {
    content: '';
    display: block;
    width: 60px;
    height: 3px;
    background-color: #F4A460;
    margin-top: 0.5rem;
  }
`;

const CardContent = styled.p`
  color: #666;
  line-height: 1.6;
`;

const AdditionalSection = styled.div`
  max-width: 1000px;
  margin: 3rem auto;
  padding: 2rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.h2`
  color: #2B5592;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  position: relative;

  &:after {
    content: '';
    display: block;
    width: 100px;
    height: 3px;
    background-color: #F4A460;
    margin: 0.5rem 0;
  }
`;

const SectionText = styled.p`
  color: #666;
  line-height: 1.8;
  font-size: 1.1rem;
  text-align: justify;
  margin-bottom: 1.5rem;
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
        <DescriptionText>
          La proprietà è inserita nel Piano Regolatore Generale Industriale della zona, garantendo la destinazione d'uso commerciale/industriale.
        </DescriptionText>
      </DescriptionSection>

      <ContentSection>
      

        <Card>
          <CardTitle>Destinazione d'uso</CardTitle>
          <CardContent>
          Commerciale / Industriale conforme al Piano Regolatore Generale Industriale. Adattabile a molteplici attività:
            <br />
            Industriale: officine, attività produttive, logistica, magazzini
            <br />
            Commerciale: negozi, showroom, supermercati, centri commerciali
            <br />
            Servizi: uffici, studi professionali, strutture ricettive            
            <br />
            Grande distribuzione: punti vendita al dettaglio e all'ingrosso
            <br />
            La posizione strategica e l'ampia metratura offrono infinite possibilità di sviluppo per la vostra attività.
          </CardContent>
        </Card>

        <Card>
          <CardTitle>Zona</CardTitle>
          <CardContent>
            Zona Industriale di Tortolì (NU).
            <br />
            La zona è caratterizzata dalla presenza di altre attività commerciali e industriali affermate, creando un polo attrattivo per potenziali clienti.
          </CardContent>
        </Card>

        <Card>
          <CardTitle>Superficie</CardTitle>
          <CardContent>
            2702 mq totali
            <br />
            Comprende officina esistente e corte
            <br />
            Categoria catastale: F/1
            <br />
            Consistenza: 181 m²
          </CardContent>
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