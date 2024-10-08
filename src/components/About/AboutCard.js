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
            Hello everyone, I'm <span className="purple">{resumeData.name}{" "}</span>
            from <span className="purple">Indore, India.</span>
            <br />
            {resumeData.roleDescription}
            <br />
            <br />
            Besides coding, I enjoy engaging in a few other activities, such as:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Traveling
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Anime
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"
          </p>
          <footer className="blockquote-footer">Madhav</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
