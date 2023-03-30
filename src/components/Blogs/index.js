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
  link: "https://medium.com/@madhav.kabra1100/responsive-web-design-101-an-introduction-to-flexible-layouts-and-media-queries-3c9ed6f04beb",
  content: "How can you make sure your website delivers the same high-quality user experience on any screen size? The answer is responsive design.",
  readTime: '4 min',
  stack: ["HTML", "CSS"]
},
{
  title: "“React.js Simplified: A Step-by-Step Guide to Building a Simple App”",
  link: "https://medium.com/@madhav.kabra1100/react-js-simplified-a-step-by-step-guide-to-building-a-simple-app-315bde048733",
  content: "Building a React.js app using a functional component is a great way to get started with the framework. Here’s a step-by-step guide on how to build your first React.js app using a functional component.",
  readTime: '4 min',
  stack: ["React.js"]
},
{
  title: "Revamping Your CSS for Lightning - Fast Load Times(Part 1)",
  link: "https://medium.com/@madhav.kabra1100/revamping-your-css-for-lightning-fast-load-times-part-1-f2c947c66334",
  content: "Optimizing CSS can significantly improve the performance, reduce the loading time, and enhance the user experience. Here are some techniques that can be used to optimize the CSS for your websites",
  readTime: '4 min',
  stack: ["CSS"]
},
{
  title: "Revamping Your CSS for Lightning - Fast Load Times(Part 2)",
  link: null,
  content: "The blog explains more CSS optimisation techniques like Media Queries, CDN network, Optimize Images and CSS sprites.",
  readTime: '4 min',
  stack: ["CSS"]
}, {
  title: "Revamping Your CSS for Lightning - Fast Load Times(Part 2)",
  link: null,
  content: "The blog explains more CSS optimisation techniques like Media Queries, CDN network, Optimize Images and CSS sprites.",
  readTime: '4 min',
  stack: ["CSS"]
}, {
  title: "React Router: Making Navigation Effortless in React.js",
  link: null,
  content: "React Router is a popular library for navigation in React.js applications. It provides a simple and flexible way to define routes, navigate between pages, and manage navigation state. In this article, we'll explore the basics of React Router and how to use it to create seamless navigation in your React.js app.",
  readTime: '4 min',
  stack: ["React.js", "React router"]
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
