import React from "react";
import "./Home.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
        <h1 className='home__title'>Tiara Hotel</h1>
        <Link to='/book'>
          <button className='home__button'>Book Now</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
