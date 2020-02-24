import React from "react"
import "./Projects.css"

const Projects = () => {
  return (
    <section id="about">
      <h3 className="title">Projects</h3>
      <hr className="hr-green" />
      <div className="project">
        <h4>Featured Project</h4>
        <h5>Flickk</h5>
        <h6>Movies Info App</h6>
        <p>
          PWA built with ReactJS &{" "}
          <a
            href="https://www.themoviedb.org/"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            TMDb
          </a>
          API! that shows all the trending movies, their summary and even cast
          information. Optimized for performance. 
          {/* See which movies are trending, their ratings, description, cast,
          genres and more. You can even search for specific movies available in{" "} */}
        </p>
      </div>
      <div className="project">
        <h4>Featured Project</h4>
        <h5>Random Quote Machine</h5>
        <p>
          PWA built with ReactJS, uses FavQs API to fetch quotes & has a tweet
          button to share them. Optimized for performance. 
        </p>
      </div>
      <div className="project">
        <h4>Featured Project</h4>
        <h5>Markdown Previewer</h5>
        <p>
          PWA built with ReactJS & Marked.js library. Its a markdown editor that
          features a live preview. Optimized for performance.
        </p>
      </div>
      <div className="project">
        <h4>Featured Project</h4>
        <h5>React Piano/Drumkit</h5>
        <p>
          PWA built with ReactJS. Features a minimalist piano & drum kit.
          Optimized for performance. 
        </p>
      </div>
      {/* <div className="project">
        <h4>Featured Project</h4>
        <h5>Project Name</h5>
        <p>Project info.</p>
      </div> */}
    </section>
  )
}

export default Projects
