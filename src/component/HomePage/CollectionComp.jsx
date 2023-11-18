import React from "react";
import "./styles/collection.css";
// import colimg from "./img/collectionimg.png"

const Collection = (props) => {
  let first_word = props.title.split(" ", 1);
  return (
    <div className="a-box">
      <div className="img-container">
        <div className="img-inner">
          <div className="inner-skew">
            <img src={props.img} alt="img-of-collection" />
          </div>
        </div>
      </div>
      <div className="collection-text-container flex">
        <p>{first_word}</p>
        <div className="collection-arrow flex">&gst;</div>
      </div>
    </div>
  );
};

export default Collection;
