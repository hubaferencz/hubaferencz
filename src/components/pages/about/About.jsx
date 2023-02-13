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
// import Client3 from "../../images/hireBite.png";
import Client4 from "../../images/walletportal.png";

import { Helmet } from "react-helmet-async";

function About() {
  const aboutParagraphs = [
    "I'm a Web developer with a passion for turning cool ideas into amazing web apps. I love the process of designing, developing, testing, and deploying projects that make a real difference in people's lives.",
    "Whether it's for my clients or for myself, I always strive to create web apps that are not only functional but also user-friendly and visually appealing. I believe that a good web app should be easy to use, convey a company's message effectively, and bring out their unique identity.",
    "I'm excited to explore the exciting world of Web3, but I also have a solid foundation in traditional Web development. So, whether you're looking to build a custom web solution for your business or have a one-of-a-kind idea for a web project, I'm your guy. Don't hesitate to reach out!",
  ];

  // service cars array
  const serviceCards = [
    {
      icon: WebDev,
      title: "Web development",
      text: "High-quality, responsive web app development with SEO optimization",
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
      text: "Excellent communicator. He works very hard and quickly.",
    },
  ];

  const clients = [
    {
      img: Client2,
      name: "Whaleportal",
      link: "https://whaleportal.com/",
    },
    // {
    //   img: Client3,
    //   name: "hireBite",
    //   link: "https://hirebite.com/",
    // },
    {
      img: Client4,
      name: "Walletportal",
      link: "https://walletportal.org/",
    },
    {
      img: Client1,
      name: "Moonlanding Media",
      link: "https://moonlanding.media/",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Huba Ferencz - Web3 Developer</title>
        <meta
          name="description"
          content="Discover Huba Ferencz, a professional web3 developer and designer. Explore his portfolio, read about his skills and approach to web design."
        />

        <link rel="canonical" href="/" />
      </Helmet>
      <article className="about  active" data-page="about">
        <header>
          <h2 className="h2 article-title">About me</h2>
        </header>
        <section className="about-text">
          {aboutParagraphs.map((paragraph) => {
            return <p key={paragraph.slice(5)}>{paragraph}</p>;
          })}
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
