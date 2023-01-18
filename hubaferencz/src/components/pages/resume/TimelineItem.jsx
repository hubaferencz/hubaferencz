import React from "react";

function TimelineItem(props) {
  return (
    <li className="timeline-item">
      <h4 className="h4 timeline-item-title">
        {props.title}

        {props.link && (
          <a
            href={props.link}
            target="_blank"
            rel="noopener noreferrer"
            className="resume-link"
          >
            <ion-icon name="link-outline" />
          </a>
        )}
      </h4>
      <span>{props.date}</span>
      <p className="timeline-text">{props.description}</p>
    </li>
  );
}

export default TimelineItem;
