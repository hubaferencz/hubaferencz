import React from "react";
import toast from "react-hot-toast";

function ContactItem(props) {
  // const notify = () => toast.success(props.title + " copied to clipboard");

  const notify = () => toast(props.title + " copied to clipboard");

  // check if the contact item is copyable
  if (props.copyable) {
    return (
      <>
        <li
          style={{ cursor: "pointer" }}
          className="contact-item"
          onClick={() => {
            navigator.clipboard.writeText(props.text);
            notify();
          }}
        >
          <div className="icon-box">
            <ion-icon name={props.icon} alt={props.title} />
          </div>
          <div className="contact-info">
            <p className="contact-title">
              {props.title}

              <span>copy</span>

              <ion-icon
                className="clipboard"
                name="copy-outline"
                alt={"copy " + props.title}
              />
            </p>
            <p className="contact-link">{props.text}</p>
          </div>
        </li>
      </>
    );
  } else if (!props.copyable) {
    return (
      <li className="contact-item">
        <div className="icon-box">
          <ion-icon name={props.icon} />
        </div>
        <div className="contact-info">
          <p className="contact-title">{props.title}</p>
          <p className="contact-link">{props.text}</p>
        </div>
      </li>
    );
  }
}

export default ContactItem;
