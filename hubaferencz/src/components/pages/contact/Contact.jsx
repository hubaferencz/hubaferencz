import React from "react";
import EmailContactForm from "./EmailContactForm";

function Contact() {
  return (
    <article className="contact active" data-page="contact">
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>
      <section className="mapbox" data-mapbox="">
        <figure>
          <iframe title="map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d112034.60086418314!2d19.052018746335786!3d47.50023962342749!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741dc154c687d4d%3A0x500c4290c1ed580!2sBudapest%2C%20District%20V.%2C%20Hungary!5e1!3m2!1sen!2sro!4v1673882199250!5m2!1sen!2sro"
            width={400}
            height={300}
            loading="lazy"
          />
        </figure>
      </section>
      <section className="contact-form">
        <h3 className="h3 form-title">Contact Form</h3>
        {/* <form action="#" className="form" data-form="">
          <div className="input-wrapper">
            <input
              type="text"
              name="fullname"
              className="form-input"
              placeholder="Full name"
              required=""
              data-form-input=""
            />
            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="Email address"
              required=""
              data-form-input=""
            />
          </div>
          <textarea
            name="message"
            className="form-input"
            placeholder="Your Message"
            required=""
            data-form-input=""
            defaultValue={""}
          />
          <button
            className="form-btn"
            type="submit"
            disabled=""
            data-form-btn=""
          >
            <ion-icon name="paper-plane" />
            <span>Send Message</span>
          </button>
        </form> */}
        <EmailContactForm />
      </section>
    </article>
  );
}

export default Contact;
