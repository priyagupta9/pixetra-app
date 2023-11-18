import "./styles/photobook.css";
import React from "react";

function Photobook(props) {
  // let first_word = (props.desc).split(" ",1);
  return (
    <div className="product-card">
      <img src={props.img} alt="Photobook" />
      <h1>{props.desc}</h1>
    </div>
  );
}

export default Photobook;
