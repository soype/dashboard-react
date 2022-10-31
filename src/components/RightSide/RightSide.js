import React from 'react';

import Updates from './Updates/Updates';
import Reviews from './Reviews/Reviews';

import './RightSide.css';

const RightSide = () => {
  return (
    <div className="right-side">
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