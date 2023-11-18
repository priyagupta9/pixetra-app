import './styles/photobook.css';
import React from 'react';

function Photobook({img}) {
  return (
    <div className='product-photo'>
      <div>
        <img src={img} alt="Photobook" />
        <h1>PhotoBooks</h1>
        </div>
    </div>
  );
}

export default Photobook;
