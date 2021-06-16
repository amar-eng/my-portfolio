import React from "react";
import emailjs from "emailjs-com";
import "./Contact.scss";
import { BiPhone } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import "../Button/Button.scss";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";

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
  // (function () {
  //   emailjs.init("user_4FKDNgbripnhL5IQgL6RQ");
  // })();
  // function sendEmail() {
  //   let fullName = document.getElementById("name").value;
  //   let userEmail = document.getElementById("email").value;
  //   let userMessage = document.getElementById("message").value;
  //   var contactParams = {
  //     from_name: fullName,
  //     from_email: userEmail,
  //     message: userMessage,
  //   };
  //   emailjs
  //     .send("service_4iy84wo", "template_cf0falh", contactParams)
  //     .then(function (res) {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }
  return (
    <div className="contact-body">
      <h1 className="contact__header">Let's Talk</h1>
      <div className="contact">
        <div className="contact__info">
          <div className="contact__info-header">Contact information</div>
          <div className="contact__info-content">
            Fill up the form and click send
          </div>
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
        </div>

        <form onSubmit={sendEmail}>
          <div className="col">
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" name="name" id="name" />
            </div>

            <div className="form-group">
              <label>E-mail</label>
              <input type="email" name="user_email" id="email" />
            </div>
          </div>
          <div className="butns">
            <div className="form">
              <label className="form__title">
                What kind of service can I provide you with?
              </label>
              <div className="radio">
                <div className="radio__content">
                  <input type="radio" name="job" value="Job" id="radiojob" />
                  <label htmlFor="radiojob">Job Opportunity</label>
                </div>
                <div className="radio__content">
                  <input
                    type="radio"
                    name="e-commerce"
                    value="e-commerce"
                    id="radioecommerce"
                  />
                  <label htmlFor="radioecommerce">E-commerce</label>
                </div>
                <div className="radio__content">
                  <input
                    type="radio"
                    name="personal"
                    value="Personal"
                    id="radiopersonal"
                  />
                  <label htmlFor="radiopersonal">Personal</label>
                </div>
              </div>
            </div>
          </div>
          <div className="butns">
            <div className="textArea">
              <label className="textArea__message" id="message">
                Message
              </label>
              <textarea className="textAreas" name="message"></textarea>
            </div>
          </div>
          <button
            className="hero__btn"
            style={{
              color: "rgb(220, 206, 194)",
              backgroundColor: "#05203b",
            }}
          >
            Send Message
          </button>
          {/* <input type="submit" value="Send" /> */}
        </form>
      </div>
    </div>
  );
};

export default Contact;
