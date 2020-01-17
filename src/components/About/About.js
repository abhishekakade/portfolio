import React from "react"
import "./About.css"

const About = () => {
  return (
    <section id="about">
      <h3 className="title">About Me</h3>
      <hr className="hr-green" />
      <p>
        Hello! I'm Abhishek, a Front End Developer based in Karad, Maharashtra
        who enjoys building stuff with JavaScript and React. I develop{" "}
        <span className="highlight-text-white">
          fast, responsive and accessible websites/web apps
        </span>{" "}
        which perform well on all devices, even on slower networks.
      </p>
      <p>
        Computers have always fascinated me. I'm a dentist but I first dabbled
        into web development out of interest in the Internet. I wanted to learn
        more about how everything was made available so easily for anyone to
        access from any part of the world. I started reading about web
        development in my final year of dentistry and then actually started
        learning web development in internship from resources like freeCodeCamp,
        YouTube, MDN, Reddit, Medium, etc.
        {/* Then it became something more than just interest. It became my passion.  */}
      </p>
      <p>
        Later, I got to know about Google India Scholarship. I applied, worked
        hard and got selected in the top 350 out of 10k applicants all over
        India to receive Google-Udacity's Front-End Nanodegree. This was HUGE
        for me and it changed my life forever! I successfully{" "}
        <a
          href="https://graduation.udacity.com/confirm/DEJDC66D"
          target="_blank"
          rel="nofollow noopener noreferrer"
          style={{
            fontFamily: "Roboto",
          }}
        >
          graduated
        </a>{" "}
        from the Front-End Nanodegree and started learning more on my own. Here
        are a few technologies I've been working with recently and the skills
        I've picked up so far:
      </p>
    </section>
  )
}

export default About

/*

---
title: 'About Me'
avatar: './me.jpg'
skills:
  - JavaScript (ES6+)
  - TypeScript
  - ReactJS, GatsbyJS
  - React Native
  - GraphQL
  - HTML5, CSS3, SCSS
  - Progressive Web Apps (PWA)
  - Performance Optimizations
  - Accessibility
  - Responsive Layouts
  - Some Node, Express, MongoDB
  - Some Python and Golang
---

Hello! I'm Abhishek, a Front End Developer based in Karad, Maharashtra who enjoys building stuff with JavaScript and React. I develop responsive websites and web apps that are optimized to run fast on any and all devices.

Computers have always fascinated me. I'm a dentist but I first dabbled into web development out of interest in web, the Internet and then Computer Science. I started reading about web development in my final year in dentistry and then started learning web development in internship from resources like freeCodeCamp, YouTube, MDN, Reddit, Medium, etc. Then it became something more than just interest. It became my passion. Around that time, I got to know about Google India Scholarship. I applied, worked hard and got selected in the top 350 out of 10k applicants in India to receive Google-Udacity's Front-End Nanodegree. I successfully graduated from the Front-End Nanodegree and started learning more on my own.

Here are a few technologies I've been working with recently and the skills I've picked up so far:


*/
