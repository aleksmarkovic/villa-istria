import React from "react";
import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form, Button } from "react-bootstrap";

const defaultData = {
  name: "Your Name",
  email: "Email Address",
  phone: "Phone",
  subject: "Subject",
  message: "Write Message",
};

const emailSettings = {
  service_id: "service_f409vha",
  template_id: "template_0xao7ep",
  user_id: "cmXaC7eHwGHFeFlLf",
  template_params: defaultData,
};

const Contact = () => {
  const onSend = (event) => {
    event.preventDefault();

    console.log("sending...");
    console.log(event.target.elements);
    axios.post(
      "https://api.emailjs.com/api/v1.0/email/send",
      {
        ...emailSettings,
        template_params: {
          name: event.target.elements.name.value || defaultData.name,
          email: event.target.elements.email.value || defaultData.email,
          phone: event.target.elements.phone.value || defaultData.phone,
          subject: event.target.elements.subject.value || defaultData.subject,
          message: event.target.elements.message.value || defaultData.message,
        },
      },
      {
        contentType: "application/json",
        token: "qio8EhSA-cnGIPP76xasr",
      }
    );
  };

  return (
    <section className="contact-area pt-200 pb-80 fix">
      <div className="container">
        <div className="row">
          <div className="col-xxl-5 col-xl-6 col-lg-6">
            <div className="section-title-wrapper mb-15">
              <h5 className="section-subtitle mb-20">contact with us</h5>
              <h2 className="section-title">Speak with our consultant</h2>
            </div>
            <div className="contact-info mr-50 mr-xs-0  mr-md-0">
              <div className="single-contact-info d-flex align-items-center">
                <div className="contact-info-icon">
                  <a href="#">
                    <i>
                      <FontAwesomeIcon icon={["fas", "comments"]} />
                    </i>
                  </a>
                </div>
                <div className="contact-info-text mt-10">
                  <span>Call Us</span>
                  <h5>
                    <a href="tel:+385919304368">+385919304368</a>
                  </h5>
                </div>
              </div>
              <div className="single-contact-info d-flex align-items-center">
                <div className="contact-info-icon">
                  <a href="#">
                    <i>
                      <FontAwesomeIcon icon={["fas", "envelope"]} />
                    </i>
                  </a>
                </div>
                <div className="contact-info-text mt-10">
                  <span>send email</span>
                  <h5>
                    <a href="mailto:info@villa-istria.hr">
                      info@villa-istria.hr
                    </a>{" "}
                  </h5>
                </div>
              </div>
              <div className="single-contact-info d-flex align-items-center">
                <div className="contact-info-icon">
                  <a href="#">
                    <i>
                      <FontAwesomeIcon icon={["fas", "map-marker-alt"]} />
                    </i>
                  </a>
                </div>
                <div className="contact-info-text mt-10">
                  <span>visit office</span>
                  <h5>
                    <a href="#">86 Road Broklyn Street, New York</a>
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-7 col-xl-6 col-lg-6">
            <div className="contact-form">
              <Form onSubmit={onSend} id="contact-form">
                <div className="row">
                  <div className="col-xxl-6 col-xl-6 col-lg-6 mb-20">
                    <Form.Control
                      name="name"
                      type="input"
                      placeholder={defaultData.name}
                    />
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg-6 mb-20">
                    <Form.Control
                      id="email"
                      type="input"
                      placeholder={defaultData.email}
                    />
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg-6 mb-20">
                    <Form.Control id="phone" type="input" placeholder="Phone" />
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg-6 mb-20">
                    <Form.Control
                      id="subject"
                      type="input"
                      placeholder={defaultData.subject}
                    />
                  </div>
                  <div className="col-xxl-12 col-xl-12 col-lg-12 mb-20">
                    <Form.Control
                      placeholder={defaultData.message}
                      type="text"
                      name="message"
                    ></Form.Control>
                  </div>
                  <div className="col-xxl-12 col-xl-12 mb-20">
                    <Button type="submit" className="theme-btn border-btn">
                      Send a message
                    </Button>
                  </div>
                </div>
              </Form>
              <p className="ajax-response"></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
