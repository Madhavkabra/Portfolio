import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Particle from '../Particle';
import pdf from '../../Assets/../Assets/Madhav Resume 2024.pdf';
import { AiOutlineDownload } from 'react-icons/ai';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink =
  'https://raw.githubusercontent.com/Madhavkabra/Portfolio/master/src/Assets/Madhav%20Resume%202024.pdf';

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    gtag('event', 'Resume page', {
      event_category: 'Page view',
      event_label: 'Resume page view',
    });
    setWidth(window.innerWidth);
  }, []);

  const trackDownload = () => {
    gtag('event', 'Resume download', {
      event_category: 'Download',
      event_label: 'Resume download',
    });
  };

  return (
    <div>
      <Container
        fluid
        className='resume-section'
      >
        <Particle />
        <Row style={{ justifyContent: 'center', position: 'relative' }}>
          <a
            href={pdf}
            download="Madhav_Resume_2024.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackDownload}
          >
            <Button variant="primary" style={{ maxWidth: '250px' }}>
              <AiOutlineDownload />
              &nbsp;Download CV
            </Button>
          </a>
        </Row>

        <Row className='resume'>
          <Document
            file={resumeLink}
            className='d-flex flex-column align-items-center justify-content-center'
          >
            <Page
              pageNumber={1}
              scale={width > 786 ? 1.7 : 0.6}
            />
            <hr style={{ width: '67%' }} />
            <Page
              pageNumber={2}
              scale={width > 786 ? 1.7 : 0.6}
            />
          </Document>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
