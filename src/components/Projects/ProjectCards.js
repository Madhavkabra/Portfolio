import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { Container } from "react-bootstrap";

function ProjectCards(props) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Card className="project-card-view">
      <Card.Img src={props.imgPath} alt="card-img" style={{ height: "150px" }} />
      <Card.Body>
        <Card.Title className="mb-3">{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify", maxHeight:"180px" , overflow:"auto"}}>
          {isExpanded ? props.description : `${props.description.slice(0, 300)}`}
          {props.description.length > 300 && (
            <Button
              variant="link"
              onClick={toggleDescription}
              style={{ textDecoration: "none",paddingTop: 0, paddingBottom: 0 }}
              className="purple"
            >
              {isExpanded ? "Read Less" : "Read More"}
            </Button>
          )}
        </Card.Text>
        <Container >
          {!!props.ghLink && (
            <Button variant="primary" href={props.ghLink} target="_blank" className="purple-btn">
              {(props.icon || <BsGithub />)}&nbsp;
              {props.customButton || "GitHub"}
            </Button>
          )}
          {"\n"}
          {"\n"}

          {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

          {!props.isBlog && props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              style={{ marginLeft: "10px" }}
              className="purple-btn"
            >
              <CgWebsite /> &nbsp;
              {"Demo"}
            </Button>
          )}
        </Container>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
