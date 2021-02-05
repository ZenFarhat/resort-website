import React from "react";
import { Link } from "react-router-dom";
import "./RestaurantCard.css";

function RestaurantCard(props) {
  return (
    <div
      className='restaurant__card'
      style={{ backgroundImage: `url(${props.image})` }}
    >
      <Link to={props.router} className='link'>
        <h1 className='card__title'>{props.title}</h1>
      </Link>
    </div>
  );
}

export default RestaurantCard;
