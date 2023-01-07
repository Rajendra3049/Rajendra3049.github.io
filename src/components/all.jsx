import About from "./about";
import Skills from "./skills";
import GithubStats from "./github_stats";
import Projects from "./project";

import Navbar from "./navbar";
export default function All() {
  return (
    <>
      <About />
      <Skills />
      <GithubStats />
      <Projects />
    </>
  );
}
