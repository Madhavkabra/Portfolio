import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import resume2025 from "../../Assets/may madhav resume 2025.pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { Helmet } from "react-helmet";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [numPages, setNumPages] = useState(null);

  useEffect(() => {
    gtag("event", "Resume page", {
      event_category: "Page view",
      event_label: "Resume page view",
    });
    setWidth(window.innerWidth);
  }, []);

  const trackDownload = () => {
    gtag("event", "Resume download", {
      event_category: "Download",
      event_label: "Resume download",
    });
  };

  return (
    <div>
      <Helmet>
        <title>Resume | Madhav Kabra - Full-Stack Developer</title>
        <meta
          name="description"
          content="Download the resume of Madhav Kabra, a full-stack developer skilled in React.js, Node.js, and building modern web apps."
        />
        <meta
          name="keywords"
          content="Madhav Kabra resume, software developer resume, web development CV, React resume, full-stack engineer CV"
        />
        <meta name="author" content="Madhav Kabra" />
        <meta property="og:title" content="Resume | Madhav Kabra" />
        <meta
          property="og:description"
          content="Access Madhav Kabra’s resume to see qualifications, experience, and tech stack expertise."
        />
        <meta property="og:type" content="profile" />
      </Helmet>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: 'center', position: 'relative' }}>
          <a
            href={resume2025}
            download="Madhav_Resume_2025.pdf"
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

        <Row className="resume justify-content-center">
          <Document
            file={resume2025}
            onLoadSuccess={({ numPages }) => setNumPages(numPages)}
          >
            {Array.from({ length: numPages }, (_, i) => (
              <Page
                key={`page_${i + 1}`}
                pageNumber={i + 1}
                scale={width > 786 ? 1.3 : 0.6}
                className="d-flex justify-content-center"
              />
            ))}
          </Document>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
