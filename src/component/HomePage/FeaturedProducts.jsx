import React from 'react'
import "./styles/featuredproducts.css"
// import FP1 from "./img/FP1.jpg"

const FeaturedProducts = (props) => {
  let first_word = (props.title).split(" ",1);
  return (
       <div class="grid">
    <div class="grid__item">
        <div class="card"><img class="card__img" src={props.img} alt="Canyons" />
            <div class="card__content">
                <h2 class="card__header">{first_word}</h2>
            </div>
        </div>
    </div>
</div>
   
  )}
export default FeaturedProducts