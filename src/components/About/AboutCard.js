import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import resumeData from "../resumeData";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">{resumeData.name} </span>
            from <span className="purple"> Indore, India.</span>
            <br /> {resumeData.roleDescription}.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Travel
            </li>
            <li className="about-activity">
              <ImPointRight /> Read Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Watch Animes
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Madhav</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
