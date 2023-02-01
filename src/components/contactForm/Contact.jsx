import React, { Fragment } from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div id="Contact">
      {" "}
      <Fragment>
        <section className="contact">
          <div className="contact-heading">
            <h2>Contact Me </h2>
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
            <div className="row">
              <div className="map-column">
                <div className="contact-map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29129.23776238196!2d79.58294376970623!3d24.13120400177718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398212fbbdab25bb%3A0x40e79685b558abc1!2sHatta%2C%20Madhya%20Pradesh%20470775!5e0!3m2!1sen!2sin!4v1673895165396!5m2!1sen!2sin"
                    width="100%"
                    height="450"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    style={{ border: 0 }}></iframe>
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
