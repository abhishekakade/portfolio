import React from "react"
import { Github, Linkedin, Codepen } from "styled-icons/icomoon/"

import "./Left.css"

const Left = () => {
  return (
    <div id="left">
      <ul id="left-list">
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
    </div>
  )
}

export default Left
