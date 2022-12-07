import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import resumeData from '../resumeData';

function Projects() {
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
          {resumeData.portfolio.map(project => (
            <Col md={4} className="project-card">
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
    </Container>
  );
}

export default Projects;
