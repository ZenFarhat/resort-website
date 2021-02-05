import React from "react";
import "./RestaurantSite.css";

function RestaurantSite(props) {
  return (
    <div className='restaurantSite'>
      <div className='hero' style={{ backgroundImage: `url(${props.image})` }}>
        <h1 classname='restaurantSite___title'>{props.title}</h1>
      </div>
      <div className='restaurant__about'>{props.text}</div>
    </div>
  );
}

export default RestaurantSite;
