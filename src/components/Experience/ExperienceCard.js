import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function ExperienceCard(props) {
    const [isReadMore, setIsReadMore] = useState(false);

    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };

    return (
        <Card className="experience-card-view">
            <Card.Body  >
                <Card.Title className="mb-3">
                    {props.role} @ <strong className="purple">{props.company}</strong>
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                    {props.duration} - {props.location}
                </Card.Subtitle>

                <Card.Text style={{ textAlign: "justify",fontSize: "15px" }}>
                    {props.description.slice(0, isReadMore ? props.description.length : 3).map((desc, index) => (
                        <li key={index} style={{ marginBottom: "10px",textIndent: "-20px" ,marginLeft: "20px"}}>{desc}</li>
                    ))}

                    {props.description.length > 3 && (
                        <Button
                            variant="link"
                            onClick={toggleReadMore}
                            style={{ paddingLeft: 0, marginBottom: "10px",textDecoration: "none" }}
                            className="purple"
                        >
                            {isReadMore ? "Read Less" : "Read More"}
                        </Button>
                    )}
                </Card.Text>



                {props.skills && (
                    <Card.Text>
                        <strong>Skills: </strong> {props.skills.join(", ")}
                    </Card.Text>
                )}

                {props.link && (
                    <Button
                        variant="primary"
                        href={props.link}
                        target="_blank"
                        style={{ marginTop: "10px" }}
                    >
                        Learn More
                    </Button>
                )}
            </Card.Body>
        </Card>
    );
}

export default ExperienceCard;
