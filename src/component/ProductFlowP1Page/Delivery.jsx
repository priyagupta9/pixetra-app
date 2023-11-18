import React from 'react';

function Delivery(props){
    return (
        <div className='delivery'>
            <h1>{props.deliveryName} Delivery <span>{props.emoji}</span></h1>
            <p>starts from ₹ {props.deliveryPrice}</p>
        </div>
    )
}

export default Delivery;