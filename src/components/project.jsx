import style from "../styles/projects.module.css";
export default function Projects() {
  return (
    <div className={style.outer_box}>
      <h1 className={style.main_heading}>Featured Projects</h1>
      <div className={style.all_projects}>
        {/* project no 1 */}
        <div className={style.project}>
          <div className={style.project_img_box}>
            <img src="./cricket.png" alt="" />
          </div>
          <div className={style.project_description_box}>
            <h1>Cricket.com Clone</h1>
            <div className={style.project_techStack}>
              <img
                height="32"
                width="32"
                src="https://cdn-icons-png.flaticon.com/512/732/732212.png"
              />
              <img
                height="32"
                width="32"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png"
              />
              <img
                height="32"
                width="32"
                src="https://icon-library.com/images/javascript-icon-png/javascript-icon-png-23.jpg"
              />
              <a href="">
                <img
                  height="32"
                  width="32"
                  src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                />
              </a>
            </div>
            <p className={style.project_description}>
              This is an individual project where I cloned most of the pages of
              the cricket.com website. Cricket.com website is a informational
              website from where users can get all the information cricket like
              match score updates, News, videos etc
            </p>
            <div className={style.project_button_box}>
              <a href="">
                <button>Check it out!</button>
              </a>
              <a href="">
                <button>Github Link</button>
              </a>
            </div>
          </div>
        </div>
        {/* project no 2 */}
        <div className={style.project}>
          <div className={style.project_img_box_right}>
            <img src="./cricket.png" alt="" />
          </div>
          <div className={style.project_description_box_left}>
            <h1>Cricket.com Clone</h1>
            <div className={style.project_techStack}>
              <img
                height="32"
                width="32"
                src="https://cdn-icons-png.flaticon.com/512/732/732212.png"
              />
              <img
                height="32"
                width="32"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png"
              />
              <img
                height="32"
                width="32"
                src="https://icon-library.com/images/javascript-icon-png/javascript-icon-png-23.jpg"
              />
              <a href="">
                <img
                  height="32"
                  width="32"
                  src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                />
              </a>
            </div>
            <p className={style.project_description}>
              This is an individual project where I cloned most of the pages of
              the cricket.com website. Cricket.com website is a informational
              website from where users can get all the information cricket like
              match score updates, News, videos etc
            </p>
            <div className={style.project_button_box}>
              <a href="">
                <button>Check it out!</button>
              </a>
              <a href="">
                <button>Github Link</button>
              </a>
            </div>
          </div>
        </div>
        {/* project no 3 */}
        <div className={style.project}>
          <div className={style.project_img_box}>
            <img src="./cricket.png" alt="" />
          </div>
          <div className={style.project_description_box}>
            <h1>Cricket.com Clone</h1>
            <div className={style.project_techStack}>
              <img
                height="32"
                width="32"
                src="https://cdn-icons-png.flaticon.com/512/732/732212.png"
              />
              <img
                height="32"
                width="32"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png"
              />
              <img
                height="32"
                width="32"
                src="https://icon-library.com/images/javascript-icon-png/javascript-icon-png-23.jpg"
              />
              <a href="">
                <img
                  height="32"
                  width="32"
                  src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                />
              </a>
            </div>
            <p className={style.project_description}>
              This is an individual project where I cloned most of the pages of
              the cricket.com website. Cricket.com website is a informational
              website from where users can get all the information cricket like
              match score updates, News, videos etc
            </p>
            <div className={style.project_button_box}>
              <a href="">
                <button>Check it out!</button>
              </a>
              <a href="">
                <button>Github Link</button>
              </a>
            </div>
          </div>
        </div>

        {/* project no 4 */}
        <div className={style.project}>
          <div className={style.project_img_box_right}>
            <img src="./cricket.png" alt="" />
          </div>
          <div className={style.project_description_box_left}>
            <h1>Cricket.com Clone</h1>
            <div className={style.project_techStack}>
              <img
                height="32"
                width="32"
                src="https://cdn-icons-png.flaticon.com/512/732/732212.png"
              />
              <img
                height="32"
                width="32"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png"
              />
              <img
                height="32"
                width="32"
                src="https://icon-library.com/images/javascript-icon-png/javascript-icon-png-23.jpg"
              />
              <a href="">
                <img
                  height="32"
                  width="32"
                  src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                />
              </a>
            </div>
            <p className={style.project_description}>
              This is an individual project where I cloned most of the pages of
              the cricket.com website. Cricket.com website is a informational
              website from where users can get all the information cricket like
              match score updates, News, videos etc
            </p>
            <div className={style.project_button_box}>
              <a href="">
                <button>Check it out!</button>
              </a>
              <a href="">
                <button>Github Link</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
