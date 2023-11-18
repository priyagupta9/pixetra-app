import React from "react";
import Slider from "react-slick";
// css 
import "./Styles/SliderStyle.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Review from "../ProductFlowP1Page/Review";

function ProductSlider(props){
    const settings = {
      className: "center",
      infinite: true,
      centerPadding: "30px",
      slidesToShow: 1.08,
      swipeToSlide: true,
      arrows: false,
      afterChange: function(index) {
        console.log(
          `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        );
      }
    };
    let values=props.val;
    return (
      <div>
        {/* <h2 className="SliderHeader">Featured Products</h2> */}
        <Slider {...settings}>
          {values.map((item,index)=>{
            return <div key={index}><Review title={item.title} /> </div>;
          })}
          
        </Slider>
      </div>
    );
  }
export default ProductSlider;