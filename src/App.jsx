import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from '@emotion/styled';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Proprieta from './pages/Proprieta';
import Caratteristiche from './pages/Caratteristiche';
import Posizione from './pages/Posizione';
import Galleria from './pages/Galleria';
import Documenti from './pages/Documenti';
import Contatti from './pages/Contatti';

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  flex: 1;
`;

function App() {
  return (
    <Router>
      <AppContainer>
        <Navbar />
        <MainContent>
          <Routes>
            <Route path="/" element={<Proprieta />} />
            <Route path="/caratteristiche" element={<Caratteristiche />} />
            <Route path="/posizione" element={<Posizione />} />
            <Route path="/galleria" element={<Galleria />} />
            <Route path="/documenti" element={<Documenti />} />
            <Route path="/contatti" element={<Contatti />} />
          </Routes>
        </MainContent>
        <Footer />
      </AppContainer>
    </Router>
  );
}

export default App;
