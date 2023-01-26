import React from "react";

function Testimonial(props) {
  return (
    <li className="testimonials-item disable-select">
      <div className="content-card" data-testimonials-item="">
        <figure className="testimonials-avatar-box">
          <img
            src={props.img}
            alt={props.name}
            width={60}
            data-testimonials-avatar=""
          />
        </figure>
        <h4 className="h4 testimonials-item-title" data-testimonials-title="">
          {props.name}
        </h4>
        <div className="testimonials-text" data-testimonials-text="">
          <p>
            {props.text}
          </p>
        </div>
      </div>
    </li>
  );
}

export default Testimonial;
