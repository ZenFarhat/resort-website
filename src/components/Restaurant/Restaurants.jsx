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
      <RestaurantCard
        title='Dosa Village'
        image={Curry}
        router='/dosa-village'
      />
      <RestaurantCard
        title='Blackrock Grill'
        image={Steak}
        router='blackrock-grill'
      />
      <RestaurantCard title='Sushi Osaka' image={Sushi} router='sushi-osaka' />
      <RestaurantCard title='Del Taco' image={Taco} router='del-taco' />
    </div>
  );
}

export default Restaurants;
