import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef, useState } from "react";
import Roll from "react-reveal/Roll";
import LightSpeed from "react-reveal/LightSpeed";
import Bounce from "react-reveal/Bounce";

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
    <div id="Projects" className={style.outer_box}>
      <Bounce bottom>
        <h1 className={style.main_heading}>Featured Projects</h1>
      </Bounce>

      {windowSize.innerWidth <= 720 ? (
        // mobile
        <div className={style.all_projects}>
          {/* project no 1 */}
          <div className={style.project}>
            <div className={style.project_img_box}>
              <img src="./wishkart.png" alt="" />
            </div>
            <div className={style.project_description_box}>
              <LightSpeed left>
                <h1>WishKart.com</h1>
              </LightSpeed>

              <div className={style.project_techStack_6}>
                <Roll left>
                  <img
                    height="32"
                    width="32"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
                    alt="tech-stack"
                  />
                </Roll>
                <Roll left>
                  <img
                    height="32"
                    width="32"
                    src="https://cdn-icons-png.flaticon.com/512/732/732212.png"
                    alt="tech-stack"
                  />
                </Roll>

                <Roll left>
                  <img
                    height="32"
                    width="32"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png"
                    alt="tech-stack"
                  />
                </Roll>

                <Roll left>
                  <img
                    height="32"
                    width="32"
                    src="https://icon-library.com/images/javascript-icon-png/javascript-icon-png-23.jpg"
                    alt="tech-stack"
                  />
                </Roll>

                <Roll left>
                  <img
                    height="32"
                    width="32"
                    src="https://images.opencollective.com/chakra-ui-pro/61bd1dd/logo/256.png"
                    alt="tech-stack"
                  />
                </Roll>

                <Roll left>
                  <img
                    height="32"
                    width="32"
                    src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                    alt="tech-stack"
                  />
                </Roll>
              </div>
              <p className={style.project_description}>
                This was a group project. The Tech stack which we used to create
                this website are Javascript ,React, Redux and also used Chakra
                for UI. My work was here to create Sign-In/Sign-Out with backend
                authentication, Admin Side to manage website.This was a
                collaborative project built by team of 5 members in 5 days.
              </p>
              <div className={style.project_button_box}>
                <a
                  href="https://wish-kart.vercel.app/"
                  target="_blank"
                  rel="noreferrer">
                  <button className={style.shrink_on_hover}>
                    Check it out!
                  </button>
                </a>
                <a
                  href="https://github.com/Rajendra3049/Wishkart"
                  target="_blank"
                  rel="noreferrer">
                  <button className={style.shrink_on_hover}>Github Link</button>
                </a>
              </div>
            </div>
          </div>

          {/* project no 2 */}
          <div className={style.project}>
            <div className={style.project_img_box} data-aos="fade-right">
              <img src="./pharmeasy.png" alt="" />
            </div>
            <div className={style.project_description_box}>
              <LightSpeed left>
                <h1>PharmEasy Clone</h1>
              </LightSpeed>
              <div className={style.project_techStack_6}>
                <Roll left>
                  <img
                    height="32"
                    width="32"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
                    alt="tech-stack"
                  />
                </Roll>
                <Roll left>
                  <img
                    height="32"
                    width="32"
                    src="https://cdn-icons-png.flaticon.com/512/732/732212.png"
                    alt="tech-stack"
                  />
                </Roll>

                <Roll left>
                  <img
                    height="32"
                    width="32"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png"
                    alt="tech-stack"
                  />
                </Roll>

                <Roll left>
                  <img
                    height="32"
                    width="32"
                    src="https://icon-library.com/images/javascript-icon-png/javascript-icon-png-23.jpg"
                    alt="tech-stack"
                  />
                </Roll>

                <Roll left>
                  <img
                    height="32"
                    width="32"
                    src="https://images.opencollective.com/chakra-ui-pro/61bd1dd/logo/256.png"
                    alt="tech-stack"
                  />
                </Roll>

                <Roll left>
                  <img
                    height="32"
                    width="32"
                    src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                    alt="tech-stack"
                  />
                </Roll>
              </div>
              <p className={style.project_description}>
                This was an individual project. PharmEasy online store from
                where users can buy medicines and take services like lab tests
                etc. I Created this clone using React, HTML, CSS, Javascript and
                also used Chakra and Bootstrap for UI.
              </p>
              <div className={style.project_button_box}>
                <a
                  href="https://dispensable-underwear-8715.vercel.app/"
                  target="_blank"
                  rel="noreferrer">
                  <button className={style.shrink_on_hover}>
                    Check it out!
                  </button>
                </a>
                <a
                  href="https://github.com/Rajendra3049/PharmEasy.com-Clone"
                  target="_blank"
                  rel="noreferrer">
                  <button className={style.shrink_on_hover}>Github Link</button>
                </a>
              </div>
            </div>
          </div>

          {/* project no 3 */}
          <div className={style.project}>
            <div className={style.project_img_box}>
              <img src="./lifestore.png" alt="" />
            </div>
            <div className={style.project_description_box}>
              <LightSpeed left>
                <h1>Lifestyle Store Clone</h1>
              </LightSpeed>
              <div className={style.project_techStack}>
                <Roll left>
                  <img
                    height="32"
                    width="32"
                    src="https://cdn-icons-png.flaticon.com/512/732/732212.png"
                    alt="tech-stack"
                  />
                </Roll>

                <Roll left>
                  <img
                    height="32"
                    width="32"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png"
                    alt="tech-stack"
                  />
                </Roll>

                <Roll left>
                  <img
                    height="32"
                    width="32"
                    src="https://icon-library.com/images/javascript-icon-png/javascript-icon-png-23.jpg"
                    alt="tech-stack"
                  />
                </Roll>

                <Roll left>
                  <img
                    height="32"
                    width="32"
                    src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                    alt="tech-stack"
                  />
                </Roll>
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
                  target="_blank"
                  rel="noreferrer">
                  <button className={style.shrink_on_hover}>
                    Check it out!
                  </button>
                </a>
                <a
                  href="https://github.com/Rajendra3049/Lifestylestore.com-Clone"
                  target="_blank"
                  rel="noreferrer">
                  <button className={style.shrink_on_hover}>Github Link</button>
                </a>
              </div>
            </div>
          </div>
          {/* project no 4 */}
          <div className={style.project}>
            {/* left */}
            <div className={style.project_img_box} data-aos="fade-right">
              <img src="./cricket.png" alt="" />
            </div>

            {/* right */}
            <div className={style.project_description_box}>
              <LightSpeed left>
                <h1>Cricket.com Clone</h1>
              </LightSpeed>
              <div className={style.project_techStack}>
                <Roll left>
                  <img
                    height="32"
                    width="32"
                    src="https://cdn-icons-png.flaticon.com/512/732/732212.png"
                    alt="tech-stack"
                  />
                </Roll>

                <Roll left>
                  <img
                    height="32"
                    width="32"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png"
                    alt="tech-stack"
                  />
                </Roll>

                <Roll left>
                  <img
                    height="32"
                    width="32"
                    src="https://icon-library.com/images/javascript-icon-png/javascript-icon-png-23.jpg"
                    alt="tech-stack"
                  />
                </Roll>

                <Roll left>
                  <img
                    height="32"
                    width="32"
                    src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                    alt="tech-stack"
                  />
                </Roll>
              </div>
              <p className={style.project_description}>
                This was an individual project.Cricket.com website is a
                informational website from where users can get all the
                information cricket like match score updates, News, videos etc
              </p>
              <div className={style.project_button_box}>
                <a
                  href="https://masai-unit2-construct-week-project.netlify.app/"
                  target="_blank"
                  rel="noreferrer">
                  <button className={style.shrink_on_hover}>
                    Check it out!
                  </button>
                </a>
                <a
                  href="https://github.com/Rajendra3049/Cricket.com-Clone"
                  target="_blank"
                  rel="noreferrer">
                  <button className={style.shrink_on_hover}>Github Link</button>
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
            <div className={style.project_description_box}>
              <LightSpeed left>
                <h1>WishKart.com</h1>
              </LightSpeed>
              <div className={style.project_techStack_6}>
                <Roll left>
                  <img
                    height="32"
                    width="32"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
                    alt="tech-stack"
                  />
                </Roll>
                <Roll left>
                  <img
                    height="32"
                    width="32"
                    src="https://cdn-icons-png.flaticon.com/512/732/732212.png"
                    alt="tech-stack"
                  />
                </Roll>

                <Roll left>
                  <img
                    height="32"
                    width="32"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png"
                    alt="tech-stack"
                  />
                </Roll>

                <Roll left>
                  <img
                    height="32"
                    width="32"
                    src="https://icon-library.com/images/javascript-icon-png/javascript-icon-png-23.jpg"
                    alt="tech-stack"
                  />
                </Roll>

                <Roll left>
                  <img
                    height="32"
                    width="32"
                    src="https://images.opencollective.com/chakra-ui-pro/61bd1dd/logo/256.png"
                    alt="tech-stack"
                  />
                </Roll>

                <Roll left>
                  <img
                    height="32"
                    width="32"
                    src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                    alt="tech-stack"
                  />
                </Roll>
              </div>
              <p className={style.project_description}>
                This was a group project. The Tech stack which we used to create
                this website are Javascript ,React, Redux and also used Chakra
                for UI. My work was here to create Sign-In/Sign-Out with backend
                authentication, Admin Side to manage website.This was a
                collaborative project built by team of 5 members in 5 days.
              </p>
              <div className={style.project_button_box}>
                <a
                  href="https://wish-kart.vercel.app/"
                  target="_blank"
                  rel="noreferrer">
                  <button className={style.shrink_on_hover}>
                    Check it out!
                  </button>
                </a>
                <a
                  href="https://github.com/Rajendra3049/Wishkart"
                  target="_blank"
                  rel="noreferrer">
                  <button className={style.shrink_on_hover}>Github Link</button>
                </a>
              </div>
            </div>

            <div className={style.project_img_box}>
              <img src="./wishkart.png" alt="" />
            </div>
          </div>

          {/* project no 2 */}
          <div className={style.project}>
            <div className={style.project_img_box} data-aos="fade-right">
              <img src="./pharmeasy.png" alt="" />
            </div>
            <div className={style.project_description_box}>
              <LightSpeed right>
                <h1>PharmEasy Clone</h1>
              </LightSpeed>
              <div className={style.project_techStack_6}>
                <Roll left>
                  <img
                    height="32"
                    width="32"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
                    alt="tech-stack"
                  />
                </Roll>
                <Roll left>
                  <img
                    height="32"
                    width="32"
                    src="https://cdn-icons-png.flaticon.com/512/732/732212.png"
                    alt="tech-stack"
                  />
                </Roll>

                <Roll left>
                  <img
                    height="32"
                    width="32"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png"
                    alt="tech-stack"
                  />
                </Roll>

                <Roll left>
                  <img
                    height="32"
                    width="32"
                    src="https://icon-library.com/images/javascript-icon-png/javascript-icon-png-23.jpg"
                    alt="tech-stack"
                  />
                </Roll>

                <Roll left>
                  <img
                    height="32"
                    width="32"
                    src="https://images.opencollective.com/chakra-ui-pro/61bd1dd/logo/256.png"
                    alt="tech-stack"
                  />
                </Roll>

                <Roll left>
                  <img
                    height="32"
                    width="32"
                    src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                    alt="tech-stack"
                  />
                </Roll>
              </div>
              <p className={style.project_description}>
                This was an individual project. PharmEasy online store from
                where users can buy medicines and take services like lab tests
                etc. I Created this clone using React, HTML, CSS, Javascript and
                also used Chakra and Bootstrap for UI.
              </p>
              <div className={style.project_button_box}>
                <a
                  href="https://dispensable-underwear-8715.vercel.app/"
                  target="_blank"
                  rel="noreferrer">
                  <button className={style.shrink_on_hover}>
                    Check it out!
                  </button>
                </a>
                <a
                  href="https://github.com/Rajendra3049/PharmEasy.com-Clone"
                  target="_blank"
                  rel="noreferrer">
                  <button className={style.shrink_on_hover}>Github Link</button>
                </a>
              </div>
            </div>
          </div>

          {/* project no 3 */}
          <div className={style.project}>
            <div className={style.project_description_box}>
              <LightSpeed left>
                <h1>Lifestyle Store Clone</h1>
              </LightSpeed>

              <div className={style.project_techStack}>
                <Roll left>
                  <img
                    height="32"
                    width="32"
                    src="https://cdn-icons-png.flaticon.com/512/732/732212.png"
                    alt="tech-stack"
                  />
                </Roll>

                <Roll left>
                  <img
                    height="32"
                    width="32"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png"
                    alt="tech-stack"
                  />
                </Roll>

                <Roll left>
                  <img
                    height="32"
                    width="32"
                    src="https://icon-library.com/images/javascript-icon-png/javascript-icon-png-23.jpg"
                    alt="tech-stack"
                  />
                </Roll>

                <Roll left>
                  <img
                    height="32"
                    width="32"
                    src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                    alt="tech-stack"
                  />
                </Roll>
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
                  target="_blank"
                  rel="noreferrer">
                  <button className={style.shrink_on_hover}>
                    Check it out!
                  </button>
                </a>
                <a
                  href="https://github.com/Rajendra3049/Lifestylestore.com-Clone"
                  target="_blank"
                  rel="noreferrer">
                  <button className={style.shrink_on_hover}>Github Link</button>
                </a>
              </div>
            </div>
            <div className={style.project_img_box}>
              <img src="./lifestore.png" alt="" />
            </div>
          </div>

          {/* project no 4 */}
          <div className={style.project}>
            {/* left */}
            <div className={style.project_img_box} data-aos="fade-right">
              <img src="./cricket.png" alt="" />
            </div>

            {/* right */}
            <div className={style.project_description_box}>
              <LightSpeed left>
                <h1>Cricket.com Clone</h1>
              </LightSpeed>
              <div className={style.project_techStack}>
                <Roll left>
                  <img
                    height="32"
                    width="32"
                    src="https://cdn-icons-png.flaticon.com/512/732/732212.png"
                    alt="tech-stack"
                  />
                </Roll>

                <Roll left>
                  <img
                    height="32"
                    width="32"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png"
                    alt="tech-stack"
                  />
                </Roll>

                <Roll left>
                  <img
                    height="32"
                    width="32"
                    src="https://icon-library.com/images/javascript-icon-png/javascript-icon-png-23.jpg"
                    alt="tech-stack"
                  />
                </Roll>

                <Roll left>
                  <img
                    height="32"
                    width="32"
                    src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                    alt="tech-stack"
                  />
                </Roll>
              </div>
              <p className={style.project_description}>
                This was an individual project.Cricket.com website is a
                informational website from where users can get all the
                information cricket like match score updates, News, videos etc
              </p>
              <div className={style.project_button_box}>
                <a
                  href="https://masai-unit2-construct-week-project.netlify.app/"
                  target="_blank"
                  rel="noreferrer">
                  <button className={style.shrink_on_hover}>
                    Check it out!
                  </button>
                </a>
                <a
                  href="https://github.com/Rajendra3049/Cricket.com-Clone"
                  target="_blank"
                  rel="noreferrer">
                  <button className={style.shrink_on_hover}>Github Link</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
