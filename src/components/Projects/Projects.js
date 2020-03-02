import React from "react"
import { LinkExternal } from "styled-icons/octicons/"
import { Github } from "styled-icons/icomoon/"
import ScrollAnimation from "react-animate-on-scroll"
import "./Projects.css"

const Projects = () => {
  return (
    <section id="projects">
      <ScrollAnimation animateIn="fadeIn">
        <h3 className="title">Projects</h3>
        <hr className="hr-green" />
      </ScrollAnimation>
      <ScrollAnimation
        animateIn="fadeIn"
        style={{
          padding: "0 0 1rem 0",
        }}
      >
        <div className="project">
          <h5 className="project-title">Flickk - Movies Info App</h5>
          <p className="project-info">
            Progressive Web App (PWA) built with ReactJS & TMDb API that shows
            all the trending movies, their summary and even cast information,
            along with an option to search for specific movies. Optimized for
            performance. 
          </p>
          <ul className="project-tags">
            <li>ReactJS</li>
            <li>PWA</li>
            <li>TMDb API</li>
            <li>Infinite Scroll</li>
            <li>Optimized</li>
          </ul>
          <p className="project-links">
            <a
              href="https://abhishekakade.github.io/flickk-app/#/"
              rel="noreferrer noopener nofollow"
              target="_blank"
            >
              <LinkExternal
                className="project-external-link-icon"
                size="1rem"
              />{" "}
              Live
            </a>
            <a
              className="github-link"
              href="https://github.com/abhishekakade/flickk-app"
              rel="noreferrer noopener nofollow"
              target="_blank"
            >
              <Github className="project-github-link-icon" size="1rem" /> GitHub
            </a>
          </p>
        </div>
      </ScrollAnimation>

      <ScrollAnimation
        animateIn="fadeIn"
        style={{
          padding: "1rem 0",
        }}
      >
        <div className="project">
          <h5 className="project-title">Random Quote Machine</h5>
          <p className="project-info">
            Progressive Web App (PWA) built with ReactJS, uses FavQs API to
            fetch quotes & has a tweet button to share them. Optimized for
            performance. 
          </p>
          <ul className="project-tags">
            <li>ReactJS</li>
            <li>PWA</li>
            <li>FavQs API</li>
            <li>Optimized</li>
          </ul>
          <p className="project-links">
            <a
              href="https://abhishekakade.github.io/random-quote-machine/"
              rel="noreferrer noopener nofollow"
              target="_blank"
            >
              <LinkExternal
                className="project-external-link-icon"
                size="1rem"
              />{" "}
              Live
            </a>
            <a
              className="github-link"
              href="https://github.com/abhishekakade/random-quote-machine"
              rel="noreferrer noopener nofollow"
              target="_blank"
            >
              <Github className="project-github-link-icon" size="1rem" /> GitHub
            </a>
          </p>
        </div>
      </ScrollAnimation>

      <ScrollAnimation
        animateIn="fadeIn"
        style={{
          padding: "1rem 0",
        }}
      >
        <div className="project">
          <h5 className="project-title">Markdown Previewer</h5>
          <p className="project-info">
            Progressive Web App (PWA) built with ReactJS & Marked.js library.
            Its a markdown editor that features a live preview. Optimized for
            performance.
          </p>
          <ul className="project-tags">
            <li>ReactJS</li>
            <li>PWA</li>
            <li>Marked.js</li>
            <li>Optimized</li>
          </ul>
          <p className="project-links">
            <a
              href="https://abhishekakade.github.io/markdown-previewer/"
              rel="noreferrer noopener nofollow"
              target="_blank"
            >
              <LinkExternal
                className="project-external-link-icon"
                size="1rem"
              />{" "}
              Live
            </a>
            <a
              className="github-link"
              href="https://github.com/abhishekakade/markdown-previewer"
              rel="noreferrer noopener nofollow"
              target="_blank"
            >
              <Github className="project-github-link-icon" size="1rem" /> GitHub
            </a>
          </p>
        </div>
      </ScrollAnimation>

      <ScrollAnimation
        animateIn="fadeIn"
        style={{
          padding: "1rem 0",
        }}
      >
        <div className="project">
          <h5 className="project-title">React Piano/Drumkit</h5>
          <p className="project-info">
            Progressive Web App (PWA) built with ReactJS. Features a minimalist
            piano & drum kit. Optimized for performance. 
          </p>

          <ul className="project-tags">
            <li>ReactJS</li>
            <li>PWA</li>
            <li>Optimized</li>
          </ul>
          <p className="project-links">
            <a
              href="https://abhishekakade.github.io/drum-kit/"
              rel="noreferrer noopener nofollow"
              target="_blank"
            >
              <LinkExternal
                className="project-external-link-icon"
                size="1rem"
              />{" "}
              Live
            </a>
            <a
              className="github-link"
              href="https://github.com/abhishekakade/drum-kit"
              rel="noreferrer noopener nofollow"
              target="_blank"
            >
              <Github className="project-github-link-icon" size="1rem" /> GitHub
            </a>
          </p>
        </div>
      </ScrollAnimation>

      <ScrollAnimation
        animateIn="fadeIn"
        style={{
          padding: "2.5rem 0 0 0",
        }}
      >
        <p
          className="project-links"
          style={{
            display: "block",
            margin: "auto",
            padding: "0.5rem",
            textAlign: "center",
          }}
        >
          <a
            style={{
              margin: "auto",
              padding: "0.5rem 1rem",
              padding: "0.75rem",
            }}
            aria-label="Check out more projects on Abhishek's GitHub"
            className="github-link"
            href="https://github.com/abhishekakade/"
            rel="noreferrer noopener nofollow"
            target="_blank"
          >
            <Github className="project-github-link-icon" size="1rem" /> More on
            GitHub
          </a>
        </p>
      </ScrollAnimation>
    </section>
  )
}

export default Projects
