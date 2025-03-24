import { Link, useLocation } from 'react-router-dom';
import styled from '@emotion/styled';

const Nav = styled.nav`
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-size: 1.2rem;
  font-weight: bold;
  color: #2B5592;
  text-decoration: none;
  white-space: nowrap;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const NavLink = styled(Link)`
  color: ${props => props.active ? '#007bff' : '#666'};
  text-decoration: none;
  font-weight: ${props => props.active ? '600' : '400'};
  padding: 0.5rem 0.75rem;
  border-radius: 4px;
  transition: all 0.3s ease;
  font-size: 0.95rem;

  &:hover {
    color: #007bff;
    background-color: #f8f9fa;
  }
`;

function Navbar() {
  const location = useLocation();

  return (
    <Nav>
      <NavContainer>
        <Logo to="/">Terreno Commerciale Baccasara</Logo>
        <NavLinks>
          <NavLink to="/" active={location.pathname === '/'}>Proprietà</NavLink>
          <NavLink to="/caratteristiche" active={location.pathname === '/caratteristiche'}>Caratteristiche</NavLink>
          <NavLink to="/posizione" active={location.pathname === '/posizione'}>Posizione</NavLink>
          <NavLink to="/galleria" active={location.pathname === '/galleria'}>Galleria</NavLink>
          <NavLink to="/documenti" active={location.pathname === '/documenti'}>Documenti</NavLink>
          <NavLink to="/contatti" active={location.pathname === '/contatti'}>Contatti</NavLink>
        </NavLinks>
      </NavContainer>
    </Nav>
  );
}

export default Navbar; 