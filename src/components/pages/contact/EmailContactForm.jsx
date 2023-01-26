import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EmailContactForm = () => {
  const form = useRef();

  const notify = () =>
    toast.success("Message sent! I'll get back to you as soon as I can.");
  // create state variables for each input
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          // show the user a success message
          notify();
          // empty the form
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          // show the user an error
          alert(
            "Message wasn't sent. Please try sending manually to huba.ferencz.personal@gmail.com\nthank you for your understanding."
          );
        }
      );
  };

  return (
    <form className="form" ref={form} onSubmit={sendEmail}>
      <div className="input-wrapper">
        <input
          type="text"
          name="user_name"
          className="form-input"
          placeholder="Full name"
          required=""
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          name="user_email"
          className="form-input"
          placeholder="Email address"
          required=""
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <textarea
        name="message"
        className="form-input"
        placeholder="Your Message"
        required=""
        data-form-input=""
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button className="form-btn" type="submit" value="Send">
        <ion-icon name="paper-plane" />
        <span>Send Message</span>
      </button>
    </form>
  );
};

export default EmailContactForm;
