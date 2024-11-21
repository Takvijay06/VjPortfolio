import { useState } from "react";

const Stepper = (props) => {
  const { data } = props;
  const [selectedId, setSelectedId] = useState(1);

  const onClickContinue = () => {
    if (selectedId !== data.length) {
      setSelectedId((prevId) => prevId + 1);
    }
  };

  const onClickBack = () => {
    if (selectedId !== 1) {
      setSelectedId((prevId) => prevId - 1);
    }
  };

  return (
    <div className="stepper-container">
      <div className="stepper">
        {data.map((d, index) => (
          <div key={d.id} className="stepper-item">
            <button
              className="stepper-button"
              style={
                selectedId >= d.id
                  ? { background: "blue", color: "white", borderColor: "red" }
                  : {}
              }
              onClick={() => setSelectedId(d.id)}
            >
              {d.id}
            </button>
            {index < data.length - 1 && (
              <div className="stepper-connector">--------------</div>
            )}
          </div>
        ))}
      </div>
      <div className="stepper-content">
        <div>{data[selectedId - 1].content}</div>
        <div className="stepper-actions">
          {selectedId !== 1 && (
            <button
              className="stepper-button back-button"
              onClick={onClickBack}
              disabled={selectedId === 1}
            >
              Back
            </button>
          )}
          {selectedId !== data.length && (
            <button
              className="stepper-button continue-button"
              onClick={onClickContinue}
              disabled={selectedId === data.length}
            >
              Continue
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Stepper;
