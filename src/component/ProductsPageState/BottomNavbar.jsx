import './styles/BottomNavbar.css';
import React from 'react';
import account from "./img/account.png"
import bag from "./img/bag.png"
import gift from "./img/gift.png"
import heart from "./img/heart.png"
import home from "./img/home.png"

function BottomNavbar() {
  return (
    <div className='nav-icons'>
      <a href='/'><img src={home} alt="home-icon" />Home</a>
      <a href='/products'><img src={gift} alt="gift-icon" />Products</a>
      <a href='/My-Drafts'><img src={heart} alt="heart-icon" />My Drafts</a>
      <a href='/loginScreen'><img src={account} alt="account-icon" />Accounts</a>
      <a href='/Bag'><img src={bag} alt="bag-icon" />Bag</a>
    </div>
  );
}

export default BottomNavbar;
