import React from "react";
import TimelineItem from "./TimelineItem";

function Timeline(props) {
  return (
    <section className="timeline">
      <div className="title-wrapper">
        <div className="icon-box">
          <ion-icon name={props.icon} alt={props.title} />
        </div>
        <h3 className="h3">{props.title}</h3>
      </div>
      <ol className="timeline-list">
        {/* map through items and create TimelineItem element for each passing in props*/}
        {props.items.map((item) => (
          <TimelineItem
            title={item.title}
            date={item.date}
            description={item.description}
            key={item.id}
            link={item.link}
          />
        ))}
      </ol>
    </section>
  );
}

export default Timeline;
