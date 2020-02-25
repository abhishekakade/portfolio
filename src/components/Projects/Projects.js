import React from "react"
// import { ExternalLink } from "styled-icons/feather/"
import { LinkExternal } from "styled-icons/octicons/"
import { Github } from "styled-icons/icomoon/"
import "./Projects.css"

const Projects = () => {
  return (
    <section id="about">
      <h3 className="title">Projects</h3>
      <hr className="hr-green" />
      <div className="project">
        <h4 className="featured">Featured Project</h4>
        <h5 className="project-title">Flickk - Movies Info App</h5>
        <p className="project-info">
          Progressive Web App (PWA) built with ReactJS & TMDb API that shows all
          the trending movies, their summary and even cast
          information. Optimized for performance. 
          {/* <a
            href="https://www.themoviedb.org/"
            target="_blank"
            rel="noopener noreferrer nofollow"
          > */}
          {/* See which movies are trending, their ratings, description, cast,
          genres and more. You can even search for specific movies available in{" "} */}
        </p>
        <ul className="project-tags">
          <li>ReactJS</li>
          <li>PWA</li>
          <li>TMDb API</li>
          <li>Optimized</li>
        </ul>
        <p className="project-links">
          <a
            href="https://abhishekakade.github.io/flickk-app/#/"
            rel="noreferrer noopener nofollow"
            target="_blank"
          >
            {/* <ExternalLink className="project-external-link-icon" size="1.25rem" /> */}
            <LinkExternal className="project-external-link-icon" size="1rem" />{" "}
            Live Project
          </a>
          <a
            href="https://github.com/abhishekakade/flickk-app"
            rel="noreferrer noopener nofollow"
            target="_blank"
          >
            <Github className="project-github-link-icon" size="1rem" /> GitHub
            Repo
          </a>
        </p>
      </div>

      <div className="project">
        <h4 className="featured">Featured Project</h4>
        <h5 className="project-title">Random Quote Machine</h5>
        <p className="project-info">
          Progressive Web App (PWA) built with ReactJS, uses FavQs API to fetch
          quotes & has a tweet button to share them. Optimized for performance. 
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
            {/* <ExternalLink className="project-external-link-icon" size="1.25rem" /> */}
            <LinkExternal className="project-external-link-icon" size="1rem" />{" "}
            Live Project
          </a>
          <a
            href="https://github.com/abhishekakade/random-quote-machine"
            rel="noreferrer noopener nofollow"
            target="_blank"
          >
            <Github className="project-github-link-icon" size="1rem" /> GitHub
            Repo
          </a>
        </p>
      </div>

      <div className="project">
        <h4 className="featured">Featured Project</h4>
        <h5 className="project-title">Markdown Previewer</h5>
        <p className="project-info">
          Progressive Web App (PWA) built with ReactJS & Marked.js library. Its
          a markdown editor that features a live preview. Optimized for
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
            {/* <ExternalLink className="project-external-link-icon" size="1.25rem" /> */}
            <LinkExternal className="project-external-link-icon" size="1rem" />{" "}
            Live Project
          </a>
          <a
            href="https://github.com/abhishekakade/markdown-previewer"
            rel="noreferrer noopener nofollow"
            target="_blank"
          >
            <Github className="project-github-link-icon" size="1rem" /> GitHub
            Repo
          </a>
        </p>
      </div>

      <div className="project">
        <h4 className="featured">Featured Project</h4>
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
            {/* <ExternalLink className="project-external-link-icon" size="1.25rem" /> */}
            <LinkExternal className="project-external-link-icon" size="1rem" />{" "}
            Live Project
          </a>
          <a
            href="https://github.com/abhishekakade/drum-kit"
            rel="noreferrer noopener nofollow"
            target="_blank"
          >
            <Github className="project-github-link-icon" size="1rem" /> GitHub
            Repo
          </a>
        </p>
      </div>
      {/* <div className="project">
        <h4>Featured Project</h4>
        <h5 className="project-title">Project Name</h5>
        <p>Project info.</p>
        <p className="project-links">
        <a href="" rel="noreferrer noopener nofollow" target="_blank">Live Project <ExternalLink className="project-external-link-icon" size="1.25rem" /></a></p> */}
    </section>
  )
}

export default Projects
