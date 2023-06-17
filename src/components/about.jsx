import React from "react";
import style from "../styles/about.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Resume from "../resume/Rajendra_Patel_Resume.pdf";
import Typewriter from "typewriter-effect";
import LightSpeed from "react-reveal/LightSpeed";

export default function About() {
  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div id="About" className={style.homepage}>
      <div className={style.image}>
        {/* <BookType /> */}
        <img src="./profile.jpg" alt="profile_img" />
      </div>
      <div className={style.name}>
        <LightSpeed right>
          <h1>Hi,</h1>
        </LightSpeed>
        <h1>
          {" "}
          <Typewriter
            options={{
              strings: ["I'm Rajendra Patel."],
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
            }}
          />
        </h1>

        <div className={style.flipBox}>
          <div className={style.flip}>
            <div>
              <div style={{ color: "white" }}>Quick Learner</div>
            </div>
            <div>
              <div style={{ color: "white" }}>Problem Solver</div>
            </div>
            <div>
              <div style={{ color: "white" }}>Adaptable</div>
            </div>
            <div>
              <div style={{ color: "white" }}>quick Learner</div>
            </div>
            <div>
              <div style={{ color: "white" }}>Problem Solver</div>
            </div>
            <div>
              <div style={{ color: "white" }}>Adaptable</div>
            </div>
          </div>
        </div>

        {/* <h1>Frontend Developer</h1> */}
        <LightSpeed Right>
          <p>
            Experienced MERN Stack developer with 1 month of hands-on
            experience. Proficient in coding and building websites using MERN
            stack and other web technologies. Strong problem-solving skills and
            collaborative mindset. Committed to leveraging my skills and
            experience to contribute to the development of high-quality
            websites.
          </p>
        </LightSpeed>

        <div>
          {" "}
          <a
            onClick={() => {
              window.open(
                "https://drive.google.com/file/d/1dS9Bh3tYen6oz6JCxEjsQOmOheJ3m-Uc/view?usp=share_link",
                "blank"
              );
            }}
            href={Resume}
            download="Rajendra_Patel_Resume"
            className={style.ResumeBtn}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Resume
          </a>
          <a
            href="#"
            onClick={() => {
              window.open(
                "https://drive.google.com/file/d/1dS9Bh3tYen6oz6JCxEjsQOmOheJ3m-Uc/view?usp=share_link",
                "_blank"
              );
            }}
            className={style.ResumeBtn}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            View Resume
          </a>
          {/*  */}
          <a
            href="https://github.com/Rajendra3049"
            className={style.githubBtn}
            target="_blank"
            rel="noreferrer">
            <AiFillGithub />
          </a>
          {/*  */}
          <a
            href="https://www.linkedin.com/in/rajendra-patel-308237238/"
            className={style.githubBtn}
            target="_blank"
            rel="noreferrer">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </div>
  );
}
