import React from "react";

function ServiceCard(props) {
  return (
    <>
      <li className="service-item">
        <div className="service-icon-box">
          <img
            src="./assets/images/icon-design.svg
          "
            alt="design icon"
            width={40}
          />
        </div>
        <div className="service-content-box">
          <h4 className="h4 service-item-title">Web design</h4>
          <p className="service-item-text">
            The most modern and high-quality design made at a professional
            level.
          </p>
        </div>
      </li>
    </>
  );
}

export default ServiceCard;
