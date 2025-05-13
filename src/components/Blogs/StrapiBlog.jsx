import React from "react";
import { Card, Badge } from "react-bootstrap";

const StrapiBlog = ({ blog }) => {
  const { title, content, stack = [], readTime, link, image } = blog;

  const calculateReadTime = (text) => {
    const wordsPerMinute = 200;
    const wordCount = text?.split(" ").length || 0;
    return Math.ceil(wordCount / wordsPerMinute);
  };

  const time = readTime || calculateReadTime(content);
  const snippet = content
    ? content.substring(0, 200) + "..."
    : "No content available";

  return (
    <Card
      className={link ? "blogCard" : "blogCard disabled"}
      onClick={link ? () => window.open(link, "_blank") : () => {}}
      style={{
        width: "18rem",
        textAlign: "left",
        background: "rgba(255, 255, 255, 0.2)",
      }}
    >
      {image && (
        <Card.Img
          variant="top"
          src={image}
          alt={title}
          style={{ height: "200px", objectFit: "cover" }}
        />
      )}
      <Card.Body>
        {stack.map((tech, i) => (
          <Badge key={i} bg="rgb(244 244 244 / 99%)" className="blogTech">
            <h6>{tech}</h6>
          </Badge>
        ))}

        <Card.Title className="blogTitle purple">
          {title?.split(" ").slice(0, 10).join(" ")}
        </Card.Title>

        <Card.Text
          className="blogContent normal-font"
          dangerouslySetInnerHTML={{
            __html: content
              ? `${content.substring(0, 200)}...`
              : "No content available",
          }}
        />

        <Card.Footer className="text-muted blogFooter">
          {link ? (
            <>
              <Card.Link
                href={link}
                style={{ textDecoration: "none" }}
                className="purple"
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
