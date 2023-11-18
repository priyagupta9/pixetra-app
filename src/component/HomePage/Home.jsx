import React, { useState, useEffect } from "react";
import "./styles/home.css";
import BottomNavbar from "../ProductsPage/BottomNavbar";

import Header from "../ProductsPage/Header";
import Heroimg from "./img/heroimg.png";
import Homeimg from "./img/homeing2.jpg";
import img6 from "./img/image6.jpg";

import FrequentProduct from "../Sliders/FrequentProducts";
import CollectionSlider from "../Sliders/CollectionSlider";
import ProductSlider from "../Sliders/FeaturedProductSlider";
import BlogCard from "./BlogCard";
import Homebtn from "./Homebtn";

const Home = () => {
  // https://fakestoreapi.com/products
  const [fake, setFake] = useState([]);
  console.log(fake);
  useEffect(() => {
    fakestore();
  }, []);

  const fakestore = async () => {
    const response = await fetch(
      "https://fakestoreapi.com/products/category/women's clothing"
    );
    const jsondata = await response.json();
    setFake(jsondata);
  };
  fakestore();

  return (
    <>
      <div className="product-page">
        <Header name="User" />
        <div className="herodiv">
          <img className="heroimg" src={Heroimg} alt="beautiful products" />
        </div>
        <FrequentProduct />
        <div className="collectionSliderWrap">
          <CollectionSlider val={fake} />
        </div>
        <div className="herodiv">
          <img className="homeimg" src={Homeimg} alt="beautiful products" />
        </div>
        <div className="featureSliderWrap">
          <ProductSlider val={fake} />
        </div>
        <div className="herodiv">
          <img className="homeimg" src={img6} alt="beautiful products" />
        </div>

        <h2 className="SliderHeader">Get Creative</h2>
        {fake.map((items) => {
          return (
            <BlogCard
              img={items.image}
              title={items.title}
              desc={items.description}
            />
          );
        })}
        <Homebtn text="->" />
        <BottomNavbar />
      </div>
    </>
  );
};

export default Home;
