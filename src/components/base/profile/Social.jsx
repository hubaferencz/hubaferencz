import React from "react";

function Social(props) {
  return (
    <li className="social-item">
      <a
        href={props.link}
        className="social-link"
        target={"_blank"}
        rel="noreferrer"
      >
        <ion-icon
          name={props.logo}
          alt={"huba ferencz's " + props.logo.replace("logo-", "")}
        />
      </a>
    </li>
  );
}

export default Social;
