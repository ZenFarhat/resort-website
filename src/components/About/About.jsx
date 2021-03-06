import React from "react";
import "./About.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function About() {
  return (
    <div className='about'>
      <div className='about__container'>
        <h2>About Tiara Hotel & Resort</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim officia
          numquam ad nemo magnam cupiditate? Corrupti laborum minima sit tempore
          expedita ipsum doloribus quisquam non magnam fugiat vel quo
          consequatur voluptatem facilis tempora officia, veritatis numquam
          ipsam, quibusdam animi veniam vitae quasi? Fuga sequi et harum ipsa
          eveniet ab fugiat!
        </p>
        <Link to='/book'>
          <button className='about__button'>Book Now</button>
        </Link>
      </div>
    </div>
  );
}

export default About;
