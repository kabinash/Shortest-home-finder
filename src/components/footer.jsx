import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer class="footer bg-dark py-3 mt-auto">
      <div class="container text-center">
        <span class="text-muted">
          Made with Love by &copy;KUMAR ABINASH{" "}
          <a href="https://github.com/kabinash">
            <FaGithub />
          </a>{" "}
          <a href="https://www.linkedin.com/in/itsmeabhi021/">
            <FaLinkedin />
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
