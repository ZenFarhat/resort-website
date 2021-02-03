import React from "react";
import "./Restaurants.css";
import RestaurantCard from "./RestaurantCard/RestaurantCard";
import Curry from "../../images/curry.jpeg";
import Steak from "../../images/steak.jpg";
import Sushi from "../../images/sushi.jpg";
import Taco from "../../images/tacos.jpeg";

function Restaurants() {
  return (
    <div className='main'>
      <RestaurantCard title='Dosa Village' image={Curry} />
      <RestaurantCard title='Blackrock Grill' image={Steak} />
      <RestaurantCard title='Sushi Osaka' image={Sushi} />
      <RestaurantCard title='Del Taco' image={Taco} />
    </div>
  );
}

export default Restaurants;
