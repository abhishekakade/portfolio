import React from "react"
import Intro from "../Intro/Intro"
// import Header from "../Header/Header"
import "./Sections.css"
import About from "../About/About"
import Projects from "../Projects/Projects"
import Contact from "../Contact/Contact"

const Sections = () => {
  return (
    // <div id="main-container">
    <>
      {/* <Header /> */}
      <Intro />
      <About />
      <Projects />
      <Contact />
    </>
  )
}

export default Sections

/*

header - Navbar
MAIN CONTAINER
  left - Social Links
  right - Email
  content/sections padding-100-150px
    main
      section1 - Intro
      section2 - About
      section3 - Projects
      section4 - Achievements
      section4 - Get in touch
    footer
    OR
  footer

*/
