import React from "react";
import { Card, Badge } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const StrapiBlog = ({ blog }) => {
  const {
    title,
    content,
    description,
    stack = [],
    readTime,
    link,
    image,
    isExternal,
  } = blog;
  const navigate = useNavigate();

  const calculateReadTime = (text) => {
    const wordsPerMinute = 200;
    const wordCount = text?.split(" ").length || 0;
    return Math.ceil(wordCount / wordsPerMinute);
  };

  const time = readTime || calculateReadTime(content);
  const baseText = content || description || "No content available";
  const snippet =
    baseText.substring(0, 200) + (baseText.length > 200 ? "..." : "");

  return (
    <Card
      className={link ? "blogCard" : "blogCard disabled"}
      onClick={() => {
        if (!link) return;
        if (isExternal) {
          window.open(link, "_blank", "noopener,noreferrer");
        } else {
          navigate(link);
        }
      }}
      style={{
        width: "18rem",
        textAlign: "left",
        background: "rgba(255, 255, 255, 0.2)",
        cursor: link ? "pointer" : "default",
      }}
    >
      {image && (
        <Card.Img
          variant="top"
          src={`${process.env.REACT_APP_STRAPI_BASE_URL}${image}`}
          alt={title}
          style={{ height: "200px", objectFit: "cover" }}
        />
      )}
      <Card.Body
        style={{
          minHeight: "300px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div className="blogTags">
          {stack.map((tech, i) => (
            <Badge key={i} bg="rgb(244 244 244 / 99%)" className="blogTech">
              <h6>{tech}</h6>
            </Badge>
          ))}
        </div>

        <Card.Title className="blogTitle purple">
          {title?.split(" ").slice(0, 10).join(" ")}
        </Card.Title>

        <Card.Text
          className="blogContent normal-font"
          dangerouslySetInnerHTML={{
            __html: snippet,
          }}
        />

        <Card.Footer className="text-muted blogFooter">
          {link ? (
            <>
              <Card.Link
                href={link}
                target={isExternal ? "_blank" : "_self"}
                rel={isExternal ? "noopener noreferrer" : undefined}
                style={{ textDecoration: "none" }}
                className="purple"
                onClick={(e) => {
                  if (!isExternal) {
                    e.preventDefault();
                    navigate(link);
                  }
                }}
              >
                Read Blog
              </Card.Link>
              <Card.Text>{time} min read</Card.Text>
            </>
          ) : (
            <Card.Text>Stay Tuned!</Card.Text>
          )}
        </Card.Footer>
      </Card.Body>
    </Card>
  );
};

export default StrapiBlog;
