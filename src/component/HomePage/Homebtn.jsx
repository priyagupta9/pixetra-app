import React from 'react';

function Homebtn(props){
    return(
        <div className="homebtn">
            <button>Explore more ideas <span>{props.text}</span></button>
        </div>
    )
}
export default Homebtn;