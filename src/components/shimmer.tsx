import React from "react";

const Shimmer = () => {
  return (
    <div className="flex shimmer-card">
      <div>
        <div className="image-box skeleton"></div>
        <div className="title skeleton"></div>
        <div className="flex">
          <div className="tag skeleton"></div>
          <div className="add-button skeleton"></div>
        </div>
      </div>
    </div>
  );
};

export default Shimmer;
