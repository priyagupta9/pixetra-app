import React from "react";
import Header from "../ProductsPage/Header";
import BottomBlueBtn from "../PassBookPage/BottomBlueBtn";
import { Link } from "react-router-dom";
import errorImg from "./errorImg.gif";

function Error() {
  return (
    <>
      <Header name="User" />
      <div className="err-content flex">
        <h1 className="err">404</h1>
        <img src={errorImg} alt="errorImg" className="errorGif" />
        <p>Its better we don't make it weird</p>
      </div>
      <Link to="/">
        <BottomBlueBtn text="Go to Home" />
      </Link>
    </>
  );
}

export default Error;
