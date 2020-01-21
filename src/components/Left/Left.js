import React from "react"
import { Github, Linkedin, Codepen } from "styled-icons/icomoon/"

import "./Left.css"

const Left = () => {
  return (
    <div id="left">
      <ul id="left-list">
        <li>
          <a
            href="https://github.com/abhishekakade"
            target="_blank"
            rel="nofollow noopener noreferrer"
            aria-label="Abhishek's GitHub Profile"
          >
            <Github className="icons" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/abhishek-kakade/"
            target="_blank"
            rel="nofollow noopener noreferrer"
            aria-label="Abhishek's LinkedIn Profile"
          >
            <Linkedin className="icons" />
          </a>
        </li>
        <li>
          <a
            href="https://codepen.io/abhinkakade/"
            target="_blank"
            rel="nofollow noopener noreferrer"
            aria-label="Abhishek's CodePen Profile"
          >
            <Codepen className="icons" />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Left
