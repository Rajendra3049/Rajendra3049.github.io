import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef, useState } from "react";

import style from "../styles/projects.module.css";
export default function Projects() {
  const [windowSize, setWindowSize] = useState(getWindowSize());
  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div className={style.outer_box}>
      <h1 className={style.main_heading}>Featured Projects</h1>

      {windowSize.innerWidth <= 720 ? (
        // mobile
        <div className={style.all_projects}>
          {/* project no 1 */}
          <div className={style.project}>
            {/* left */}
            <div className={style.project_img_box} data-aos="fade-right">
              <img src="./cricket.png" alt="" />
            </div>

            {/* right */}
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
                This was an individual project.Cricket.com website is a
                informational website from where users can get all the
                information cricket like match score updates, News, videos etc
              </p>
              <div className={style.project_button_box}>
                <a
                  href="https://masai-unit2-construct-week-project.netlify.app/"
                  target="_blank">
                  <button>Check it out!</button>
                </a>
                <a
                  href="https://github.com/Rajendra3049/Cricket.com-Clone"
                  target="_blank">
                  <button>Github Link</button>
                </a>
              </div>
            </div>
          </div>
          {/* project no 2 */}
          <div className={style.project}>
            <div className={style.project_img_box} data-aos="fade-right">
              <img src="./lifestore.png" alt="" />
            </div>
            <div className={style.project_description_box}>
              <h1>Lifestyle Store Clone</h1>
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
                This was a group project.We have created these website with the
                help of HTML, CSS And Javascript.My work was here to create
                Product's Page, Product's Details Page, Payment Page,Cart Page
                and Checkout Page.This was a collaborative project built by team
                of 5 members in 5 days.
              </p>
              <div className={style.project_button_box}>
                <a
                  href="https://lifestylestore-com-clone.vercel.app/"
                  target="_blank">
                  <button>Check it out!</button>
                </a>
                <a
                  href="https://github.com/Rajendra3049/Lifestylestore.com-Clone"
                  target="_blank">
                  <button>Github Link</button>
                </a>
              </div>
            </div>
          </div>
          {/* project no 3 */}
          <div className={style.project}>
            <div className={style.project_img_box} data-aos="fade-right">
              <img src="./pharmeasy.png" alt="" />
            </div>
            <div className={style.project_description_box}>
              <h1>PharmEasy Clone</h1>
              <div className={style.project_techStack_6}>
                <img
                  height="32"
                  width="32"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
                />
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
                <img
                  height="32"
                  width="32"
                  src="https://images.opencollective.com/chakra-ui-pro/61bd1dd/logo/256.png"
                />
                <img
                  height="32"
                  width="32"
                  src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                />
              </div>
              <p className={style.project_description}>
                This was an individual project. PharmEasy online store from
                where users can buy medicines and take services like lab tests
                etc. I Created this clone using React, HTML, CSS, Javascript and
                also used Chakra and Bootstrap for UI.
              </p>
              <div className={style.project_button_box}>
                <a
                  href="https://dispensable-underwear-8715-hxqh.vercel.app/"
                  target="_blank">
                  <button>Check it out!</button>
                </a>
                <a
                  href="https://github.com/Rajendra3049/PharmEasy.com-Clone"
                  target="_blank">
                  <button>Github Link</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // laptop
        <div className={style.all_projects}>
          {/* project no 1 */}
          <div className={style.project}>
            {/* left */}
            <div className={style.project_img_box} data-aos="fade-right">
              <img src="./cricket.png" alt="" />
            </div>

            {/* right */}
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
                This was an individual project.Cricket.com website is a
                informational website from where users can get all the
                information cricket like match score updates, News, videos etc
              </p>
              <div className={style.project_button_box}>
                <a
                  href="https://masai-unit2-construct-week-project.netlify.app/"
                  target="_blank">
                  <button>Check it out!</button>
                </a>
                <a
                  href="https://github.com/Rajendra3049/Cricket.com-Clone"
                  target="_blank">
                  <button>Github Link</button>
                </a>
              </div>
            </div>
          </div>
          {/* project no 2 */}
          <div className={style.project}>
            <div className={style.project_description_box}>
              <h1>Lifestyle Store Clone</h1>
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
                This was a group project.We have created these website with the
                help of HTML, CSS And Javascript.My work was here to create
                Product's Page, Product's Details Page, Payment Page,Cart Page
                and Checkout Page.This was a collaborative project built by team
                of 5 members in 5 days.
              </p>
              <div className={style.project_button_box}>
                <a
                  href="https://lifestylestore-com-clone.vercel.app/"
                  target="_blank">
                  <button>Check it out!</button>
                </a>
                <a
                  href="https://github.com/Rajendra3049/Lifestylestore.com-Clone"
                  target="_blank">
                  <button>Github Link</button>
                </a>
              </div>
            </div>
            <div className={style.project_img_box} data-aos="fade-left">
              <img src="./lifestore.png" alt="" />
            </div>
          </div>
          {/* project no 3 */}
          <div className={style.project}>
            <div className={style.project_img_box} data-aos="fade-right">
              <img src="./pharmeasy.png" alt="" />
            </div>
            <div className={style.project_description_box}>
              <h1>PharmEasy Clone</h1>
              <div className={style.project_techStack_6}>
                <img
                  height="32"
                  width="32"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
                />
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
                <img
                  height="32"
                  width="32"
                  src="https://images.opencollective.com/chakra-ui-pro/61bd1dd/logo/256.png"
                />
                <img
                  height="32"
                  width="32"
                  src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                />
              </div>
              <p className={style.project_description}>
                This was an individual project. PharmEasy online store from
                where users can buy medicines and take services like lab tests
                etc. I Created this clone using React, HTML, CSS, Javascript and
                also used Chakra and Bootstrap for UI.
              </p>
              <div className={style.project_button_box}>
                <a
                  href="https://dispensable-underwear-8715-hxqh.vercel.app/"
                  target="_blank">
                  <button>Check it out!</button>
                </a>
                <a
                  href="https://github.com/Rajendra3049/PharmEasy.com-Clone"
                  target="_blank">
                  <button>Github Link</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
