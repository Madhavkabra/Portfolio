import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Senior Frontend Developer",
          "MERN Stack Developer",
          "Full Stack Developer",
          "React.js",
          "Javascript",
          "4 years, countless commits — all remote.",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 20,
      }}
    />
  );
}

export default Type;
