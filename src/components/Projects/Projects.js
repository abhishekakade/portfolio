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
        <p>
          See which movies are trending, their ratings, description, cast,
          genres and more. You can even search for all the movies available in
          the{" "}
          <a
            href="https://www.themoviedb.org/"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            Movie Database
          </a>
          !
        </p>
      </div>
      <div className="project">
        <h4>Featured Project</h4>
        <h5>Project Name</h5>
        <p>Project info.</p>
      </div>
      <div className="project">
        <h4>Featured Project</h4>
        <h5>Project Name</h5>
        <p>Project info.</p>
      </div>
    </section>
  )
}

export default Projects
