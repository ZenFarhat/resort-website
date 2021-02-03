import React from "react";
import "./Nav.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <Link className='nav__link' to='/'>
        <h1>Tiara hotel</h1>
      </Link>
      <Link className='nav__link' to='/restaurants'>
        <h2>Restaurants</h2>
      </Link>
      <Link className='nav__link' to='/about'>
        <h2>About</h2>
      </Link>
      <Link className='nav__link' to='/book'>
        <h2>Book</h2>
      </Link>
    </nav>
  );
}

export default Nav;
