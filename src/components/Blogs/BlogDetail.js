import React, { useEffect, useState } from "react";
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

        const allRes = await fetch(`${apiUrl}?sort=publishDate:asc`, {
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
        });

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

  const { title, content, readTime, createdAt, publishDate, link } = blog;

  // Get current blog index and next/prev
  const currentIndex = allBlogs.findIndex((b) => b.slug === slug);
  const prevBlog = allBlogs[currentIndex - 1];
  const nextBlog = allBlogs[currentIndex + 1];

  return (
    <div className="home-about-section" style={{ padding: "2rem" }}>
      <h1 className="purple">{title}</h1>
      <p className="text-white">
        <em>{new Date(publishDate).toLocaleDateString()}</em>
      </p>
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
