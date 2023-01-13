import React from "react";

function Social(props) {
  return (
    <li className="social-item">
      <a href={props.link} className="social-link" target={"_blank"}>
        <ion-icon name={props.logo} />
      </a>
    </li>
  );
}

export default Social;
