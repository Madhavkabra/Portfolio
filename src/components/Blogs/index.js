import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Blog from "./Blog";

const blogs = [{
  title: "“React.js: revolutionising the way we build user interfaces”",
  link: "https://medium.com/@madhav.kabra1100/react-js-revolutionising-the-way-we-build-user-interfaces-f261ece08af9",
  content: "React is a JavaScript library used to create user interfaces. It is a JavaScript library for building reusable UI components, which makes it easy to build and maintain large web applications. It uses a virtual DOM (a lightweight in-memory representation of the actual DOM) to improve the performance of updates. This makes it faster and more efficient than other libraries and frameworks. React was developed and is maintained by Facebook, and it has a large and active developer community.",
  readTime: '4 min',
  stack: ["React.js"]
},
{
  title: "“React Components: The Building Blocks of Modern User Interfaces”",
  link: "https://medium.com/@madhav.kabra1100/react-components-the-building-blocks-of-modern-user-interfaces-d84b43883c6b",
  content: "A React component can be thought of as a “block” in Minecraft. Just as blocks are the building blocks of a Minecraft world, components are the building blocks of a React application. Just as different types of blocks have different properties and behaviors, different types of React components have different properties (props) and behaviors (methods). And just as blocks can be combined to create structures in Minecraft, React components can be combined to create a user interface.",
  readTime: '4 min',
  stack: ["React.js"]
},
{
  title: "Responsive Web Design 101: An Introduction to Flexible Layouts and Media Queries”",
  link: null,
  content: "How can you make sure your website delivers the same high-quality user experience on any screen size? The answer is responsive design.",
  readTime: '4 min',
  stack: ["HTML", "CSS"]
}]

function About() {

  useEffect(() => {
    gtag('event', 'About page', {
      'event_category': 'Page view',
      'event_label': 'About page view',
    });
  }, [])

  return (
    <Container fluid className="about-section blog-container">
      <Particle />
      <Container>
        <Row>
          {blogs.map(blog =>
            <Col
              xxl={3}
              xl={3}
              lg={4}
              md={6}
              sm={1}
              style={{
                justifyContent: "center",
                paddingBottom: "50px",
              }}
            >
              <Blog
                {...blog}
              />
            </Col>
          )}
        </Row>
      </Container>
    </Container>
  );
}

export default About;
