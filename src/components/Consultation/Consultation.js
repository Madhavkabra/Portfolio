import React, { useState, useRef, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { BsChevronDoubleDown } from "react-icons/bs";
import { Link } from "react-router-dom";
import Particle from "../Particle";
import { Helmet } from "react-helmet";
import { Player } from "@lottiefiles/react-lottie-player";

function Consultation() {
  useEffect(() => {
    gtag("event", "Consultation page", {
      event_category: "Page view",
      event_label: "Consultation page view",
    });
  }, []);

  const trackCalendly = () => {
    window.open("https://calendly.com/madhav-kabra730/30min", "_blank");
    gtag("event", "Calendly", {
      event_category: "Click",
      event_label: "Calendly consultation link clicked",
    });
  };

  return (
    <section>
      <Helmet>
        <title>Consultation | Work With Madhav Kabra</title>
        <meta
          name="description"
          content="Book a consultation with Madhav Kabra for project planning, full-stack development, code review, or personalized developer guidance."
        />
        <meta
          name="keywords"
          content="developer consultation, hire web developer, freelance React developer, full-stack advice, Madhav Kabra contact"
        />
        <meta property="og:title" content="Consultation | Madhav Kabra" />
        <meta
          property="og:description"
          content="Schedule a session with Madhav Kabra to discuss your web project or technical needs."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* --- Hero Section --- */}
      <Container fluid className="consultation-section" id="consultation">
        <Particle />
        <Container className="consultation-content">
          <Row>
            <Col md={7}>
              <h1 className="heading-name">Free 30-Minute</h1>
              <strong className="heading-name main-name">Consultation!</strong>
              <h4 className="sub-heading home-about-body mb-4">
                Need help with your product, startup, or portfolio? I’m here to
                help.
              </h4>
              <div className="home-about-body" style={{ paddingRight: 40 }}>
                <p>
                  Let’s discuss your web app idea, team needs, or technical
                  goals. Whether you need a frontend expert, project rescue, or
                  just solid guidance – I’m here to help.
                </p>
                <ul className="consultation-list">
                  <li>
                    Frontend architecture consulting (React, Next.js, Vite)
                  </li>
                  <li>UI/UX review & performance optimization</li>
                  <li>Team augmentation or hiring consultation</li>
                  <li>Tech stack decisions & best practices</li>
                  <li>Codebase audits or project rescue advice</li>
                </ul>
                <div className="home-btns mt-4">
                  <Button
                    className="book-btn"
                    size="lg"
                    onClick={trackCalendly}
                  >
                    Book a Free Consultation
                  </Button>
                  <Button
                    className="book-btn resume-btn"
                    size="lg"
                    as={Link}
                    to="/resume"
                  >
                    View My Resume
                  </Button>
                </div>
              </div>
            </Col>

            <Col md={5} className="text-center">
              <Player
                src={require("../../Assets/codeanimation.json")}
                autoplay
                loop
                style={{ height: "450px", maxWidth: "100%" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}


export default Consultation;
