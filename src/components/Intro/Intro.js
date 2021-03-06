import React from "react"
// import { Link } from "gatsby"
import ScrollAnimation from "react-animate-on-scroll"
import "./Intro.css"

const Intro = () => {
  return (
    <section id="intro">
      <ScrollAnimation animateIn="fadeIn">
        <h1 className="highlight-text-green mono small">Hi, my name is</h1>
        <h2 className="title">Abhishek Kakade.</h2>
        <h3>I build things for the web.</h3>

        <p id="intro-para">
          I'm a versatile{" "}
          <span className="highlight-text-white">Front-End Developer</span>{" "}
          specializing in{" "}
          <span className="highlight-text-white">JavaScript</span>,{" "}
          <span className="highlight-text-white">ReactJS</span>. Graduated from{" "}
          <span className="highlight-text-white">
            Udacity's Front-End Nanodegree
          </span>{" "}
          program with Google India Scholarship. MERN stack enthusiast. Open
          source contributor.
        </p>

        <a className="get-in-touch-btn" href="mailto:abhishekakade@gmail.com">
          Get In Touch
        </a>
      </ScrollAnimation>
    </section>
  )
}

export default Intro
