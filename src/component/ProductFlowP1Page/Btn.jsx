import React from "react";

function Btn(props){
    return(
        <div className="wantBtn">
            <button>{props.text} {props.emoji}</button>
        </div>
    )
}
export default Btn;