import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import resumeData from '../resumeData';
import Github from "./Github";
function Projects() {

  useEffect(() => {
    gtag('event', 'Project page', {
      'event_category': 'Page view',
      'event_label': 'Project page view',
    });
  }, [])

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
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
