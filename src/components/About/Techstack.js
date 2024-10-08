import React from "react";
import { Col, Row } from "react-bootstrap";
import { TfiHtml5 } from "react-icons/tfi";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
} from "react-icons/di";
import { AiOutlineApi } from "react-icons/ai";
import { MdGeneratingTokens } from "react-icons/md";
import {
  SiVite,
  SiEslint,
  SiFirebase,
  SiStorybook,
  SiSonarcloud,
  SiRedux,
  SiMaterialdesign,
  SiBootstrap,
  SiAntdesign,
  SiStyledcomponents,
  SiPrettier,
  SiJest,
  SiCypress,
  SiMocha,
  SiTestin,
  SiSonarqube,
  SiBlockchaindotcom,
  SiTypescript,
  SiPrisma,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { FaFigma, FaDocker, FaAirbnb, FaCss3Alt } from "react-icons/fa";

import { GrGraphQl } from "react-icons/gr";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <TfiHtml5 />
        <h6>HTML</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaCss3Alt />
        <h6>CSS</h6>
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
        <DiReact />
        <h6>React.js</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbBrandNextjs />
        <h6>Next.js</h6>
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
        <SiStyledcomponents />
        <h6>Styled Components</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBootstrap />
        <h6>Bootstrap</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMaterialdesign />
        <h6>Material UI</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAntdesign />
        <h6>Ant Design</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaFigma />
        <h6>Figma</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiEslint />
        <h6>ESLint</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPrettier />
        <h6>Prettier</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <MdGeneratingTokens />
        <h6>Tokens</h6>
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
        <h6>React Testing Library</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <AiOutlineApi />
        <h6>REST API</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <GrGraphQl />
        <h6>GraphQL</h6>
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
        <SiPrisma />
        <h6>Prisma</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaDocker />
        <h6>Docker</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSonarqube />
        <h6>SonarQube</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSonarcloud />
        <h6>SonarCloud</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
        <h6>Firebase</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiStorybook />
        <h6>Storybook</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaAirbnb />
        <h6>Airbnb</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBlockchaindotcom />
        <h6>Blockchain</h6>
      </Col>
    </Row>
  );
}

export default Techstack;
