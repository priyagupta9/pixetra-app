import React from 'react';
import "./styles/productFlow.css";

function Ideal(props){
  let words = (props.title).split(" ",2);
    return(
        <div className='ideal-slider-container'>
                <div className='ideal-box'>
                    <img src={props.img} alt="" ></img>
                    <p>{words}</p>
                </div>
            </div>
    )
}
export default Ideal;
