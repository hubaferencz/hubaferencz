import React, { useState } from "react";
import resumeData from "./Resume.json";
import Timeline from "./Timeline";
import TechStackItem from "./TechStackItem";
import { Helmet } from "react-helmet-async";

// https://drive.google.com/file/d/1qcvR_T7g9XfVb8l96g73hODmKY37Lqv5/view?usp=share_link

function Resume() {
  let [resume] = useState(resumeData.resume);
  let [skills] = useState(resumeData.skills);

  return (
    <>
      <Helmet>
        <title>Resume - Huba Ferencz - Web Developer</title>
        <meta
          name="description"
          content="Huba Ferencz's professional resume as a skilled web developer. View experience, skills, & achievements in the industry."
        />

        <link rel="canonical" href="/resume" />
      </Helmet>
      <article className="resume active" data-page="resume">
        <header>
          <a
            href="https://drive.google.com/file/d/1Tt52ky2MFheMrxTGqt-cWb7Lw7e3n2If/view?usp=share_link"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-link"
          >
            <h2 className="h2 article-title">
              Resume
              <ion-icon name="link-outline" alt="open timeline item" />
            </h2>
          </a>
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
