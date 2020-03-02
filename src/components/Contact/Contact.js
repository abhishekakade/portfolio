import React from "react"
import ScrollAnimation from "react-animate-on-scroll"
import "./Contact.css"
const Contact = () => {
  return (
    <section id="contact">
      <ScrollAnimation animateIn="fadeIn">
        <h3 className="title">Get In Touch</h3>
        <hr className="hr-green" />
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn">
        <p>
          Feel free to send me an email any time, whether it is about freelance
          work or a project or just to talk about web development. I'll get back
          to you as soon as possible.
        </p>

        <a className="get-in-touch-btn" href="mailto:abhishekakade@gmail.com">
          Say Hi!
        </a>
      </ScrollAnimation>
    </section>
  )
}

export default Contact
