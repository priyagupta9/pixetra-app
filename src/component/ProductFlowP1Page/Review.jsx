import React from "react";
import "./styles/productFlow.css";

function Review(props) {
  let name = props.title.split(" ", 2);
  return (
    <div className="review-slider-container flex">
      <div className="review-box">
        <h1>{name}</h1>
        <span> * * * * * </span>
        <p>{props.title}</p>
      </div>
    </div>
  );
}
export default Review;
