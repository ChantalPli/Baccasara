import { useState } from 'react';
import styled from '@emotion/styled';
import catasto from '../assets/documents/catasto.pdf';
import catasto1 from '../assets/documents/catasto1.pdf';
import catasto2 from '../assets/documents/catasto2.pdf';
import catasto3 from '../assets/documents/catasto3.pdf';
import visuraCatastale from '../assets/documents/visura-catastale.pdf';
import visuraCatastale1 from '../assets/documents/visura-catastale1.pdf';
import visuraCatastale2 from '../assets/documents/visura-catastale2.pdf';
import visuraCatastale3 from '../assets/documents/visura-catastale3.pdf';
import visuraCatastale4 from '../assets/documents/visura-catastale4.pdf';
import pianoRegolarePdf from '../assets/documents/PIANO REGOLARE GENERALE INDUSTRIALE.pdf';

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

const SubDocumentsList = styled.div`
  background: white;
  border-radius: 8px;
  padding: 1rem;
  margin-top: 1rem;
`;

const SubDocumentItem = styled.button`
  display: block;
  width: 100%;
  text-align: left;
  padding: 0.75rem 1rem;
  border: none;
  background: ${props => props.active ? '#f0f4f8' : 'transparent'};
  color: #2B5592;
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.2s ease;
  margin-bottom: 0.5rem;

  &:hover {
    background: #f0f4f8;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const BackButton = styled.button`
  background: none;
  border: none;
  color: #2B5592;
  padding: 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  font-size: 0.9rem;

  &:hover {
    text-decoration: underline;
  }
`;

function Documenti() {
  const [selectedDocument, setSelectedDocument] = useState(null);
  const [selectedSubDocument, setSelectedSubDocument] = useState(null);
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
    // {
    //   id: 1,
    //   title: 'Planimetria Catastale',
    //   description: 'Planimetria catastale del terreno con indicazione delle particelle',
    //   icon: '📄',
    //   file: null
    // },
    {
      id: 2,
      title: 'Visura Catastale',
      description: 'Visura catastale completa dell\'immobile',
      icon: '📋',
      files: [
        { id: 1, title: 'Visura Catastale - Generale', file: visuraCatastale },
        { id: 2, title: 'Visura Catastale - Documento 1', file: visuraCatastale1 },
        { id: 3, title: 'Visura Catastale - Documento 2', file: visuraCatastale2 },
        { id: 4, title: 'Visura Catastale - Documento 3', file: visuraCatastale3 },
        { id: 5, title: 'Visura Catastale - Documento 4', file: visuraCatastale4 }
      ]
    },
    {
      id: 3,
      title: 'Piano Regolare Regionale',
      description: 'Piano Regolatore Generale Industriale della zona',
      icon: '📋',
      file: pianoRegolarePdf
    },
    {
      id: 4,
      title: 'Catasto Fabbricati',
      description: 'Documentazione completa del Catasto Fabbricati del Comune di Tortolì',
      icon: '🏢',
      files: [
        { id: 1, title: 'Catasto Fabbricati - Generale', file: catasto },
        { id: 2, title: 'Catasto Fabbricati - Documento 1', file: catasto1 },
        { id: 3, title: 'Catasto Fabbricati - Documento 2', file: catasto2 },
        { id: 4, title: 'Catasto Fabbricati - Documento 3', file: catasto3 }
      ]
    }
  ];

  function handleDocumentClick(doc) {
    if (doc.files) {
      setSelectedDocument(doc);
    } else if (doc.file) {
      setSelectedDocument(doc);
      setSelectedSubDocument(null);
    }
  }

  function handleSubDocumentClick(subDoc) {
    if (subDoc.file) {
      setSelectedSubDocument(subDoc);
    }
  }

  function handleCloseModal() {
    setSelectedDocument(null);
    setSelectedSubDocument(null);
    setZoomLevel(100);
    setIsRotated(false);
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
                disabled={!doc.file && !doc.files}
                style={{ opacity: (doc.file || doc.files) ? 1 : 0.5 }}
              >
                {doc.file || doc.files ? 'Anteprima' : 'In arrivo'}
              </PreviewButton>
            </DocumentInfo>
          </DocumentCard>
        ))}
      </DocumentsGrid>

      {selectedDocument && (
        <Modal onClick={handleCloseModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={handleCloseModal}>×</CloseButton>
            
            {selectedDocument.files && !selectedSubDocument ? (
              <>
                <BackButton onClick={handleCloseModal}>← Torna ai documenti</BackButton>
                <DocumentTitle style={{ marginBottom: '1rem' }}>{selectedDocument.title}</DocumentTitle>
                <SubDocumentsList>
                  {selectedDocument.files.map((subDoc) => (
                    <SubDocumentItem
                      key={subDoc.id}
                      onClick={() => handleSubDocumentClick(subDoc)}
                      disabled={!subDoc.file}
                    >
                      {subDoc.title}
                      {!subDoc.file && ' (In arrivo)'}
                    </SubDocumentItem>
                  ))}
                </SubDocumentsList>
              </>
            ) : (
              <>
                {selectedDocument.files && (
                  <BackButton onClick={() => setSelectedSubDocument(null)}>
                    ← Torna alla lista
                  </BackButton>
                )}
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
                    src={`${selectedSubDocument ? selectedSubDocument.file : selectedDocument.file}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                    type="application/pdf"
                    title={selectedSubDocument ? selectedSubDocument.title : selectedDocument.title}
                    style={{ 
                      transform: `scale(${zoomLevel / 100}) ${isRotated ? 'rotate(90deg)' : ''}`, 
                      transformOrigin: 'center center',
                      background: 'white',
                      width: isRotated ? '100vh' : '100%',
                      height: isRotated ? '100vw' : '100%'
                    }}
                  />
                </PDFViewer>
              </>
            )}
          </ModalContent>
        </Modal>
      )}
    </PageContainer>
  );
}

export default Documenti; 