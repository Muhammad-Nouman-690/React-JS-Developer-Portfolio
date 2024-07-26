import React from "react";
import { Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiGit,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="top"
          overlay={<Tooltip id="tooltip-vscode">Visual Studio Code</Tooltip>}
        >
          <div><SiVisualstudiocode /></div>
        </OverlayTrigger>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="top"
          overlay={<Tooltip id="tooltip-postman">Postman</Tooltip>}
        >
          <div><SiPostman /></div>
        </OverlayTrigger>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="top"
          overlay={<Tooltip id="tooltip-git">Git</Tooltip>}
        >
          <div><SiGit /></div>
        </OverlayTrigger>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="top"
          overlay={<Tooltip id="tooltip-slack">Slack</Tooltip>}
        >
          <div><SiSlack /></div>
        </OverlayTrigger>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="top"
          overlay={<Tooltip id="tooltip-vercel">Vercel</Tooltip>}
        >
          <div><SiVercel /></div>
        </OverlayTrigger>
      </Col>
    </Row>
  );
}

export default Toolstack;
