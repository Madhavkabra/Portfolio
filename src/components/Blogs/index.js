import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Blog from "./Blog";
import { Helmet } from "react-helmet";
import StrapiBlog from "./StrapiBlog";

const staticBlogs = [{
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
  const [blogs, setBlogs] = useState([...staticBlogs]);
  const [page, setPage] = useState(1);
  const [pageSize] = useState(4);
  const [allBlogs, setAllBlogs] = useState([]);
  const [paginatedBlogs, setPaginatedBlogs] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  useEffect(() => {
    gtag("event", "About page", {
      event_category: "Page view",
      event_label: "About page view",
    });
  }, []);

  useEffect(() => {
    const fetchBlogs = async () => {
      const apiKey = process.env.REACT_APP_STRAPI_API_KEY; // Access the API key from environment variable
      const apiUrl = process.env.REACT_APP_STRAPI_API_URL; // Access the API URL from environment variable

      const response = await fetch(
        `${apiUrl}?pagination[pageSize]=100&sort=publishDate:desc`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        const strapiBlogs = data.data.map((blog) => ({
          ...blog,
          isStrapi: true,
        }));

        const combined = [
          ...staticBlogs.map((blog) => ({ ...blog, isStrapi: false })),
          ...strapiBlogs,
        ];

        setAllBlogs(combined);
      } else {
        console.error("Error fetching blogs:", response.statusText);
      }
    };

    fetchBlogs();
  }, []);

  useEffect(() => {
    const total = allBlogs.length;
    const count = Math.ceil(total / pageSize);
    setPageCount(count);

    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    setPaginatedBlogs(allBlogs.slice(start, end));
  }, [allBlogs, page, pageSize]);

  return (
    <Container fluid className="about-section blog-container">
      <Helmet>
        <title>Blog Articles | Madhav Kabra - Developer Insights</title>
        <meta
          name="description"
          content="Read blog articles written by Madhav Kabra about React, Node.js, software development tips, coding best practices, and the latest in web technologies."
        />
        <meta
          name="keywords"
          content="web development blog, React tutorials, Node.js articles, JavaScript blog, Madhav Kabra blog, full-stack writing"
        />
        <meta property="og:title" content="Blog | Madhav Kabra" />
        <meta
          property="og:description"
          content="Insights, tutorials, and technical thoughts from full-stack developer Madhav Kabra."
        />
        <meta property="og:type" content="article" />
      </Helmet>
      <Particle />
      <Container>
        <Row>
          {paginatedBlogs.map((blog, idx) => (
            <Col
              key={blog.id || `static-${idx}`}
              xxl={3}
              xl={3}
              lg={4}
              md={6}
              sm={1}
              style={{ justifyContent: "center", paddingBottom: "50px" }}
            >
              {blog.isStrapi ? (
                <StrapiBlog
                  blog={{
                    title: blog.seoTitle || blog.title,
                    link: `/blogs/${blog.slug}`,
                    content: blog.content,
                    readTime: blog.readTime,
                    stack: [],
                    image: "",
                    seoTitle: blog.seoTitle,
                    seoDescription: blog.seoDescription,
                  }}
                />
              ) : (
                <Blog {...blog} />
              )}
            </Col>
          ))}
        </Row>
        <div className="pagination-controls text-center my-4">
          <button
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            disabled={page === 1}
            className="btn btn-outline-light mx-2"
          >
            Previous
          </button>
          <span className="text-white">
            Page {page} of {pageCount}
          </span>
          <button
            onClick={() => setPage((prev) => Math.min(prev + 1, pageCount))}
            disabled={page === pageCount}
            className="btn btn-outline-light mx-2"
          >
            Next
          </button>
        </div>
      </Container>
    </Container>
  );
}

export default About;
