import { Link, useLocation } from 'react-router-dom';
import styled from '@emotion/styled';
import { useState } from 'react';

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
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (min-width: 768px) {
    padding: 0 2rem;
  }
`;

const Logo = styled(Link)`
  font-size: 1.1rem;
  font-weight: bold;
  color: #2B5592;
  text-decoration: none;
  white-space: nowrap;
  
  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

const MenuButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 25px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  @media (min-width: 1024px) {
    display: none;
  }

  div {
    width: 30px;
    height: 3px;
    background: #2B5592;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-of-type {
      transform: ${({ isOpen }) => isOpen ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-of-type(2) {
      opacity: ${({ isOpen }) => isOpen ? '0' : '1'};
      transform: ${({ isOpen }) => isOpen ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-of-type(3) {
      transform: ${({ isOpen }) => isOpen ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  
  @media (max-width: 1023px) {
    display: ${({ isOpen }) => isOpen ? 'flex' : 'none'};
    flex-direction: column;
    gap: 0;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: white;
    padding: 1rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 0 0 8px 8px;
    margin-top: 1rem;
  }
`;

const NavLink = styled(Link)`
  color: ${props => props.active ? '#007bff' : '#666'};
  text-decoration: none;
  font-weight: ${props => props.active ? '600' : '400'};
  padding: 0.75rem;
  border-radius: 4px;
  transition: all 0.3s ease;
  font-size: 0.95rem;
  display: block;
  width: 100%;

  &:hover {
    color: #007bff;
    background-color: #f8f9fa;
  }

  @media (max-width: 1023px) {
    text-align: center;
    border-bottom: 1px solid #eee;
    
    &:last-child {
      border-bottom: none;
    }
  }
`;

function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <Nav>
      <NavContainer>
        <Logo to="/" onClick={closeMenu}>Terreno Commerciale Baccasara</Logo>
        <MenuButton isOpen={isOpen} onClick={toggleMenu}>
          <div />
          <div />
          <div />
        </MenuButton>
        <NavLinks isOpen={isOpen}>
          <NavLink to="/" active={location.pathname === '/'} onClick={closeMenu}>
            Proprietà
          </NavLink>
          <NavLink to="/caratteristiche" active={location.pathname === '/caratteristiche'} onClick={closeMenu}>
            Caratteristiche
          </NavLink>
          <NavLink to="/posizione" active={location.pathname === '/posizione'} onClick={closeMenu}>
            Posizione
          </NavLink>
          <NavLink to="/galleria" active={location.pathname === '/galleria'} onClick={closeMenu}>
            Galleria
          </NavLink>
          <NavLink to="/documenti" active={location.pathname === '/documenti'} onClick={closeMenu}>
            Documenti
          </NavLink>
          <NavLink to="/contatti" active={location.pathname === '/contatti'} onClick={closeMenu}>
            Contatti
          </NavLink>
        </NavLinks>
      </NavContainer>
    </Nav>
  );
}

export default Navbar; 