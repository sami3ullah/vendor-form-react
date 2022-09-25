import React from "react";

function RadioButtonGroup({ handleChange, questionData }) {
  return (
    <>
      <div className="wrapper">
        <div>
          <label>1</label>
          <input
            value="1"
            type="radio"
            name={questionData.name}
            onChange={(event) => handleChange(questionData, event)}
          />
        </div>

        <div>
          <label>2</label>
          <input
            value="2"
            type="radio"
            name={questionData.name}
            onChange={(event) => handleChange(questionData, event)}
          />
        </div>

        <div>
          <label>3</label>
          <input
            value="3"
            type="radio"
            name={questionData.name}
            onChange={(event) => handleChange(questionData, event)}
          />
        </div>

        <div>
          <label>4</label>
          <input
            value="4"
            type="radio"
            name={questionData.name}
            onChange={(event) => handleChange(questionData, event)}
          />
        </div>

        <div>
          <label>5</label>
          <input
            value="5"
            type="radio"
            name={questionData.name}
            onChange={(event) => handleChange(questionData, event)}
          />
        </div>
      </div>
    </>
  );
}

export default RadioButtonGroup;
