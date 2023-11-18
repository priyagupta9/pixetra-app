import React from "react";

function ProductDesc(props) {
  return (
    <div className="product-desc">
      <h1>{props.prodName}</h1>
      <h4>
        From: <bold className="price">₹ {props.price}</bold>
        <span className="flex">i</span>
      </h4>
      <p>{props.desc}</p>
    </div>
  );
}

export default ProductDesc;
