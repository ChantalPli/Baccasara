import styled from '@emotion/styled';

const PageContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #2B5592;
  margin-bottom: 2rem;
  text-align: center;
`;

const Subtitle = styled.p`
  text-align: center;
  color: #666;
  font-size: 1.2rem;
  margin-bottom: 3rem;
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 0.7fr 1.3fr;
  gap: 3rem;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div`
  // margin-bottom removed as it's now handled by grid gap
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  gap: 1rem;
`;

const IconContainer = styled.div`
  width: 64px;
  height: 64px;
  background-color: #2B5592;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
`;

const InfoContent = styled.div`
  flex: 1;
`;

const InfoTitle = styled.h2`
  color: #2B5592;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const InfoText = styled.p`
  color: #666;
  font-size: 1.1rem;
  margin: 0;
`;

const ContactForm = styled.form`
  padding: 2rem;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  color: #2B5592;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  color: #666;

  &::placeholder {
    color: #999;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  color: #666;

  &::placeholder {
    color: #999;
  }
`;

const Button = styled.button`
  background: #2B5592;
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background: #1a3c6b;
  }
`;

const FormTitle = styled.h2`
  color: #2B5592;
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
`;

function Contatti() {
  return (
    <PageContainer>
      <Title>Contatti</Title>
      <Subtitle>
        Per maggiori informazioni o per fissare un sopralluogo, non esitate a contattarci
      </Subtitle>

      <ContentWrapper>
        <ContactInfo>
          <InfoItem>
            <IconContainer>📱</IconContainer>
            <InfoContent>
              <InfoTitle>Telefono</InfoTitle>
              <InfoText>+39 XXX XXX XXXX</InfoText>
            </InfoContent>
          </InfoItem>

          <InfoItem>
            <IconContainer>✉️</IconContainer>
            <InfoContent>
              <InfoTitle>Email</InfoTitle>
              <InfoText>info@esempio.com</InfoText>
            </InfoContent>
          </InfoItem>

          {/* <InfoItem>
            <IconContainer>🏢</IconContainer>
            <InfoContent>
              <InfoTitle>Sede</InfoTitle>
              <InfoText>
                CAR.PI IMMOBILIARE S.R.L.<br />
                Tortolì (NU), Sardegna
              </InfoText>
            </InfoContent>
          </InfoItem> */}

          {/* <InfoItem>
            <IconContainer>🕒</IconContainer>
            <InfoContent>
              <InfoTitle>Orari</InfoTitle>
              <InfoText>
                Lun - Ven: 9:00 - 18:00<br />
                Sab: 9:00 - 12:00
              </InfoText>
            </InfoContent>
          </InfoItem> */}
        </ContactInfo>

        <ContactForm>
          {/* <FormTitle>Contattaci</FormTitle> */}
          <FormGroup>
            <Label htmlFor="name">Nome e Cognome</Label>
            <Input 
              type="text" 
              id="name" 
              placeholder="Inserisci il tuo nome completo"
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input 
              type="email" 
              id="email" 
              placeholder="La tua email"
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="phone">Telefono</Label>
            <Input 
              type="tel" 
              id="phone" 
              placeholder="Il tuo numero di telefono"
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="message">Messaggio</Label>
            <TextArea 
              id="message" 
              placeholder="Scrivi il tuo messaggio..."
            />
          </FormGroup>

          <Button type="submit">Invia Messaggio</Button>
        </ContactForm>
      </ContentWrapper>
    </PageContainer>
  );
}

export default Contatti; 