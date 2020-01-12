import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./Header.css"

// const Header = ({ siteTitle }) => (
const Header = () => (
  <header
    style={{
      // background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <nav id="navbar">
      <ul id="nav-list">
        <li>
          <Link to="#" className="navlinks">
            About
          </Link>
        </li>
        <li>
          <Link to="#" className="navlinks">
            Projects
          </Link>
        </li>
        <li>
          <Link to="#" className="navlinks">
            Contact
          </Link>
        </li>
        <li>
          <Link
            to="#"
            className="navlinks resume"
            style={{
              color: "#64ffda",
              padding: "0.5rem 0.75rem",
              margin: "auto 1.25rem",
              border: "1px solid #64ffda",
              borderRadius: "5px",
            }}
          >
            Resume
          </Link>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
