import React from "react"

const Intro = () => {
  return (
    <section>
      <h1 className="highlight-text mono small">Hi, my name is</h1>
      <h2
        className="title"
        style={{
          fontSize: "3rem",
          marginBottom: 0,
        }}
      >
        Abhishek Kakade.
      </h2>
      <h3
        style={{
          fontSize: "2.75rem",
        }}
      >
        I build things for the web.
      </h3>
      {/* <p>
        I'm a <span className="highlight-text">Front-End Developer</span>{" "}
        specializing in JavaScript and ReactJS. I'm an active open source
        contributor and a MERN stack enthusiast.
      </p> */}
      <p>
        I'm a versatile{" "}
        <span className="highlight-text">Front-End Developer</span> specializing
        in <span className="highlight-text">JavaScript</span>,{" "}
        <span className="highlight-text">ReactJS</span>
        . Recipient of Google India Scholarship for Udacity's Front-End
        Nanodegree. MERN stack enthusiast. Open source contributor.
      </p>
    </section>
  )
}

export default Intro
