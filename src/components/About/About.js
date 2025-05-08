import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import resumeData from "../resumeData";
function About() {
  useEffect(() => {
    gtag("event", "About page", {
      event_category: "Page view",
      event_label: "About page view",
    });
  }, []);

  return (
    <Container fluid className="about-section">
      <Helmet>
        <title>About Me | Madhav Kabra - Full-Stack Developer</title>
        <meta
          name="description"
          content="Learn more about Madhav Kabra, a full-stack web developer with a strong foundation in JavaScript, React, Node.js, and building scalable applications."
        />
        <meta
          name="keywords"
          content="Madhav Kabra, about developer, web developer bio, software engineer profile, React developer, backend developer"
        />
        <meta name="author" content="Madhav Kabra" />
        <meta property="og:title" content="About Me | Madhav Kabra" />
        <meta
          property="og:description"
          content="Discover Madhav Kabra’s background, skills, education, and approach to full-stack web development."
        />
        <meta property="og:type" content="profile" />
      </Helmet>
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />
        {/* <Row style={{
          justifyContent: "center",
          paddingTop: "30px",
          paddingBottom: "50px",
        }}>
          And a few more. Check out the RESUME.
        </Row> */}

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        
      </Container>
    </Container>
  );
}

export default About;
