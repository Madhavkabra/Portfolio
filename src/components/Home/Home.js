import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import resumeData from "../resumeData";
import Home2 from "./Home2";
import Type from "./Type";
import { BsChevronDoubleDown } from "react-icons/bs"
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

function Home() {
  const endRef = useRef(null)
  const [showScrollBtn, setShowScrollBtn] = useState(true);
  
  const scrollToBottom = () => {
    endRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    function onScroll() {
      if (window.innerHeight - document.getElementById("scrollDown").getBoundingClientRect().bottom > 50) {
        setShowScrollBtn(false)
      } else {
        setShowScrollBtn(true)
      }
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);


  useEffect(() => {
    gtag('event', 'Home page', {
      'event_category': 'Page view',
      'event_label': 'Home page view',
    });
  }, [])

  const trackTalk = () => {
    window.open("https://calendly.com/madhavkabra/30min", "_blank")
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
                <div className="home-btns">
                  <Nav.Link
                    className="book-btn"
                    onClick={trackTalk}
                  >
                    Contact Me
                  </Nav.Link>
                  <Nav.Link
                    className="book-btn resume-btn"
                    as={Link}
                    to="/resume"
                    target="_blank"
                  >
                    Resume
                  </Nav.Link>
                </div>
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
        <div style={{ "opacity": showScrollBtn ? 1 : 0 }}>
          <BsChevronDoubleDown id="scrollDown" onClick={scrollToBottom}
            className="scroll-btn"
          />
        </div>
      </Container>
      <Home2 />
      <div ref={endRef} />
    </section>
  );
}

export default Home;
