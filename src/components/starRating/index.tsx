import React, { useState } from "react";

const RateUs = () => {
  const [stars, setStars] = useState([
    "\u2606",
    "\u2606",
    "\u2606",
    "\u2606",
    "\u2606",
  ]);

  const onClickHandle = (index: any) => {
    setStars(
      [...stars].map((star, ind) => {
        if (ind <= index) {
          return "\u2605";
        }
        return "\u2606";
      })
    );
  };

  return (
    <div className="rate-container">
      <div className="rate-star">
        <span>Rate Us</span>
        <div className="star-rating">
          {stars.map((star, index) => (
            <span onClick={()=>onClickHandle(index)} key={index}>{star}</span>
          ))}
        </div>
      </div>
      <div className="rate-comment">
        <input />
      </div>
      <button>Submit Feedback</button>
    </div>
  );
};

export default RateUs;
