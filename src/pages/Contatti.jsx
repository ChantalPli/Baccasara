import styled from '@emotion/styled';

const PageContainer = styled.div`
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 2rem;
  text-align: center;
`;

const ContactContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ContactForm = styled.form`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
`;

const Button = styled.button`
  background: #007bff;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background: #0056b3;
  }
`;

const InfoItem = styled.div`
  margin-bottom: 1rem;
`;

const InfoTitle = styled.h3`
  color: #333;
  margin-bottom: 0.5rem;
`;

const InfoText = styled.p`
  color: #666;
`;

function Contatti() {
  return (
    <PageContainer>
      <Title>Contatti</Title>
      <ContactContainer>
        <ContactInfo>
          <InfoItem>
            <InfoTitle>Indirizzo</InfoTitle>
            <InfoText>[Inserire l'indirizzo]</InfoText>
          </InfoItem>
          <InfoItem>
            <InfoTitle>Telefono</InfoTitle>
            <InfoText>[Inserire il numero di telefono]</InfoText>
          </InfoItem>
          <InfoItem>
            <InfoTitle>Email</InfoTitle>
            <InfoText>[Inserire l'email]</InfoText>
          </InfoItem>
          <InfoItem>
            <InfoTitle>Orari</InfoTitle>
            <InfoText>[Inserire gli orari di disponibilità]</InfoText>
          </InfoItem>
        </ContactInfo>

        <ContactForm>
          <FormGroup>
            <Label htmlFor="name">Nome e Cognome</Label>
            <Input type="text" id="name" name="name" required />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" name="email" required />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="phone">Telefono</Label>
            <Input type="tel" id="phone" name="phone" />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="message">Messaggio</Label>
            <TextArea id="message" name="message" required />
          </FormGroup>
          <Button type="submit">Invia Messaggio</Button>
        </ContactForm>
      </ContactContainer>
    </PageContainer>
  );
}

export default Contatti; 