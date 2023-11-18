import '../allLogin.css';
import React from 'react';
import Number from "./Number";
import logo from "../images/512.png"

function Otp() {
  return (
    <div className='otp-page'>
      <div className='flex otp-header'>
        <img src={logo} alt="logo" className='logo'/>
        <h1 className='otp-msg'>Enter 6-digit OTP sent to your mobile number:</h1>
      </div>
      <Number />
      <a href="/">Need help?</a>
    </div>
  );
}

export default Otp;
