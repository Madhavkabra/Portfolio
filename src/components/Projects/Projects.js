import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import resumeData from "../resumeData";
import Github from "./Github";
import { Helmet } from "react-helmet";
import { Player } from "@lottiefiles/react-lottie-player";
function Projects() {
  useEffect(() => {
    gtag("event", "Project page", {
      event_category: "Page view",
      event_label: "Project page view",
    });
  }, []);

  return (
    <Container fluid className="project-section">
      <Helmet>
        <title>Projects | Madhav Kabra - Web Developer Portfolio</title>
        <meta
          name="description"
          content="Browse featured projects by Madhav Kabra, including full-stack applications and websites built with React, Node.js, MongoDB, and more."
        />
        <meta
          name="keywords"
          content="Madhav Kabra projects, full-stack web apps, React portfolio, Node.js projects, MongoDB, TypeScript, JavaScript projects"
        />
        <meta property="og:title" content="Projects | Madhav Kabra" />
        <meta
          property="og:description"
          content="Explore the web development projects built by Madhav Kabra using modern full-stack technologies."
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <Col md={12} className="lottie-animation">
          <Player
            src={require("../../Assets/uiuxanimation.json")}
            autoplay
            loop
            style={{ height: "400px" }}
          />
        </Col>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {resumeData.portfolio.map((project, index) => (
            <Col md={4} className="project-card" key={index}>
              <ProjectCard
                imgPath={project.imgurl}
                isBlog={false}
                title={project.name}
                description={project.description}
                ghLink={project.ghLink}
                demoLink={project.demoLink}
                customButton={project.buttonLabel}
                icon={project.icon}
              />
            </Col>
          ))}
        </Row>
      </Container>
      <Github />
    </Container>
  );
}

export default Projects;
