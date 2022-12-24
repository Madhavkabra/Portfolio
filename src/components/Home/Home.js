import React, { useEffect, useRef } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import resumeData from "../resumeData";
import Home2 from "./Home2";
import Type from "./Type";
import ReactGA from 'react-ga';
import { BsChevronDoubleDown } from "react-icons/bs"

function Home() {
  const endRef = useRef(null)

  const scrollToBottom = () => {
    endRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    gtag('event', 'Home page', {
      'event_category': 'Page view',
      'event_label': 'Home page view',
    });
  }, [])

  const trackTalk = () => {
    gtag('event', 'Calendly', {
      'event_category': 'Click',
      'event_label': 'Calendly view',
    });
  }

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> {resumeData.name}</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
                <div className="discuss-text">
                  Want to discuss your website, idea, job or a project ?
                </div>
                <Button className="book-btn" variant="primary" onClick={trackTalk} href="https://calendly.com/madhavkabra/30min" target="_blank">
                  LET'S TALK
                </Button>
                <Button style={{ marginLeft: 16 }} variant="secondary" href="/resume#/resume" target="_blank">
                  Resume
                </Button>
              </div>

            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
        <BsChevronDoubleDown onClick={scrollToBottom}
          className="scroll-btn"
        />
      </Container>
      <Home2 />
      <div ref={endRef} />
    </section>
  );
}

export default Home;
