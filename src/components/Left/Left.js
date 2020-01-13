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
          >
            <Github className="icons" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/abhishek-kakade/"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            <Linkedin className="icons" />
          </a>
        </li>
        <li>
          <a
            href="https://codepen.io/abhinkakade/"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            <Codepen className="icons" />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Left
