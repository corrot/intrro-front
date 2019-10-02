import React from "react";
import { Jumbotron } from "react-bootstrap";

const Contact = () => {
  return (
    <Jumbotron>
      <h3>Giorgi Koroshinadze</h3>
      <br />
      <p>
        Add me on{" "}
        <a
          href="https://www.linkedin.com/in/giorgi-koroshinadze-9a29b340/"
          target="blank"
        >
          LinkedIn
        </a>
      </p>
      <p>
        Visit my{" "}
        <a href="https://github.com/corrot" target="blank">
          Github
        </a>{" "}
        page
      </p>
    </Jumbotron>
  );
};

export default Contact;
