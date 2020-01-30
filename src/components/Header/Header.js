import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
// import { Link } from "gatsby"
import "./Header.css"

// const Header = ({ siteTitle }) => (
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

  return (
    <header className={!visible ? "hide-header-navbar" : "show-header-navbar"}>
      <nav id="navbar">
        <ul id="nav-list">
          <li>
            <a
              href="#about"
              className="navlinks"
              aria-label="Jump to About section"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="navlinks"
              aria-label="Jump to Projects section"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="navlinks"
              aria-label="Jump to Contact section"
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="#resume"
              aria-label="Download Abhishek's resume file"
              className="navlinks resume"
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
