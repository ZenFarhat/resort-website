import React, { useState } from "react";
import "./Nav.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";

function Nav() {
  const [hidden, setHidden] = useState(true);

  function handleBurger() {
    setHidden((prevHidden) => !prevHidden);
  }

  return (
    <nav>
      <div className='menuIcon' onClick={handleBurger}>
        <MenuIcon />
      </div>
      <Link
        className={`nav__link ${hidden === true ? "hidden" : "shown"}`}
        to='/'
        onClick={handleBurger}
      >
        <h1>Tiara hotel</h1>
      </Link>
      <Link
        className={`nav__link ${hidden === true ? "hidden" : "shown"}`}
        to='/restaurants'
        onClick={handleBurger}
      >
        <h2>Restaurants</h2>
      </Link>
      <Link
        className={`nav__link ${hidden === true ? "hidden" : "shown"}`}
        to='/about'
        onClick={handleBurger}
      >
        <h2>About</h2>
      </Link>
      <Link
        className={`nav__link ${hidden === true ? "hidden" : "shown"}`}
        to='/book'
        onClick={handleBurger}
      >
        <h2>Book</h2>
      </Link>
    </nav>
  );
}

export default Nav;
