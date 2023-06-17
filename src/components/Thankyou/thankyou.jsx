import React from "react";
import styled from "./thankyou.module.css";

const ThankYou = () => {
  const handleHireMeClick = () => {
    const email = "Rajendrapatel3049@gmail.com";
    const subject = "Interested in Hiring You.";
    const body = "Hello Rajendra,";
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };
  return (
    <div className={styled.content}>
      <div className={styled.wrapper_1}>
        <div className={styled.wrapper_2}>
          <p
            style={{
              color: "#287ff9",
              fontFamily: "Kaushan Script, cursive",
            }}>
            Thank you!
          </p>
          <p>Thank you for taking the time to visit my portfolio.</p>
          <p>I appreciate your consideration and interest in my work.</p>
          <button className={styled.go_home} onClick={handleHireMeClick}>
            Hire Me
          </button>
        </div>
        <div className={styled.footer_like}>
          <p>
            Made with <span>&hearts;</span> by <a href="#">Rajendra Patel</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
