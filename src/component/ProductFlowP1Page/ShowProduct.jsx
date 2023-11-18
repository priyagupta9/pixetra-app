import React from 'react';

function ShowProduct({img}){
    return (
        <div className='prod-img'>
            <img src={img} alt="Product" />
        </div>
    )
}

export default ShowProduct;