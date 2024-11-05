import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import eCommerce from "../../Assets/Projects/e-commerce.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eCommerce}
              isBlog={false}
              title="Modern TypeScript E-Commerce Web App"
              description="Explore a modern E-Commerce experience powered by React and TypeScript. This web application showcases seamless navigation, responsive design, and providing a user-friendly interface for online shopping. Dive into a variety of products with detailed descriptions and easy checkout options. Visit now to experience the future of online shopping."
              demoLink="https://vite-ecommerce-app-rouge.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="React TypeScript Blog Web App"
              description="Discover a dynamic blog web application built with React and TypeScript. This app allows users to explore various articles and products, with features for adding new content seamlessly. It combines the power of React's component-based architecture with TypeScript's strong typing capabilities to ensure robust performance and maintainability. Explore now to delve into engaging content and a smooth user experience"
              demoLink="https://vite-blog-app-three.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Professional Engineering Services Website"
              description="Explore a professionally designed WordPress website dedicated to engineering services. This site features a clean and intuitive layout, showcasing a range of engineering solutions and expertise. Designed with user experience in mind, it highlights the company's capabilities, projects, and services, offering visitors a comprehensive view of what the engineering team has to offer. Visit now to learn more about their professional engineering solutions."
              demoLink="http://zenith-engr.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Dynamic Web Developer Portfolio"
              description="Explore the portfolio of a passionate web developer specializing in modern JavaScript frameworks technology. With proficiency in Html-5, Css-3, Bootstrap-5 and ES-6. This portfolio showcases innovative projects and products that highlight expertise in cutting-edge web development and programming. Visit now to discover a blend of creativity and technical prowess."
              demoLink="https://onlinewebmobile-784f2.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Sleek One-Page Developer Portfolio"
              description="Discover a meticulously crafted one-page portfolio designed with Tailwind CSS, showcasing the developer's expertise in modern web design and development. This sleek and responsive site highlights a collection of projects and skills, reflecting a strong command of contemporary web technologies and a keen eye for design. Visit now to experience a seamless blend of functionality and aesthetics."
              demoLink="https://developer-site690.web.app/"
            />
          </Col>

       

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;