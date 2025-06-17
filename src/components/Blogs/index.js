import React, { useEffect, useState } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import Particle from "../Particle";
import Blog from "./Blog";
import { Helmet } from "react-helmet";
import StrapiBlog from "./StrapiBlog";

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
        const totalPages = Math.ceil(
          countData.meta?.pagination?.total / pageSize
        );

        if (page > totalPages) {
          setPage(totalPages);
          return;
        }
        setPageCount(totalPages);

        let blogsToShow = [];

        const strapiLimit = pageSize;
        const strapiStart = (page - 1) * pageSize ;

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

          blogsToShow = [...strapiBlogs];
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
                  <StrapiBlog
                    blog={{
                      title: blog.seoTitle || blog.title,
                      link: blog.redirectToExternal
                        ? blog.externalLink
                        : `/blogs/${blog.slug}`,
                      content: blog.content,
                      description: blog.description,
                      readTime: blog.readTime,
                      stack: blog?.categories?.length
                        ? blog.categories.map((c) => c.name)
                        : [],
                      image: blog.image?.[0]?.url,
                      seoTitle: blog.seoTitle,
                      seoDescription: blog.seoDescription,
                      isExternal: blog.redirectToExternal,
                    }}
                  />
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
