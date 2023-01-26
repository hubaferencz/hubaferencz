import React from "react";

function TimelineItem(props) {
  return (
    <li className="timeline-item">
      <a
        href={props.link}
        target="_blank"
        rel="noopener noreferrer"
        className="resume-link"
      >
        <h4 className="h4 timeline-item-title">
          {props.title}

          {props.link && <ion-icon name="link-outline" />}
        </h4>
      </a>
      <span>{props.date}</span>
      <p className="timeline-text">{props.description}</p>
    </li>
  );
}

export default TimelineItem;
