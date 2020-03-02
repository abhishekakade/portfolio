import React from "react"
import { Github, Linkedin, Codepen } from "styled-icons/icomoon/"
import { Heart } from "styled-icons/fa-solid/"
import "./Footer.css"

const Footer = () => {
  return (
    <footer>
      <ul id="footer-social-links">
        <li>
          <a
            href="https://www.linkedin.com/in/abhishek-kakade/"
            target="_blank"
            rel="nofollow noopener noreferrer"
            aria-label="Abhishek's LinkedIn Profile"
            className="tooltip"
          >
            <Linkedin className="icons" />
            <span className="tooltiptext">LinkedIn</span>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/abhishekakade"
            target="_blank"
            rel="nofollow noopener noreferrer"
            aria-label="Abhishek's GitHub Profile"
            className="tooltip"
          >
            <Github className="icons" />
            <span className="tooltiptext">GitHub</span>
          </a>
        </li>
        <li>
          <a
            href="https://codepen.io/abhinkakade/"
            target="_blank"
            rel="nofollow noopener noreferrer"
            aria-label="Abhishek's CodePen Profile"
            className="tooltip"
          >
            <Codepen className="icons" />
            <span className="tooltiptext">CodePen</span>
          </a>
        </li>
      </ul>
      <p>
        Made with&nbsp; {<Heart id="heart-icon" />} &nbsp;using{" "}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </p>
      <p id="design-by">
        Design by -{" "}
        <a
          href="https://github.com/bchiang7/v4"
          target="_blank"
          rel="nofollow noopener noreferrer"
          aria-label="Link to Brittany Chiang's Gatsby Theme"
        >
          Brittany Chiang
        </a>
      </p>
    </footer>
  )
}

export default Footer
