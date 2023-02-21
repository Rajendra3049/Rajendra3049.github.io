import style from "../styles/bookstyle.module.css";
import Typewriter from "typewriter-effect";

export default function BookType() {
  return (
    <>
      <div className={style.card}>
        <div className={style.imgbox}>
          <img src="./profile.jpg" />
          <img src="./profile3.JPG" />
        </div>
        <div className={style.details}>
          <div className={style.content}>
            <h2>
              <Typewriter
                options={{
                  strings: ["I'm Rajendra Patel."],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                }}
              />
              <span className={style.profession}>Full Stack Web Developer</span>
            </h2>
            <div className={style.social_icons}>
              <a
                href="https://github.com/Rajendra3049"
                target="_blank"
                rel="noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/rajendra-patel-308237238/"
                target="_blank"
                rel="noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              {/* <a
                href="https://priyanshshrivastava.hashnode.dev/"
                target="_blank"
                rel="noreferrer">
                <i className="fab fa-hashnode"></i>
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
