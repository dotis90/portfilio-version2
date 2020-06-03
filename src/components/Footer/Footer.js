import React from "react";
import { projectRepo } from "../../config";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <i className="fas fa-code"></i> by{" "}
      <a
        className="badge badge-dark"
        rel="noopener"
        href="https://github.com/dotis90"
        aria-label="My GitHub"
      >
        Daniel Otis
      </a>{" "}
      using <i className="fab fa-react"></i>
      <div>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="cta-btn text-color-main footerbtn"
          href={projectRepo || "#!"}
        >
          See Source Code
        </a>
      </div>
    </footer>
  );
};

export default Footer;
