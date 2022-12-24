import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import resumeData from "./resumeData";

function Footer() {
  useEffect(() => {
    gtag('event', 'Footer', {
      'event_category': 'Page view',
      'event_label': 'Footer view',
    });
  }, [])

  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Madhav Kabra</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} MK</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            {resumeData.socialLinks.map((socialLink) => (
              <li className="social-icons">
                <a
                  href={socialLink.url}
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {socialLink.icon}
                </a>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
