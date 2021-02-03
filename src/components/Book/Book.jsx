import React from "react";
import "./Book.css";

function Book() {
  return (
    <div className='book'>
      <div className='book__container'>
        <div className='book__text'>
          <h1>Tiara Hotel</h1>
          <h2>Stay with us</h2>
          <p>Leave a message and we'll get back to you</p>
        </div>
        <form className='book__form'>
          <input type='text' placeholder='Name..' className='book__textinput' />
          <input
            type='text'
            placeholder='Email..'
            className='book__textinput'
          />
          <textarea
            className='book__textarea'
            name='message'
            cols='30'
            rows='10'
            placeholder='Your message..'
          ></textarea>
          <button className='book__button'>Send</button>
        </form>
      </div>
    </div>
  );
}

export default Book;
