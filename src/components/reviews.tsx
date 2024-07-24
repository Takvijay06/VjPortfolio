import React from "react";

const Reviews = () => {
  return (
    <section>
      <div className="container">
        <h1>--Review my work</h1>
        <div className="">
          <div className="review-links flex">
            <p>My Linked profile: <a href="https://www.linkedin.com/in/takvijay06" target="_blank">Click here to navigate</a> </p>
          </div>
          <div className="review-links flex">
            <p>My Github profile: <a href="https://github.com/Takvijay06" target="_blank">Click here to navigate</a> </p>
          </div>
          <div className="review-links flex">
            <p>My Leetcode profile: <a href="https://leetcode.com/u/thevihanvj06/" target="_blank">Click here to navigate</a> </p>
          </div>
          <div className="review-links flex">
            <p>My codesandbox profile: <a href="https://codesandbox.io/u/takvijay06" target="_blank">Click here to navigate</a> </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
