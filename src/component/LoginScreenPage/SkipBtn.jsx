import './styles/Button.css';
import React from 'react';
import skip from './img/skip.png';
function Skipbtn() {
    return (
      <div className='btn-box'>
        <a href="/loginScreen" className='btnskip' >
          <img src={skip} alt="skip" />
        </a>
      </div>
    );
  }
  
export default Skipbtn;