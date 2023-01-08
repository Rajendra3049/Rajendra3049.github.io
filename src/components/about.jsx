import React from "react";
import style from "../styles/about.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Resume from "../resume/Rajendra_Patel_Resume.pdf";

export default function About() {
  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className={style.homepage}>
      <div className={style.image}>
        <img src="./profile.jpg" alt="" />
      </div>
      <div className={style.name}>
        <h1 data-aos="zoom-out">Hi,</h1>
        <h1>I'm Rajendra Patel</h1>
        <h1>Frontend Developer</h1>
        <p>
          A highly motivated Front Developer with extensive knowledge of
          HTML,CSS,JavaScript, React js,and Next js. Experienced in developing,
          testing, and deploying frontend applications. Highly organized and
          detail-oriented, with the ability to quickly understand complex
          requirements and work in a fast paced environment. Dedicated to
          providing excellent customer service and meeting project deadlines.
        </p>
        <a
          href={Resume}
          className={style.ResumeBtn}
          download="Rajendra_Patel_Resume">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Resume
        </a>
      </div>
    </div>
  );
}
