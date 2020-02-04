import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
// import { Link } from "gatsby"
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
              href="#resume"
              aria-label="Download Abhishek's resume file"
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
