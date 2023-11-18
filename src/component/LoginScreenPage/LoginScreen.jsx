import React from 'react';
import logo from "../images/512.png"
import Bluebtn from '../OtpPage/BlueBtn';
import WhiteBtn from '../OtpPage/WhiteBtn';
import Skipbtn from './SkipBtn';
import '../allLogin.css';
import CircleBtn from './CircleBtn';
import fb from "./img/facebook.png"
import twitter from "./img/twitter.png"
import insta from "./img/instagram.png"
import google from "./img/google.png"
import "./styles/Button.css"
import { Link } from 'react-router-dom';

function LoginInfo() {
  return (
    <div className='otp-page'>
      <img src={logo} alt="logo" className='logo'/>
      <div className='btns'>
      <Link to="/login"><Bluebtn img={google} text="CONTINUE" /></Link>
      <WhiteBtn text="LOGIN WITH FACEBOOK" img="" placeholder="" />
      <div className='circle-btns-wrapper'>
      <CircleBtn img={fb} />
      <CircleBtn img={twitter} />
      <CircleBtn img={insta} />
      </div>
      </div>
      <a href="/">Need help?</a>
     <Link to="/products"><Skipbtn /></Link>
     </div>
  );
}

export default LoginInfo;
