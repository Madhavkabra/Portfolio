import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BlogDetail = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const apiKey = process.env.REACT_APP_STRAPI_API_KEY;
        const apiUrl = process.env.REACT_APP_STRAPI_API_URL;

        const response = await fetch(`${apiUrl}?filters[slug][$eq]=${slug}`, {
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
        });

        const data = await response.json();
        if (data?.data?.length) {
          setBlog(data.data[0]);
        } else {
          console.error("No blog found with this slug");
        }
      } catch (err) {
        console.error("Error fetching blog:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  if (loading) return <div>Loading blog...</div>;
  if (!blog) return <div>Blog not found</div>;

  const { title, content, readTime, createdAt, publishDate } = blog;

  return (
    <div className="home-about-section" style={{ padding: "2rem" }}>
      <h1 className="purple">{title}</h1>
      <p className="text-white">
        <em>{new Date(publishDate).toLocaleDateString()}</em>
      </p>
      <div className="home-about-body text-white" dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default BlogDetail;
