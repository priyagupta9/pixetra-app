import React from 'react';
import './styles/imagepicker.css';
import framedpicture from "./img/framedpicture.jpg";
import Btn from './Btn';
import Navbar from './Navbar.jsx';


const Imagepicker = () => {
  return (
  <>
    <Navbar />
    <div className='picker'>

      <div className='picker-image-div' >
      
   <img className='picker-image' src={framedpicture} alt="" /></div>

    
     <h3 className='picker-header'>LAST BUT NOT THE LEAST</h3>
    <h4 className='picker-description'> Your memories are always safe with us </h4>    
    <Btn className="pickerBtn" text="ALLOW ACCESS TO THE GALLERY" />
    </div>
    </>
  )
}

export default Imagepicker;