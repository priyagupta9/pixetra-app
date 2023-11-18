import React from 'react'
import "./styles/blogcard.css"

const BlogCard = (props) => {
//  let desc = (props.desc).str.substring(0, 30)
  return (
    <div>
         <div class="pen-wrapper">

<article  className="chip">
  <a className="chip-link" href="/"> 
    <img className='chip-hero wp-post-image' src={props.img} alt="BlogHeader" />                                  
    <div className="chip-text">
      <h3 className="chip-title">{props.title}</h3>
      <p className="chip-description">{props.desc}</p>
    </div>
  </a>
</article>
    </div>
    </div>
  )
}

export default BlogCard