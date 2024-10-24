import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiJavascript1, DiReact } from "react-icons/di";
import { FaCss3Alt,FaDropbox } from "react-icons/fa";
import { AiOutlineApi } from "react-icons/ai";
import { SiTypescript, SiRedux, SiVite, SiJest, SiTailwindcss, SiHtml5, SiStorybook, SiWebpack, SiFlutter, SiAngular } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <h6>React.js</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAngular />
        <h6>Angular</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFlutter />
        <h6>Flutter</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <h6>JavaScript</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript />
        <h6>TypeScript</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss />
        <h6>Tailwind CSS</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 />
        <h6>HTML</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaCss3Alt />
        <h6>CSS</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVite />
        <h6>Vite.js</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedux />
        <h6>Redux</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiStorybook />
        <h6>Storybook</h6>
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiTanstack />
        <h6>Tanstack</h6>
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <SiJest />
        <h6>Jest</h6>
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiKarma />
        <h6>Karma</h6>
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <SiWebpack />
        <h6>Webpack</h6>
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiMonorepo />
        <h6>Monorepo</h6>
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <AiOutlineApi />
        <h6>REST API</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaDropbox />
        <h6>Parcel</h6>
      </Col>
    </Row>
  );
}

export default Techstack;