import React from "react";
import Slider from "react-slick";

// css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Collection from "../HomePage/CollectionComp";
import "./Styles/SliderStyle.css";

function CollectionSlider(props) {
  const settings = {
    className: "center",
    infinite: true,
    slidesToShow: 2.15,
    slidesToScroll: 1,
    centerPadding: "30px",
    swipeToSlide: true,
    arrows: false,
    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
  };
  let values = props.val;
  return (
    <div>
      <h2 className="SliderHeader">Trending Collection</h2>
      <div className="collectionS">
        <Slider {...settings}>
          {values.map((item, index) => {
            return (
              <div key={index}>
                <Collection img={item.image} title={item.title} />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default CollectionSlider;
