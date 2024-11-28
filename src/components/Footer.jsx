import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <h2>Saurabh Galgale</h2>
        <p>&copy; {new Date().getFullYear()} Saurabh Galgale. All rights reserved.</p>
        <article>
        <a href="https://github.com/Saurabh-Galgale" target={"blank"}>
        <AiFillGithub />
          </a>
          <a href="https://www.linkedin.com/in/saurabh-galgale/" target={"blank"}>
            <AiFillLinkedin />

          </a>
        </article>
      </div>
    </footer>
  );
};

export default Footer;
