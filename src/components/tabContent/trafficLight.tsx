import React, { useCallback, useEffect, useState } from "react";

const light = [
  { color: "red", time: 10000 },
  { color: "orange", time: 5000 },
  { color: "green", time: 15000 },
];

const TrafficLight = () => {
  const [id, setId] = useState(0);
  const [lights, setLights] = useState(light);
  const [lightActive, setLightActive] = useState(light[id].color);

  useEffect(() => {
    let intervalId = setInterval(() => {
      const finalId = (id + 1) % lights.length;
      setLightActive(lights[finalId].color);
      setId(finalId);
    }, lights[id].time);

    return () => clearInterval(intervalId);
  }, [id, lightActive, lights]);

  const onClickbuttonColor = useCallback(
    (ID: number) => {
      setId(ID);
      setLightActive(lights[ID].color);
    },
    [lights]
  );

  const onChangeTime = useCallback(
    (color: string, time: string) => {
      setLights(
        lights.map((light) =>
          light.color === color ? { ...light, time: +time * 1000 } : light
        )
      );
    },
    [lights]
  );

  return (
    <div className="traffic-light">
      <div className="line"></div>
      <h4>
        TASK 1: Create a traffic light system where the lights cycle from green
        to yellow to red at specified intervals, continuously looping. The
        durations for each light should be:
      </h4>
      <ol>
        <li>Red light: 10 seconds</li>
        <li>Yellow light: 5 seconds</li>
        <li>Green light: 15 seconds</li>
      </ol>
      <p>
        Additionally, I need to include a button that allows manual activation
        of any light and an option to increase the timer by a user-specified
        number of seconds.
      </p>
      <div className="line"></div>
      <div className="light-container">
        <div className="light-box">
          <Light color="red" isActive={lightActive === "red"} />
          <Light color="orange" isActive={lightActive === "orange"} />
          <Light color="green" isActive={lightActive === "green"} />
        </div>
        <div>
          <button
            style={{
              backgroundColor: "red",
              ...buttonStyle,
            }}
            onClick={() => {
              onClickbuttonColor(0);
            }}
          >
            Red
          </button>
          <input
            type="number"
            id="quantity"
            min="1"
            style={inputStyle}
            value={lights[0].time / 1000}
            onChange={(e) => {
              onChangeTime("red", e.target.value);
            }}
          ></input>
          <button
            style={{
              backgroundColor: "orange",
              ...buttonStyle,
            }}
            onClick={() => {
              onClickbuttonColor(1);
            }}
          >
            Yellow
          </button>
          <input
            type="number"
            id="quantity"
            min="1"
            style={inputStyle}
            value={lights[1].time / 1000}
            onChange={(e) => {
              onChangeTime("orange", e.target.value);
            }}
          ></input>
          <button
            style={{
              backgroundColor: "green",
              ...buttonStyle,
            }}
            onClick={() => {
              onClickbuttonColor(2);
            }}
          >
            Green
          </button>
          <input
            type="number"
            id="quantity"
            min="1"
            style={inputStyle}
            value={lights[2].time / 1000}
            onChange={(e) => {
              onChangeTime("green", e.target.value);
            }}
          ></input>
        </div>
      </div>
    </div>
  );
};

const Light = (props: any) => {
  const { color, isActive } = props;
  return (
    <div
      className="light"
      style={{ backgroundColor: isActive ? color : "" }}
    ></div>
  );
};

const buttonStyle = {
  padding: "10px 20px",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  margin: "10px",
};

const inputStyle = {
  padding: "10px",
  margin: "10px",
  border: "1px solid #ccc",
  borderRadius: "5px",
  width: "50px",
};

export default TrafficLight;
