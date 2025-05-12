import React from "react";
import { Card, Button, Badge } from "react-bootstrap";
import { Link } from "react-router-dom"; // For internal navigation

const StrapiBlog = ({ blog }) => {
  const {
    title,
    content,
    seoTitle,
    seoDescription,
    createdAt,
    stack,
    slug,
    image,
    readTime,
    link
  } = blog;

  // Calculate read time (if not provided)
  const calculateReadTime = (text) => {
    const wordsPerMinute = 200; // Average reading speed
    const wordCount = text.split(' ').length;
    const time = Math.ceil(wordCount / wordsPerMinute);
    return time;
  };

  // If readTime is not provided, calculate it
  const time = readTime || calculateReadTime(content);

  return (
    <Card className="blog-card card" style={{textAlign: 'left', background: 'rgba(255, 255, 255, 0.2)' }}>
      {image && (
        <Card.Img variant="top" src={image} alt={title} style={{ height: "200px", objectFit: "cover" }} />
      )}
      <Card.Body>
        <div className="blog-tags">
          {stack && stack.map((category, index) => (
            <Badge key={index} bg="rgb(244 244 244 / 99%)" className='blogTech'>
              <h6>{category}</h6>
            </Badge>
          ))}
        </div>
        <Card.Title className="blogTitle purple">{title.split(' ').slice(0, 10).join(' ')}</Card.Title>
        <Card.Text className="blogContent normal-font" dangerouslySetInnerHTML={{ __html: content ? `${content.substring(0, 200)}...` : 'No content available' }} />
        </Card.Body>
      <Card.Footer className="text-muted blogFooter">
          {link ?
            <>
              <Card.Link href={link}  style={{textDecoration: 'none'}} className='purple'>Read Blog</Card.Link>
              <Card.Text>{time} min read</Card.Text>
            </>
            :
            <Card.Text>Stay Tuned!</Card.Text>
          }
        </Card.Footer>
    </Card>
  );
};

export default StrapiBlog;