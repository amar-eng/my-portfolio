import React from "react";
import emailjs from "emailjs-com";
import "./Contact.scss";
import { BiPhone } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import "../Button/Button.scss";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_4iy84wo",
        "template_cf0falh",
        e.target,
        "user_4FKDNgbripnhL5IQgL6RQ"
      )
      .then((res) => {
        console.log(res.text);
      })
      .catch((err) => {
        console.log(err.text);
      });
  }

  return (
    <div className="contact-body">
      <h1 className="contact__header">Let's Talk</h1>
      <div className="contact">
        <div className="contact__info">
          <div className="contact__info-header">Contact info</div>
          <div className="contact__info-content">Feel feel to reach out!</div>
          <div className="icon-text">
            <BiPhone
              style={{
                fontSize: "1.8rem",
                color: "#fafafa",
                marginRight: "2rem",
              }}
            />
            <span className="span-content">1-(647)-767-8903</span>
          </div>
          <div className="icon-text">
            <HiOutlineMail
              style={{
                fontSize: "1.8rem",
                color: "#fafafa",
                marginRight: "2rem",
              }}
            />
            <span className="span-content">am24mo@gmail.com</span>
          </div>
          <div className="socials">
            <a className="icon-circle">
              <AiFillGithub
                style={{
                  color: "#4078c0",
                  fontSize: "30px",
                  cursor: "pointer",
                }}
                onClick={() => window.open(`https://github.com/amar-eng`)}
              />
            </a>
            <a className="icon-circle">
              <AiFillLinkedin
                style={{
                  color: " #0e76a8",
                  fontSize: "30px",
                  cursor: "pointer",
                }}
                onClick={() =>
                  window.open(`https://www.linkedin.com/in/amar-mohamud/`)
                }
              />
            </a>
          </div>
          {/* <div className="mylogo"></div> */}
        </div>

        <form onSubmit={sendEmail}>
          <div className="col">
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" name="name" id="name" placeholder="John Doe" />
            </div>

            <div className="form-group">
              <label>E-mail</label>
              <input
                type="email"
                name="user_email"
                id="email"
                placeholder="john-doe@example.com"
              />
            </div>
          </div>

          <div className="col">
            <div className="form-group">
              {/* <label className="textArea__message" id="message">
                Message
              </label> */}
              <textarea
                className="textAreas"
                name="message"
                placeholder="Type your message here"
              ></textarea>
            </div>
          </div>
          <button
            className="hero__btn buttn"
            style={{
              color: "rgb(220, 206, 194)",
              backgroundColor: "#05203b",
              // marginLeft: "3rem",
            }}
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
