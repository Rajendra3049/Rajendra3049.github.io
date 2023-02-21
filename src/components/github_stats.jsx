import style from "../styles/statistics.module.css";
import GitHubCalendar from "react-github-calendar";
import React from "react";
import { Bounce } from "react-reveal";
import Zoom from "react-reveal/Zoom";

import AOS from "aos";
import "aos/dist/aos.css";

export default function GithubStats() {
  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      {" "}
      <div className={style.outer_box}>
        <Bounce bottom>
          <h1 className={style.main_heading}>My Statistics</h1>
        </Bounce>

        <div className={style.flex_box}>
          <div data-aos="fade-right">
            <img
              src="https://github-readme-stats.vercel.app/api?username=rajendra3049&show_icons=true&locale=en"
              alt="stats"
            />
          </div>
          <div data-aos="fade-left">
            <img
              src="https://github-readme-streak-stats.herokuapp.com/?user=rajendra3049&"
              alt="contribution"
            />
          </div>
        </div>
      </div>
      <div className={style.outer_box}>
        <Bounce bottom>
          <h1 className={style.main_heading}>My Github Calender</h1>
        </Bounce>
        <div data-aos="fade-up" className={style.Calendar}>
          <GitHubCalendar username="rajendra3049" />
        </div>
      </div>
      <div className={style.outer_box}>
        <Bounce bottom>
          <h1 className={style.main_heading}>Github Contribution Graph</h1>
        </Bounce>
        <div className={style.Calendar}>
          <Zoom left>
            <img
              src="https://github-readme-activity-graph.cyclic.app/graph?username=Rajendra3049&theme=gotham"
              alt=""
            />
          </Zoom>
        </div>
      </div>
    </>
  );
}
