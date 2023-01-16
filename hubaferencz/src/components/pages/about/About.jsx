import React from "react";
import ServiceCard from "./ServiceCard";
import Testimonial from "./Testimonial";
import Client from "./Client";

import WebDev from "../../images/web-programming.png";
import BlockchainDev from "../../images/blockchain.png";

import Rebekah from "../../images/Rebekah.png";
import Jeroen from "../../images/Jeroen.png";
import Joshua from "../../images/Joshua.png";

import Client1 from "../../images/moonlanding-media.png";
import Client2 from "../../images/whaleportal.png";
import Client3 from "../../images/hireBite.png";

function About() {
  // service cars array
  const serviceCards = [
    {
      icon: WebDev,
      title: "Web development",
      text: "High-quality, responsive development of sites at the professional level.",
    },
    {
      icon: BlockchainDev,
      title: "Blockchain development",
      text: "Solidity and Blockchain development, building smart contracts",
    },
  ];

  const testimonials = [
    {
      img: Rebekah,
      name: "Rebekah",
      text: "He was very easy to work with and we would definitely hire him again.",
    },
    {
      img: Jeroen,
      name: "Jeroen",
      text: "I explained, and he built my project even better than I imagined it!",
    },
    {
      img: Joshua,
      name: "Joshua",
      text: "Excellent communicator. He works very hard and quickly. I can only recommend him!",
    },
  ];

  const clients = [
    {
      img: Client1,
      name: "Moonlanding Media",
      link: "https://moonlanding.media/",
    },
    {
      img: Client2,
      name: "Whaleportal",
      link: "https://whaleportal.com/",
    },
    {
      img: Client3,
      name: "hireBite",
      link: "https://hirebite.com/",
    },
  ];

  return (
    <>
      <article className="about  active" data-page="about">
        <header>
          <h2 className="h2 article-title">About me</h2>
        </header>
        <section className="about-text">
          <p>
            I am a Web3 developer, working in the Web3 and Crypto space. I enjoy
            turning mere ideas into production-ready web applications, ready to
            scale and make people's lives easier. I'm used to designing,
            developing, testing, and deploying my clients' or my own projects.
          </p>
          <p>
            My job is to create your web app so that it is functional and
            user-friendly while also being integrated into the cryptoverse.
            Moreover, I make sure that the site is eye-catching and easy to use.
            I aim to bring across your company's message, identity, and goals in
            the most creative way possible. If you feel like I would be a good
            fit for your company or have a project that needs to be built,
            please don't hesitate to contact me. I would be more than delighted
            to work with you!
          </p>
        </section>
        {/*
    - service
  */}
        <section className="service">
          <h3 className="h3 service-title">What i'm doing</h3>
          <ul className="service-list">
            {serviceCards.map((serviceCard) => (
              <ServiceCard
                key={serviceCard.title}
                icon={serviceCard.icon}
                title={serviceCard.title}
                text={serviceCard.text}
              />
            ))}
          </ul>
        </section>
        {/*
    - testimonials
  */}
        <section className="testimonials">
          <h3 className="h3 testimonials-title">Testimonials</h3>
          <ul className="testimonials-list has-scrollbar">
            {testimonials.map((testimonial) => (
              <Testimonial
                key={testimonial.name}
                img={testimonial.img}
                name={testimonial.name}
                text={testimonial.text}
              />
            ))}
          </ul>
        </section>

        {/*
    - clients
  */}
        <section className="clients">
          <h3 className="h3 clients-title">Clients</h3>
          <ul className="clients-list has-scrollbar">
            {clients.map((client) => (
              <Client
                key={client.name}
                img={client.img}
                name={client.name}
                link={client.link}
              />
            ))}
          </ul>
        </section>
      </article>
    </>
  );
}

export default About;
