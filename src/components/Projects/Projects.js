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
            <li>Lazy Load Images</li>
            <li>Performance Optimization</li>
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
          <h5 className="project-title">covid19india.org - Open Source</h5>
          <p className="project-info">
            Fixed unnecessary renders & rerenders, improved code
            splitting/chunking with React lazy and Suspense to load only
            necessary components initially. This resulted in 40% reduction in
            initial page load size, reduced loading time and main thread work
            load. Other UI, SEO, accessibility and tooling related fixes and
            contributions.
          </p>
          <ul className="project-tags">
            <li>ReactJS</li>
            <li>React.lazy</li>
            <li>Suspense</li>
            <li>Performance Optimization</li>
            <li>Code Splitting</li>
            <li>Chunking</li>
            <li>UI</li>
            <li>SEO</li>
            <li>Accessibility</li>
            <li>Tooling</li>
          </ul>
          <p className="project-links">
            <a
              title="covid19india.org"
              href="https://www.covid19india.org/"
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
              href="https://github.com/covid19india/covid19india-react/pulls?q=author%3Aabhishekakade"
              rel="noreferrer noopener nofollow"
              target="_blank"
            >
              <Github className="project-github-link-icon" size="1rem" /> GitHub
              (My Contributions)
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
          <h5 className="project-title">ZTM Job Board - Open Source</h5>
          <p className="project-info">
            Boosted performance from ~10% to 85+% (lighthouse audit). Refactored
            code to reduce the number of API calls from 1/user (900+ total API
            calls) to just one for all users. Cleaned user provided JSON data
            for better data representation, lazy loaded unnecessary components &
            off screen images, fixed React Leaflet map issues & memory leak.
            Lots of other UI & accessibility related fixes.
          </p>

          <ul className="project-tags">
            <li>ReactJS</li>
            <li>Leaflet</li>
            <li>Map</li>
            <li>UI</li>
            <li>React.lazy</li>
            <li>Suspense</li>
            <li>Performance Optimization</li>
            <li>Code Splitting</li>
            <li>Chunking</li>
            <li>Data Cleaning</li>
            <li>Accessibility</li>
          </ul>
          <p className="project-links">
            <a
              title="ZTM Job Board"
              href="https://alumni-board.netlify.app/"
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
              title="Abhishek's contributions to ZTM Job Board"
              className="github-link"
              href="https://github.com/zero-to-mastery/ZtM-Job-Board/commits?author=abhishekakade"
              rel="noreferrer noopener nofollow"
              target="_blank"
            >
              <Github className="project-github-link-icon" size="1rem" /> GitHub
              (My Contributions)
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
            <li>Performance Optimization</li>
          </ul>
          <p className="project-links">
            <a
              title="Markdown Previewer"
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
              title="Markdown Previewer source code"
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
              // padding: "0.5rem 1rem",
              padding: "0.75rem",
            }}
            title="More projects on Abhishek's GitHub "
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
