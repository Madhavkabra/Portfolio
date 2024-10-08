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
              I have a deep passion for programming and enjoy tackling complex problems and embracing new challenges.
              <br />
              <br />
              I'm proficient in technologies such as
              <i>
                <b className="purple"> Next.js, React.js, TypeScript, and UI/UX design.</b>
              </i>
              <br />
              <br />
              My areas of interest include developing innovative
              <i>
                web technologies and products, such as AI chatbots, AI widgets, B2B SaaS solutions (e.g., healthcare platforms, AI-driven customer support, HR management systems, recruitment platforms, CMS), B2C SaaS products, Chrome extensions, Gmail plugins, and Outlook add-ins.
              </i>
              <br />
              <br />
              I'm also passionate about creating products using
              <i> modern databases and architectures</i>
              &nbsp; like
              <i>
                {" "}FaunaDB, MongoDB, Prisma, Firebase, Bit.dev, and micro-frontend architectures.
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
                <li className="social-icons" key={socialLink.name}>
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
