import React from "react";
import { Col, Row } from "react-bootstrap";
import { AiFillGitlab } from "react-icons/ai";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiVercel,
  SiGithub,
  SiBitbucket,
  SiTrello,
  SiJira,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <h6>VS Code</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <h6>Postman</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
        <h6>Github</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <AiFillGitlab />
        <h6>Gitlab</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBitbucket />
        <h6>Bitbucket</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTrello />
        <h6>Trello</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJira />
        <h6>Jira</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHeroku />
        <h6>Heroku</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
        <h6>Vercel</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHeroku />
        <h6>Heroku</h6>
      </Col>
    </Row>
  );
}

export default Toolstack;
