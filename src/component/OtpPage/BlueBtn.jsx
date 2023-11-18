import './styles/BlueBtn.css';
import React from 'react';

function Bluebtn(props) {
    return (
        <div className="blue-box">
            {
              (props.img) ? <img src={props.img} alt="phone" /> : <p></p>
            }
            <p className="blue-text">{props.text}</p>
        </div>
    );
  }
  
export default Bluebtn;
  