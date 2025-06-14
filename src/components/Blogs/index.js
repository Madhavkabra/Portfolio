import React, { useEffect, useState } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import Particle from "../Particle";
import Blog from "./Blog";
import { Helmet } from "react-helmet";
import StrapiBlog from "./StrapiBlog";

const staticBlogs = [
  {
    title: "“React.js: revolutionising the way we build user interfaces”",
    link: "https://medium.com/@madhav.kabra1100/react-js-revolutionising-the-way-we-build-user-interfaces-f261ece08af9",
    content:
      "React is a JavaScript library used to create user interfaces. It is a JavaScript library for building reusable UI components, which makes it easy to build and maintain large web applications. It uses a virtual DOM (a lightweight in-memory representation of the actual DOM) to improve the performance of updates. This makes it faster and more efficient than other libraries and frameworks. React was developed and is maintained by Facebook, and it has a large and active developer community.",
    readTime: "4 min",
    stack: ["React.js"],
  },
  {
    title: "“React Components: The Building Blocks of Modern User Interfaces”",
    link: "https://medium.com/@madhav.kabra1100/react-components-the-building-blocks-of-modern-user-interfaces-d84b43883c6b",
    content:
      "A React component can be thought of as a “block” in Minecraft. Just as blocks are the building blocks of a Minecraft world, components are the building blocks of a React application. Just as different types of blocks have different properties and behaviors, different types of React components have different properties (props) and behaviors (methods). And just as blocks can be combined to create structures in Minecraft, React components can be combined to create a user interface.",
    readTime: "4 min",
    stack: ["React.js"],
  },
  {
    title:
      "Responsive Web Design 101: An Introduction to Flexible Layouts and Media Queries”",
    link: "https://medium.com/@madhav.kabra1100/responsive-web-design-101-an-introduction-to-flexible-layouts-and-media-queries-3c9ed6f04beb",
    content:
      "How can you make sure your website delivers the same high-quality user experience on any screen size? The answer is responsive design.",
    readTime: "4 min",
    stack: ["HTML", "CSS"],
  },
  {
    title:
      "“React.js Simplified: A Step-by-Step Guide to Building a Simple App”",
    link: "https://medium.com/@madhav.kabra1100/react-js-simplified-a-step-by-step-guide-to-building-a-simple-app-315bde048733",
    content:
      "Building a React.js app using a functional component is a great way to get started with the framework. Here’s a step-by-step guide on how to build your first React.js app using a functional component.",
    readTime: "4 min",
    stack: ["React.js"],
  },
  {
    title: "Revamping Your CSS for Lightning - Fast Load Times(Part 1)",
    link: "https://medium.com/@madhav.kabra1100/revamping-your-css-for-lightning-fast-load-times-part-1-f2c947c66334",
    content:
      "Optimizing CSS can significantly improve the performance, reduce the loading time, and enhance the user experience. Here are some techniques that can be used to optimize the CSS for your websites",
    readTime: "4 min",
    stack: ["CSS"],
  },
  {
    title: "Revamping Your CSS for Lightning - Fast Load Times(Part 2)",
    link: null,
    content:
      "The blog explains more CSS optimisation techniques like Media Queries, CDN network, Optimize Images and CSS sprites.",
    readTime: "4 min",
    stack: ["CSS"],
  },
  {
    title: "React Router: Making Navigation Effortless in React.js",
    link: null,
    content:
      "React Router is a popular library for navigation in React.js applications. It provides a simple and flexible way to define routes, navigate between pages, and manage navigation state. In this article, we'll explore the basics of React Router and how to use it to create seamless navigation in your React.js app.",
    readTime: "4 min",
    stack: ["React.js", "React router"],
  },
];

function About() {
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize] = useState(8);
  const [pageCount, setPageCount] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    if (typeof gtag !== "undefined") {
      gtag("event", "About page", {
        event_category: "Page view",
        event_label: "About page view",
      });
    }
  }, []);

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      setError(null);

      try {
        const apiKey = process.env.REACT_APP_STRAPI_API_KEY;
        const apiUrl = process.env.REACT_APP_STRAPI_API_URL;

        const countResponse = await fetch(
          `${apiUrl}?pagination[page]=1&pagination[pageSize]=1`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${apiKey}`,
              "Content-Type": "application/json",
            },
          }
        );

        const countData = await countResponse.json();
        const totalStrapiBlogs = countData.meta?.pagination?.total || 0;
        const totalCombinedBlogs = staticBlogs.length + totalStrapiBlogs;
        const totalPages = Math.ceil(totalCombinedBlogs / pageSize);

        if (page > totalPages) {
          setPage(totalPages);
          return;
        }
        setPageCount(totalPages);

        let blogsToShow = [];

        const totalStatic = staticBlogs.length;
        const staticCountOnPage = page === 1 ? totalStatic : 0;
        const strapiLimit = pageSize - staticCountOnPage;
        const strapiStart =
          page === 1 ? 0 : (page - 1) * pageSize - totalStatic;

        if (strapiLimit > 0) {
          const strapiResponse = await fetch(
            `${apiUrl}?pagination[start]=${strapiStart}&pagination[limit]=${strapiLimit}&sort=publishDate:desc&populate=*`,
            {
              method: "GET",
              headers: {
                Authorization: `Bearer ${apiKey}`,
                "Content-Type": "application/json",
              },
            }
          );

          const strapiData = await strapiResponse.json();
          const strapiBlogs = strapiData.data.map((blog) => ({
            ...blog,
            isStrapi: true,
          }));

          blogsToShow = [
            ...(page === 1
              ? staticBlogs.map((b) => ({ ...b, isStrapi: false }))
              : []),
            ...strapiBlogs,
          ];
        } else {
          blogsToShow = staticBlogs
            .slice((page - 1) * pageSize, page * pageSize)
            .map((b) => ({ ...b, isStrapi: false }));
        }

        setBlogs(blogsToShow);
      } catch (err) {
        console.error("Error fetching blogs:", err);
        setError("Failed to load blogs. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [page, pageSize]);

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
        {loading ? (
          <div className="text-center my-5">
            <Spinner animation="border" role="status" variant="light">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        ) : error ? (
          <div className="text-center text-danger my-4">{error}</div>
        ) : (
          <>
            <Row>
              {blogs.map((blog, idx) => (
                <Col
                  key={blog.id || `static-${idx}`}
                  xxl={3}
                  xl={3}
                  lg={4}
                  md={6}
                  sm={12}
                  style={{ justifyContent: "center", paddingBottom: "50px" }}
                >
                  {blog.isStrapi ? (
                    <StrapiBlog
                      blog={{
                        title: blog.seoTitle || blog.title,
                        link: `/blogs/${blog.slug}`,
                        content: blog.content,
                        readTime: blog.readTime,
                        stack: blog?.categories?.length
                          ? blog.categories.map((c) => c.name)
                          : [],
                        image: blog.image?.[0]?.url,
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
          </>
        )}
      </Container>
    </Container>
  );
}

export default About;
