import React from "react";
import RadioButtonGroup from "./RadioButtonGroup";

function ConditionalForm({ conditionalQuestionsArray, handleChange }) {
  return (
    <div className="main-wrapper">
      {conditionalQuestionsArray.map((questionData) => {
        return (
          <div className="conditional-container" key={questionData.id}>
            <p>{questionData.question}</p>
            <RadioButtonGroup
              questionData={questionData}
              handleChange={handleChange}
            />
          </div>
        );
      })}
    </div>
  );
}

export default ConditionalForm;
