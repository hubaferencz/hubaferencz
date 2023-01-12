import React from "react";

function ContactItem(props) {
  return (
    <>
      <li className="contact-item">
        <div className="icon-box">
          <ion-icon name={props.icon} />
        </div>
        <div className="contact-info">
          <p className="contact-title">{props.title}</p>
          <p className="contact-link">
            {props.text}
          </p>
        </div>
      </li>
    </>
  );
}

export default ContactItem;
