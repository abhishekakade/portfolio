import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
// import logo from "../../images/logo.png"
// import { Link } from "gatsby"
// import * as ResumePDF from "../../resume/abhisheks_resume.pdf"
import "./Header.css"

const Header = () => {
  const windowGlobal = typeof window !== "undefined" && window
  let [position, setPosition] = useState(windowGlobal.pageYOffset)
  let [visible, setVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      let temp = windowGlobal.pageYOffset

      setVisible(position > temp)
      setPosition(temp)
    }
    windowGlobal.addEventListener("scroll", handleScroll)
    return () => {
      windowGlobal.removeEventListener("scroll", handleScroll)
    }
  })

  const handleSidebar = () => {
    const navToggle = document.getElementById("nav-toggle")
    const sidebarNav = document.getElementById("nav-list")
    navToggle.classList.toggle("animate-toggle")
    sidebarNav.classList.toggle("active")
  }

  return (
    <header className={!visible ? "hide-header-navbar" : "show-header-navbar"}>
      <nav id="navbar">
        {/* <img
          height="38.5px"
          width="29px"
          src={logo}
          alt="logo"
          style={{
            marginBottom: 0,
          }}
        /> */}
        <button
          id="nav-toggle"
          aria-label="Navigation Menu Button"
          onClick={handleSidebar}
        >
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </button>
        <ul id="nav-list">
          <li>
            <a
              href="#about"
              className="navlinks"
              aria-label="Jump to About section"
              onClick={handleSidebar}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="navlinks"
              aria-label="Jump to Projects section"
              onClick={handleSidebar}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="navlinks"
              aria-label="Jump to Contact section"
              onClick={handleSidebar}
            >
              Contact
            </a>
          </li>
          <li>
            <a
              // href={ResumePDF}
              href="https://abhishekakade.github.io/resume"
              type="application/pdf"
              target="_blank"
              rel="noopener noreferrer nofollow"
              aria-label="Download Abhishek's Resume File PDF"
              className="navlinks resume"
              onClick={handleSidebar}
              style={{
                color: "#64ffda",
                padding: "0.5rem 0.75rem",
                margin: "auto 1.25rem",
                border: "1px solid #64ffda",
                borderRadius: "4px",
              }}
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
