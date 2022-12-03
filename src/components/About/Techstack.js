import React from "react";
import { Col, Row } from "react-bootstrap";
import { TfiHtml5 } from "react-icons/tfi";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
} from "react-icons/di";
import { AiOutlineApi } from "react-icons/ai"
import {
  SiEslint,
  SiFirebase,
  SiCsswizardry,
  SiStorybook,
  SiSonarcloud,
  SiRedux,
  SiMaterialui,
  SiBootstrap,
  SiAntdesign,
  SiStyledcomponents,
  SiPrettier,
  SiJest,
  SiCypress,
  SiMocha,
  SiTestin,
} from "react-icons/si";

import { GrGraphQl } from "react-icons/gr";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <TfiHtml5 />
        <h6>HTML</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCsswizardry />
        <h6>CSS</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <h6>Javascript</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <h6>Git</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <h6>React.js</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMaterialui />
        <h6>Material UI</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBootstrap />
        <h6>Bootstrap</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAntdesign />
        <h6>Ant Design</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiStyledcomponents />
        <h6>Styled Components</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedux />
        <h6>Redux</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiStorybook />
        <h6>Storybook</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <AiOutlineApi />
        <h6>Rest API</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <GrGraphQl />
        <h6>GraphQl</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJest />
        <h6>Jest</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCypress />
        <h6>Cypress</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMocha />
        <h6>Mocha</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTestin />
        <h6>React testing library</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiEslint />
        <h6>Eslint</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPrettier />
        <h6>Prettier</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSonarcloud />
        <h6>Sonar cloud</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <h6>Node.js</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <h6>MongoDB</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
        <h6>Firebase</h6>
      </Col>
    </Row>
  );
}

export default Techstack;
