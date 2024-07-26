import React from "react";
import { Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiHtml5,
  DiCss3,
  DiBootstrap,
  DiWordpress
} from "react-icons/di";
import {
  SiFirebase,
  SiTailwindcss,
  SiTypescript
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="top"
          overlay={<Tooltip id="tooltip-html5">HTML5</Tooltip>}
        >
          <div><DiHtml5 /></div>
        </OverlayTrigger>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="top"
          overlay={<Tooltip id="tooltip-css3">CSS3</Tooltip>}
        >
          <div><DiCss3 /></div>
        </OverlayTrigger>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="top"
          overlay={ <Tooltip id="tooltip-bootstrap" > Bootstrap</Tooltip>}
        >
          <div><DiBootstrap /></div>
        </OverlayTrigger>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="top"
          overlay={<Tooltip id="tooltip-tailwindcss">Tailwind CSS</Tooltip>}
        >
          <div><SiTailwindcss /></div>
        </OverlayTrigger>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="top"
          overlay={<Tooltip id="tooltip-javascript">JavaScript</Tooltip>}
        >
          <div><DiJavascript1 /></div>
        </OverlayTrigger>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="top"
          overlay={<Tooltip id="tooltip-typescript">TypeScript</Tooltip>}
        >
          <div><SiTypescript /></div>
        </OverlayTrigger>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="top"
          overlay={<Tooltip id="tooltip-nodejs">Node.js</Tooltip>}
        >
          <div><DiNodejs /></div>
        </OverlayTrigger>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="top"
          overlay={<Tooltip id="tooltip-react">React</Tooltip>}
        >
          <div><DiReact /></div>
        </OverlayTrigger>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="top"
          overlay={<Tooltip id="tooltip-wordpress">WordPress</Tooltip>}
        >
          <div><DiWordpress /></div>
        </OverlayTrigger>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="top"
          overlay={<Tooltip id="tooltip-mongodb">MongoDB</Tooltip>}
        >
          <div><DiMongodb /></div>
        </OverlayTrigger>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="top"
          overlay={<Tooltip id="tooltip-firebase">Firebase</Tooltip>}
        >
          <div><SiFirebase /></div>
        </OverlayTrigger>
      </Col>
    </Row>
  );
}

export default Techstack;
