import React from "react";

function ServiceCard(props) {
  return (
    <>
      <li className="service-item disable-select">
        <div className="service-icon-box">
          <img src={props.icon} alt={props.title} width={50} />
        </div>
        <div className="service-content-box">
          <h4 className="h4 service-item-title">{props.title}</h4>
          <p className="service-item-text">{props.text}</p>
        </div>
      </li>
    </>
  );
}

export default ServiceCard;
