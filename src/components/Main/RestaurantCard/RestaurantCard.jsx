import React from "react";
import "./RestaurantCard.css";

function RestaurantCard(props) {
  return (
    <div
      className='restaurant__card'
      style={{ backgroundImage: `url(${props.image})` }}
    >
      <h1 className='card__title'>{props.title}</h1>
    </div>
  );
}

export default RestaurantCard;
