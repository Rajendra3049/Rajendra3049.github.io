import React from "react";
import style from "../styles/skills.module.css";
export default function Skills() {
  return (
    <div className={style.outer_box}>
      <h1 className={style.main_heading}>Technical Skills</h1>
      <div className={style.main_box}>
        <div>
          <h1>Languages</h1>
          <div className={style.language_logo}>
            <div>
              <img src="./js.png" alt="JavaScript" />
            </div>
            <div style={{ width: "40%" }}>
              <img src="./ts.png" alt="TypeScript" />
            </div>
          </div>
          <p style={{ width: "90%", margin: "auto", textAlign: "center" }}>
            My favorite languages for software engineering
          </p>
        </div>

        <div className={style.frontend}>
          <h1>Front-End</h1>
          <div className={style.frontend_logo}>
            {" "}
            <div>
              <img src="./html.png" alt="html" />
            </div>
            <div>
              <img src="./css.png" alt="css" />
            </div>
            <div>
              <img src="./react.png" alt="React" />
            </div>
            <div>
              <img src="./next.png" alt="Next.js" />
            </div>
          </div>
          <p style={{ width: "90%", margin: "auto", textAlign: "center" }}>
            My preferred technologies for front-end web development and
            component design.
          </p>
        </div>

        <div className={style.backend}>
          <h1>Back-End</h1>
          <div className={style.backend_logo}>
            <div>
              <img src="./ex.png" alt="express" />
            </div>
            <div>
              <img src="./mongodb.png" alt="mongodb" />
            </div>
          </div>
          <p style={{ width: "90%", margin: "auto", textAlign: "center" }}>
            My preferred technologies for back-end web programming and database
            architecture.
          </p>
        </div>

        <div className={style.tools}>
          <h1>Tools</h1>
          <div className={style.tools_logo}>
            <div>
              <img src="./git.png" alt="git" />
            </div>
            <div>
              <img src="./github.png" alt="github" />
            </div>
          </div>
          <p style={{ width: "90%", margin: "auto", textAlign: "center" }}>
            My favorite tools for version control, code editing, and container
            orchestration.
          </p>
        </div>
      </div>
    </div>
  );
}
