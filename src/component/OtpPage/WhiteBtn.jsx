import React from 'react';
import "./styles/WhiteBtn.css"

function WhiteBtn(props)
{
        return(  
            <div className="white-box">
            {
                (props.img) ? <img src={props.img} alt={props.alt} className="inp-img" /> : <p></p>
            }
            {
                (props.text) ? <p className='white-text'>{props.text}</p> : <input placeholder={props.placeholder}></input>
            }
            </div>
        )
}

export default WhiteBtn;