import styled from '@emotion/styled';

const FooterContainer = styled.footer`
  background-color: #2B5592;
  color: white;
  padding: 2rem 0;
  margin-top: 4rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
`;

const Copyright = styled.p`
  margin: 0;
  font-size: 0.9rem;
`;

const CompanyInfo = styled.div`
  text-align: right;
  
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const CompanyName = styled.p`
  font-weight: 600;
  margin: 0;
`;

const CompanyContact = styled.p`
  margin: 0.5rem 0 0;
  font-size: 0.9rem;
`;

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterContent>
        <Copyright>
          © {currentYear} Tutti i diritti riservati
        </Copyright>
        <CompanyInfo>
          <CompanyName></CompanyName>
          <CompanyContact>
            Via Baccasara, Tortolì (NU) - Sardegna
          </CompanyContact>
        </CompanyInfo>
      </FooterContent>
    </FooterContainer>
  );
}

export default Footer; 