import React, { Fragment } from "react";
import About from "./about";
import Skills from "./skills";
import GithubStats from "./github_stats";
import Projects from "./project";
import Contact from "./contactForm/Contact.jsx";
import { AiFillHeart } from "react-icons/ai";
import { Text, Icon } from "@chakra-ui/react";

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
