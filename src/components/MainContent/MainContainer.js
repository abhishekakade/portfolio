import React from "react"
import Intro from "../Intro/Intro"
// import Header from "../Header/Header"
import "./MainContainer.css"

const MainContent = () => {
  return (
    <div id="main-container">
      {/* <Header /> */}
      <Intro />
    </div>
  )
}

export default MainContent

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
