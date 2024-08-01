import React, { useEffect, useState } from "react";

const ProgressBar = () => {
  const [bar, setBar] = useState(0);

  useEffect(() => {
    let id = setInterval(() => {
      setBar((bar) => {
        if (bar >= 100) {
          clearInterval(id);
          return bar;
        }
        return bar + 5;
      });
    }, 150);
  }, []);

  return (
    <>
    <h3 className="question">Task: Make progress bar component for showing the progress of the task like this.</h3>
      <div className="bar-container">
        <div
          className="bar"
          style={{ transform: `translateX(${bar - 100}%)` }}
        ></div>
      </div>
        <div className="done">{bar} % Done !!!</div>
    </>
  );
};

export default ProgressBar;
