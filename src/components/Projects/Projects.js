import React from "react"
import "./Projects.css"

const Projects = () => {
  return (
    <section id="about">
      <h3 className="title">Projects</h3>
      <hr className="hr-green" />
      <p>
        Hello! I'm Abhishek, a Front End Developer based in Karad, Maharashtra
        who enjoys building stuff with JavaScript and React. I develop{" "}
        <span className="highlight-text-white">
          fast, responsive and accessible websites/web apps
        </span>{" "}
        which perform well on all devices, even on slower networks.
      </p>

      <ul className="skill-list mono">
        <li className="skill-list-item">JavaScript (ES6+)</li>
        <li className="skill-list-item">TypeScript</li>
        <li className="skill-list-item">ReactJS, GatsbyJS</li>
        <li className="skill-list-item">HTML5, CSS3, SCSS</li>
        <li className="skill-list-item">Progressive Web Apps (PWA)</li>
        <li className="skill-list-item">Performance Optimizations</li>
        <li className="skill-list-item">Accessibility</li>
        <li className="skill-list-item">Responsive Layouts</li>
        <li className="skill-list-item">Some Node, Express, MongoDB</li>
        <li className="skill-list-item">Some Python and Golang</li>
      </ul>
    </section>
  )
}

export default Projects
