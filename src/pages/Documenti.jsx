import { useState } from 'react';
import styled from '@emotion/styled';
import catastoPdf from '../assets/documents/catasto.pdf';

const PageContainer = styled.div`
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #2B5592;
  margin-bottom: 2rem;
  text-align: center;
`;

const DocumentsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const DocumentCard = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const DocumentPreview = styled.div`
  width: 100%;
  height: 200px;
  background: #f8f9fa;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #eee;
`;

const DocumentIcon = styled.div`
  font-size: 3rem;
  color: #2B5592;
`;

const DocumentInfo = styled.div`
  padding: 1.5rem;
`;

const DocumentTitle = styled.h3`
  color: #2B5592;
  margin-bottom: 0.5rem;
`;

const DocumentDescription = styled.p`
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const PreviewButton = styled.button`
  background: #2B5592;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background: #1a3c6b;
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 1rem;
  border-radius: 8px;
  width: 95vw;
  height: 95vh;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(255, 255, 255, 0.9);
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: #2B5592;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  transition: all 0.2s ease;

  &:hover {
    background: #2B5592;
    color: white;
    transform: scale(1.1);
  }
`;

const LoadingMessage = styled.div`
  text-align: center;
  padding: 2rem;
  color: #666;
`;

const ErrorMessage = styled.div`
  text-align: center;
  padding: 2rem;
  color: #dc3545;
`;

const PDFViewer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  flex: 1;
  overflow: hidden;
  background: white;

  embed {
    width: 100%;
    height: 100%;
    border: none;
    object-fit: contain;
  }
`;

const ZoomControls = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  display: flex;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.9);
  padding: 0.5rem;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

const ZoomButton = styled.button`
  background: #2B5592;
  color: white;
  border: none;
  padding: 0.5rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #1a3c6b;
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

const ZoomLevel = styled.span`
  display: flex;
  align-items: center;
  padding: 0 0.5rem;
  font-weight: bold;
  color: #2B5592;
`;

const RotateButton = styled(ZoomButton)`
  font-size: 1.5rem;
`;

function Documenti() {
  const [selectedDocument, setSelectedDocument] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(100);
  const [isRotated, setIsRotated] = useState(false);

  const handleZoomIn = () => {
    if (zoomLevel < 200) {
      setZoomLevel(prev => prev + 25);
    }
  };

  const handleZoomOut = () => {
    if (zoomLevel > 50) {
      setZoomLevel(prev => prev - 25);
    }
  };

  const handleResetZoom = () => {
    setZoomLevel(100);
  };

  const handleRotate = () => {
    setIsRotated(prev => !prev);
  };

  const documents = [
    {
      id: 1,
      title: 'Planimetria Catastale',
      description: 'Planimetria catastale del terreno con indicazione delle particelle',
      icon: '📄',
      file: null
    },
    {
      id: 2,
      title: 'Visura Catastale',
      description: 'Visura catastale completa dell\'immobile',
      icon: '📋',
      file: null
    },
    {
      id: 3,
      title: 'Mappa di Zonizzazione',
      description: 'Mappa di zonizzazione del Piano Regolatore',
      icon: '🗺️',
      file: null
    },
    {
      id: 4,
      title: 'Catasto Fabbricati',
      description: 'Documentazione completa del Catasto Fabbricati del Comune di Tortolì',
      icon: '🏢',
      file: catastoPdf
    }
  ];

  function handleDocumentClick(doc) {
    if (!doc.file) return;
    setSelectedDocument(doc);
  }

  return (
    <PageContainer>
      <Title>Documenti</Title>
      <DocumentsGrid>
        {documents.map((doc) => (
          <DocumentCard key={doc.id}>
            <DocumentPreview>
              <DocumentIcon>{doc.icon}</DocumentIcon>
            </DocumentPreview>
            <DocumentInfo>
              <DocumentTitle>{doc.title}</DocumentTitle>
              <DocumentDescription>
                {doc.description}
              </DocumentDescription>
              <PreviewButton 
                onClick={() => handleDocumentClick(doc)}
                disabled={!doc.file}
                style={{ opacity: doc.file ? 1 : 0.5 }}
              >
                {doc.file ? 'Anteprima' : 'In arrivo'}
              </PreviewButton>
            </DocumentInfo>
          </DocumentCard>
        ))}
      </DocumentsGrid>

      {selectedDocument && (
        <Modal onClick={() => setSelectedDocument(null)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={() => setSelectedDocument(null)}>×</CloseButton>
            <ZoomControls>
              <ZoomButton 
                onClick={handleZoomOut}
                disabled={zoomLevel <= 50}
                title="Zoom out"
              >
                -
              </ZoomButton>
              <ZoomLevel>{zoomLevel}%</ZoomLevel>
              <ZoomButton 
                onClick={handleZoomIn}
                disabled={zoomLevel >= 200}
                title="Zoom in"
              >
                +
              </ZoomButton>
              <ZoomButton 
                onClick={handleResetZoom}
                disabled={zoomLevel === 100}
                title="Reset zoom"
              >
                ↺
              </ZoomButton>
              <RotateButton 
                onClick={handleRotate}
                title={isRotated ? "View vertical" : "View horizontal"}
              >
                ⟳
              </RotateButton>
            </ZoomControls>
            <PDFViewer>
              <embed
                src={`${selectedDocument.file}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                type="application/pdf"
                title={selectedDocument.title}
                style={{ 
                  transform: `scale(${zoomLevel / 100}) ${isRotated ? 'rotate(90deg)' : ''}`, 
                  transformOrigin: 'center center',
                  background: 'white',
                  width: isRotated ? '100vh' : '100%',
                  height: isRotated ? '100vw' : '100%'
                }}
              />
            </PDFViewer>
          </ModalContent>
        </Modal>
      )}
    </PageContainer>
  );
}

export default Documenti; 