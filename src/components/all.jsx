import React, { Fragment } from "react";
import About from "./about";
import Skills from "./skills";
import GithubStats from "./github_stats";
import Projects from "./project";
import Contact from "./contactForm/Contact.jsx";
export default function All() {
  return (
    <>
      <About />
      <Skills />
      <GithubStats />
      <Projects />
      <Fragment>
        <Contact />
      </Fragment>
    </>
  );
}
