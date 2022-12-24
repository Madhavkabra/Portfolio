import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import resumeData from "../resumeData";

function Home2() {
  const trackView = (link) => {
    gtag('event', `Link ${link}`, {
      'event_category': link,
      'event_label': link,
    });
  };

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and I love to solve complex problems and love new challenges.
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> React.js, Javascript, HTML and CSS. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                Web Technologies and Products and
                also in areas related to{" "}
                Health care, Application tracking system and Content monetization.
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with Node.js and
              <i>

                {" "}
                Modern Databases and Architectures

              </i>
              &nbsp; like
              <i>
                FaunaDB, Bit.dev, Micro-fronends.
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              {resumeData.socialLinks.map((socialLink) => (
                <li className="social-icons">
                  <a
                    href={socialLink.url}
                    className="icon-colour  home-social-icons"
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => trackView(socialLink.name)}
                  >
                    {socialLink.icon}
                  </a>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
