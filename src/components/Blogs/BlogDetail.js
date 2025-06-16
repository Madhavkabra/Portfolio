import React, { useEffect, useState } from "react";
import { Badge, Row } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";

const BlogDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [allBlogs, setAllBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const apiKey = process.env.REACT_APP_STRAPI_API_KEY;
        const apiUrl = process.env.REACT_APP_STRAPI_API_URL;

        const allRes = await fetch(
          `${apiUrl}?pagination[page]=1&pagination[pageSize]=1000&sort=publishDate:asc&populate=*`,
          {
            headers: {
              Authorization: `Bearer ${apiKey}`,
              "Content-Type": "application/json",
            },
          }
        );

        const allData = await allRes.json();
        const blogList = allData.data || [];
        setAllBlogs(blogList);
        const currentBlog = blogList.find((b) => b.slug === slug);
        if (currentBlog) {
          setBlog(currentBlog);
        } else {
          console.error("No blog found with this slug");
        }
      } catch (err) {
        console.error("Error fetching blog:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogData();
  }, [slug]);

  if (loading) return <div>Loading blog...</div>;
  if (!blog) return <div>Blog not found</div>;

  const { title, content, readTime, createdAt, publishDate, link, categories } =
    blog;
  const imageUrl = blog?.image?.[0]?.url || null;

  // Get current blog index and next/prev
  const currentIndex = allBlogs.findIndex((b) => b.slug === slug);
  const prevBlog = allBlogs[currentIndex - 1];
  const nextBlog = allBlogs[currentIndex + 1];

  return (
    <div
      className="detail-blog-section mx-auto"
      style={{ maxWidth: "90ch", padding: "2rem" }}
    >
      <Row>
        {categories?.length &&
          categories.map((tech, i) => (
            <Badge
              key={i}
              bg="rgb(244 244 244 / 99%)"
              className="blogTech w-auto"
            >
              <h6>{tech.name}</h6>
            </Badge>
          ))}
      </Row>
      <h1 className="purple text-start">{title}</h1>
      <p className="text-white text-start small">
        <em>{new Date(publishDate).toLocaleDateString()}</em>
      </p>
      {imageUrl && (
        <img
          variant="top"
          src={`${process.env.REACT_APP_STRAPI_BASE_URL}${imageUrl}`}
          alt={title}
          style={{ height: "300px", objectFit: "cover" }}
        />
      )}
      <div
        className="home-about-body text-white"
        dangerouslySetInnerHTML={{ __html: content }}
      />

      <div className="text-center mt-5">
        {prevBlog && (
          <button
            className="btn btn-outline-light mx-2"
            onClick={() => {
              if (prevBlog.link) {
                window.open(prevBlog.link, "_blank");
              } else {
                navigate(`/blogs/${prevBlog.slug}`);
              }
            }}
          >
            ← Read Previous
          </button>
        )}
        {nextBlog && (
          <button
            className="btn btn-outline-light mx-2"
            onClick={() => {
              if (nextBlog.link) {
                window.open(nextBlog.link, "_blank");
              } else {
                navigate(`/blogs/${nextBlog.slug}`);
              }
            }}
          >
            Read Next →
          </button>
        )}
      </div>
    </div>
  );
};

export default BlogDetail;
