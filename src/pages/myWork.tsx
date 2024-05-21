import React, { useState } from "react";
import Tabs from "../components/tabs";
import Shimmer from "../components/shimmer";

const MyWork = () => {
  const [tabId, setTabId] = useState(1);
  const [row, setRow] = useState(1);
  const [tile, setTile] = useState(3);

  const onTileChange = (e: any) => {
    console.log("e", e.target.value);
    setTile(e.target.value);
  };

  return (
    <section className="flex container">
      <div className="projects">
        <Tabs>
          <div className="tab">
            <button id="1">Shimmer Effect</button>
            <button id="2">About</button>
            <button id="3">Contact</button>
          </div>
          <div className="user-input">
            <label>Number of Tiles: </label>
            <input
              type="number"
              id="quantity"
              value={tile}
              min="1"
              onChange={onTileChange}
            ></input>
          </div>
          <div className="flex grid-container">
            {Array.from({ length: tile }, (_, index) => (
              <Shimmer key={index} />
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default MyWork;
