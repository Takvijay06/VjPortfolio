import React, { useState } from 'react'
import Shimmer from '../shimmer';

const Shimmertab = () => {
    const [tile, setTile] = useState(3);
  
    const onTileChange = (e: any) => {
      console.log("e", e.target.value);
      setTile(e.target.value);
    };
  
  return (
    <>
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
          </>
  )
}

export default Shimmertab;