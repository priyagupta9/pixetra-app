import React from 'react'
import './styles/Button.css';
const CircleBtn = ({img}) => {
  return (
    <a className='circlebtn' type='button' href='facebook.com'>
        <img src={img} alt={img} />
    </a>
  )
}

export default CircleBtn