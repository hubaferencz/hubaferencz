import React from "react";

function TechStackItem(props) {
  // check if props.icon exist
  if (props.icon) {
    return (
      <div className="tech-container">
        <i className={props.icon} alt={props.title + " skill item"} />

        {props.title}
      </div>
    );
  } else {
    return (
      <div className="tech-container">
        <i>
          <img src={props.img} alt={props.title + " skill item"} width={48} />
        </i>
        {props.title}
      </div>
    );
  }
}

export default TechStackItem;
