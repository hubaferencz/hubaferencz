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
      text: "High-quality development of sites at the professional level.",
    },
    {
      icon: BlockchainDev,
      title: "Blockchain development",
      text: "Solidity and Blockchain development, building smart contracts.",
    },
  ];

  const testimonials = [
    {
      img: Rebekah,
      name: "Rebekah",
      text: "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.",
    },
    {
      img: Jeroen,
      name: "Jeroen",
      text: "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.",
    },
    {
      img: Joshua,
      name: "Joshua",
      text: "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.",
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
            I'm Creative Director and UI/UX Designer from Sydney, Australia,
            working in web development and print media. I enjoy turning complex
            problems into simple, beautiful and intuitive designs.
          </p>
          <p>
            My job is to build your website so that it is functional and
            user-friendly but at the same time attractive. Moreover, I add
            personal touch to your product and make sure that is eye-catching
            and easy to use. My aim is to bring across your message and identity
            in the most creative way. I created web design for many famous brand
            companies.
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
