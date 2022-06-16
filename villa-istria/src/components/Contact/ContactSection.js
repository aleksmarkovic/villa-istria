import React, { useState } from "react";
import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form, Button, Alert } from "react-bootstrap";

const defaultData = {
  name: "Your Name",
  email: "Email Address",
  phone: "Phone",
  subject: "Subject",
  message: "Write Message",
};

const emailSettings = {
  service_id: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  template_id: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
  user_id: process.env.NEXT_PUBLIC_EMAILJS_USER_ID,
  template_params: defaultData,
};

const Contact = () => {
  const [alert, setAlert] = useState();

  const onSend = (event) => {
    event.preventDefault();

    axios
      .post(
        process.env.NEXT_PUBLIC_EMAILJS_URL,
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
          token: process.env.NEXT_PUBLIC_EMAILJS_TOKEN,
        }
      )
      .then(() => setAlert("success"))
      .catch(() => setAlert("danger"));
  };

  return (
    <section className="contact-area pt-200 mt-50 pb-200">
      <div className="container justify-content-center">
        <div className="row">
          <div className="col-xxl-5 col-xl-6 col-lg-6">
            <div className="section-title-wrapper mb-15">
              <h2 className="section-title">Contact info</h2>
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
                  <span>Call or message us</span>
                  <h5>
                    <a href={`tel: ${process.env.NEXT_PUBLIC_INFO_TEL}`}>
                      {process.env.NEXT_PUBLIC_INFO_TEL}
                    </a>
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
                  <span>Send email</span>
                  <h5>
                    <a href={`mailto:${process.env.NEXT_PUBLIC_INFO_EMAIL}`}>
                      {process.env.NEXT_PUBLIC_INFO_EMAIL}
                    </a>
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
                  <span>Check Location</span>
                  <h5>
                    <a
                      href="http://maps.google.com/?q=Velog Jože 15a, Vabriga"
                      target="_blank"
                    >
                      {process.env.NEXT_PUBLIC_LOCATION} <br />
                      Poreč, Istria - Croatia
                    </a>
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-7 col-xl-6 col-lg-6">
            <div className="contact-form">
              <Form onSubmit={onSend} id="contact-form">
                <div className="row">
                  <div className="col-xxl-6 col-xl-6 col-lg-6 mb-40">
                    <Form.Control
                      name="name"
                      type="input"
                      placeholder={defaultData.name}
                    />
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg-6 mb-40">
                    <Form.Control
                      id="email"
                      type="input"
                      placeholder={defaultData.email}
                    />
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg-6 mb-40">
                    <Form.Control id="phone" type="input" placeholder="Phone" />
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg-6 mb-40">
                    <Form.Control
                      id="subject"
                      type="input"
                      placeholder={defaultData.subject}
                    />
                  </div>
                  <div className="col-xxl-12 col-xl-12 col-lg-12 mb-40">
                    <Form.Control
                      placeholder={defaultData.message}
                      type="text"
                      name="message"
                      as="textarea"
                      rows={3}
                    ></Form.Control>
                  </div>
                  <div className="col-xxl-12 col-xl-12 mb-40">
                    <Button
                      active={false}
                      type="submit"
                      className="theme-btn border-btn"
                    >
                      Send a message
                    </Button>
                  </div>
                  {alert && (
                    <Alert key={alert} variant={alert}>
                      {alert === "success"
                        ? "Message sent!"
                        : "Something went wrong while sending the message!"}
                    </Alert>
                  )}
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
