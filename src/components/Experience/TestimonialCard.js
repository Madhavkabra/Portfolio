import React from "react";
import Card from "react-bootstrap/Card";
import ReactStars from "react-rating-stars-component";
function TestimonialCard({ imgurl, name, description, designation, ratings }) {
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };
  return (
    <Card className="testimonial-card-view flex flex-col h-full">
      <Card.Img className="card-img-top" src={imgurl} />
      <Card.Body className="flex flex-col">
        <Card.Title>{name}</Card.Title>
        <Card.Text className="card-text truncate max-h-[100px] overflow-hidden">
          {truncateText(description, 200)}
        </Card.Text>
        <ReactStars count={5} value={ratings} size={20} activeColor="#ffd700" />
        <Card.Subtitle className="mt-auto mb-2 text-muted">{designation}</Card.Subtitle>
      </Card.Body>
    </Card>
  );
}

export default TestimonialCard;
