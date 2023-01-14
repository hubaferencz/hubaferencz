import React from "react";

function Client(props) {
  return (
    <li className="clients-item">
      <a href={props.link} target="_blank" rel="noreferrer">
        <img src={props.img} alt={props.name} />
      </a>
    </li>
  );
}

export default Client;
