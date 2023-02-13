import React from "react";
import { Helmet } from "react-helmet-async";
import EmailContactForm from "./EmailContactForm";

function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact - Huba Ferencz - Web3 Developer</title>
        <meta
          name="description"
          content="Get in touch with web3 developer Huba Ferencz. Fill out the contact form or find his email and social media links on navigation bar."
        />

        <meta
          property="og:image"
          content="https://hubaferencz.com/static/media/huba%20ferencz%20contact.f3b00bca8f0d9e6d4a4d.png"
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="420" />
        <meta property="og:image:height" content="420" />

        <link rel="canonical" href="/contact" />
      </Helmet>

      <article className="contact active" data-page="contact">
        <header>
          <h2 className="h2 article-title">Contact</h2>
        </header>
        {/* <section className="mapbox" data-mapbox="">
        <figure>
          <iframe title="map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d112034.60086418314!2d19.052018746335786!3d47.50023962342749!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741dc154c687d4d%3A0x500c4290c1ed580!2sBudapest%2C%20District%20V.%2C%20Hungary!5e1!3m2!1sen!2sro!4v1673882199250!5m2!1sen!2sro"
            width={400}
            height={300}
            loading="lazy"
          />
        </figure>
      </section> */}
        <section className="contact-form">
          <h3 className="h3 form-title">Contact Form</h3>
          <EmailContactForm />
        </section>
      </article>
    </>
  );
}

export default Contact;
