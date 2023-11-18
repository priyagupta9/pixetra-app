import './styles/header.css';
import React from 'react';
import search from "./img/search_.svg"

function Header({name}) {
  return (
    <div className='header'>
       <h1><span>👋</span>Hello, {name}</h1>
       <img className='search' src={search} alt="search-icon" />
    </div>
  );
}

export default Header;
