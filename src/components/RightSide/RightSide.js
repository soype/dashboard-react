import React from 'react';

import Updates from './Updates/Updates';
import Reviews from './Reviews/Reviews';

import './RightSide.css';
import {UilMoon, UilSun} from "@iconscout/react-unicons";

const RightSide = (props) => {

  const toggleHandler = () =>{
    props.onToggle();
  }

  return (
    <div className="right-side">
      <button className='toggle' onClick={toggleHandler}>
        {props.toggle? <UilSun></UilSun> : <UilMoon></UilMoon> }
        
      </button>
        <div className="updates-container">
            <h3>Updates</h3>
            <Updates></Updates>
        </div>
        <div className="reviews">
            <h3>Customer Reviews</h3>
            <Reviews></Reviews>
        </div>
    </div>
  )
}

export default RightSide