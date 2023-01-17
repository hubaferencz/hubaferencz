import React, { useState } from "react";
import resumeData from "./Resume.json";
import Timeline from "./Timeline";
import TechStackItem from "./TechStackItem";

function Resume() {
  let [resume] = useState(resumeData.resume);
  let [skills] = useState(resumeData.skills);

  return (
    <>
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
              <ion-icon name="list-outline" />
            </div>
            <h3 className="h3">Tech Stack</h3>
          </div>

          <div className="stack-container">
            {/* map through skills and create item for each passing in props */}
            {skills.map((item) => (
              <TechStackItem
                title={item.title}
                icon={item.icon}
                key={item.id}
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
