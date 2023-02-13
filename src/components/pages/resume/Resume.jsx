import React, { useState } from "react";
import resumeData from "./Resume.json";
import Timeline from "./Timeline";
import TechStackItem from "./TechStackItem";
import { Helmet } from "react-helmet-async";

function Resume() {
  let [resume] = useState(resumeData.resume);
  let [skills] = useState(resumeData.skills);

  return (
    <>
      <Helmet>
        <title>Resume - Huba Ferencz - Web3 Developer</title>
        <meta
          name="description"
          content="Huba Ferencz's professional resume as a skilled web3 developer. View experience, skills, & achievements in the industry."
        />

        <link rel="canonical" href="/resume" />
      </Helmet>
      <article className="resume active" data-page="resume">
        <header>
          <h2 className="h2 article-title">Resume</h2>
        </header>

        {/* map through resume and create Timeline element for each passing in props*/}
        {resume.map((item) => (
          <Timeline
            title={item.title}
            icon={item.icon}
            items={item.items}
            key={item.id}
          />
        ))}

        <section className="timeline">
          <div className="title-wrapper">
            <div className="icon-box">
              <ion-icon name="list-outline" alt="tech stack skills" />
            </div>
            <h3 className="h3">Tech Stack</h3>
          </div>

          <div className="stack-container">
            {/* map through skills and create item for each passing in props */}
            {skills.map((item) => (
              <TechStackItem
                title={item.title}
                icon={item.icon}
                key={item.title + item.id}
                img={item.img}
              />
            ))}
          </div>
        </section>
      </article>
    </>
  );
}

export default Resume;
