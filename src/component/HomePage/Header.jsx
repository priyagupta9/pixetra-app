import './styles/header.css';
import React from 'react';

function Header({name}) {
  return (
    <div className='header'>
       <h4><span>👋</span>Hello {name}</h4>
    </div>
  );
}

export default Header;
