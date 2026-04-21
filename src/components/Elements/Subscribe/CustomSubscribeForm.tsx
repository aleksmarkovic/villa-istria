import React from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const url = "https://bangladevs.us16.list-manage.com/subscribe/post?u=a31c01f1ea7e047420474b3c5&amp;id=2729646c8f";

interface CustomFormProps {
  status: 'sending' | 'success' | 'error' | null;
  message: string | Error | null;
  onValidated: (data: Record<string, string>) => void;
}

const CustomForm = ({ status, message, onValidated }: CustomFormProps) => {
  let email: HTMLInputElement | null = null;
  let name: HTMLInputElement | null = null;

  const submit = () =>
    email &&
    name &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value,
      NAME: name.value,
    });

  return (
    <div style={{ background: "#efefef", borderRadius: 2, padding: 10, display: "inline-block" }}>
      {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
      {status === "error" && (
        <div style={{ color: "red" }} dangerouslySetInnerHTML={{ __html: typeof message === 'string' ? message : '' }} />
      )}
      {status === "success" && (
        <div style={{ color: "green" }} dangerouslySetInnerHTML={{ __html: typeof message === 'string' ? message : '' }} />
      )}
      <input
        style={{ fontSize: "2em", padding: 5 }}
        ref={node => { name = node; }}
        type="text"
        placeholder="Your name"
      />
      <br />
      <input
        style={{ fontSize: "2em", padding: 5 }}
        ref={node => { email = node; }}
        type="email"
        placeholder="Your email"
      />
      <br />
      <button className="btn" style={{ fontSize: "2em", padding: 5 }} onClick={submit}>
        Subscribe <i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i>
      </button>
    </div>
  );
};

const CustomSubscribeForm = () => (
  <MailchimpSubscribe
    url={url}
    render={({ subscribe, status, message }) => (
      <div>
        <CustomForm onValidated={formData => subscribe(formData)} status={status} message={message} />
        {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
        {status === "error" && <div style={{ color: "red" }} dangerouslySetInnerHTML={{ __html: typeof message === 'string' ? message : '' }} />}
        {status === "success" && <div style={{ color: "green" }}>Subscribed!</div>}
      </div>
    )}
  />
);

export default CustomSubscribeForm;
