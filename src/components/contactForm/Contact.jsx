import React, { Fragment } from "react";
import "./Contact.css";
import { Bounce } from "react-reveal";
import { useColorMode } from "@chakra-ui/react";

const Contact = () => {
  const { colorMode } = useColorMode();

  return (
    <div id="Contact" style={{ color: "black" }}>
      {" "}
      <Fragment>
        <section className="contact">
          <div className="contact-heading">
            <Bounce bottom>
              <h2>Contact Me </h2>
            </Bounce>
          </div>
          <div className="container">
            <div className="row">
              <div className="column">
                <div className="contact-widget ">
                  <div className="contact-widget-item">
                    <div className="icon">
                      <i className="fa-solid fa-location-dot"></i>
                    </div>
                    <div className="text">
                      <h5>Address</h5>
                      <p>Hatta, dist Damoh, Madhya Pradesh</p>
                    </div>
                  </div>

                  <div className="contact-widget-item">
                    <div className="icon">
                      <i className="fa-solid fa-phone"></i>
                    </div>
                    <div className="text">
                      <h5>Contact me</h5>
                      <p>+918359833649</p>
                    </div>
                  </div>

                  <div className="contact-widget-item">
                    <div className="icon">
                      <i className="fa-regular fa-envelope"></i>
                    </div>
                    <div className="text">
                      <h5>Email</h5>
                      <p>Rajendrapatel3049@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="column">
                <div className="contact-form">
                  <form
                    action="https://getform.io/f/61d3e0a7-0201-4c30-b292-3f6cbaad847e"
                    method="POST">
                    <input type="text" name="name" placeholder="Name" />
                    <input type="email" name="email" placeholder="Email" />
                    <textarea
                      placeholder="Message"
                      type="text"
                      name="message"></textarea>
                    <button
                      type="submit"
                      className="site-btn"
                      formTarget="_blank">
                      {" "}
                      Send Message 
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    </div>
  );
};

export default Contact;
