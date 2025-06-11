import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px", width: "100%", textAlign: "center"}}>
      <div>
      <h1 className="project-heading" style={{ paddingBottom: "20px", color: "#ffffff" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
        <div
          style={{
            filter: "brightness(1.2)",
            color: "#e0e0e0",
            display: "inline-block",
          }}
        >
      <GitHubCalendar
        username="buckyroberts"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
      />
        </div>
      </div>
    </Row>
  );
}

export default Github;
