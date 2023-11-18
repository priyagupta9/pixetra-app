import ShowProduct from "./ShowProduct";
import ProductDesc from "./ProductDesc";
// import Product from "./img/Product.png";
import "./styles/productFlow.css";
import Delivery from "./Delivery";
import FreqProdProdName from "../Sliders/FreqProdProdName";
import IdealSlider from "../Sliders/IdealSlider";
import ReviewSlider from "../Sliders/ReviewSlider";
import Btn from "./Btn";
import close from "./img/X.png";
import { useLocation, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";

function ProductFlow() {
  const navigate = useNavigate();
  const location = useLocation();
  const ProdData = location.state.details.item;

  // https://fakestoreapi.com/products
  const [fake, setFake] = useState([]);
  useEffect(() => {
    fakestore();
  }, []);

  const fakestore = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const jsondata = await response.json();
    setFake(jsondata);
  };
  fakestore();

  return (
    <div className="product-flow">
      <div className="product-upper">
        <div className="product-flow-fixed-bar">
          <img
            src={close}
            alt="close-nav"
            className="cross"
            onClick={() => navigate(-1)}
          />
          <div className="slider-box">
            <FreqProdProdName />
          </div>
        </div>
        {ProdData.images.map((item) => {
          return <ShowProduct img={item.src} />;
        })}
        {/* <ShowProduct img={Product} /> */}
      </div>

      <div className="product-content">
        <div className="content">
          <ProductDesc
            prodName={ProdData.name}
            price={ProdData.price}
            desc={ProdData.description}
          />
        </div>
        <div className="ideal-slider-box">
          <p className="ideal-text padding">Ideal for</p>
          <IdealSlider val={fake} />
        </div>
        <div className="delivery-box padding">
          <Delivery deliveryName="Standard" deliveryPrice="49" emoji="🚲" />
          <Delivery deliveryName="Express" deliveryPrice="89" emoji="🚀" />
        </div>
        <p className="review padding">Reviews</p>
        <div className="reviewWrapper">
          <ReviewSlider val={fake} />
        </div>
        <div className="scroll">
          <span>^^</span>
          <p>Scroll down for more info</p>
          <span>^^</span>
        </div>
        <div className="wantBtn-Box">
          <Btn text="Want?" emoji="🤩" />
        </div>
      </div>
    </div>
  );
}

export default ProductFlow;
