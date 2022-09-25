import React from "react";
import ConditionalForm from "./ConditionalForm";
import RadioButtonGroup from "./RadioButtonGroup";
import "../App.css";

const veryBadRating = "1";
const badRating = "2";

function Questions({ questionsArray, answer, setAnswer }) {
  // handle change for radio buttons
  const handleChange = (questionData, event) => {
    const value = event.target.value;
    if (value === veryBadRating || value === badRating) {
      // if there are conditional questions
      if (questionData?.conditionalQuestions?.length) {
        setAnswer((prevState) => ({
          ...prevState,
          [questionData.name]: {
            question: questionData.question,
            value: event.target.value,
            conditionalQuestion: true,
          },
        }));
      }
    } else {
      // if there are not any conditional questions
      setAnswer((prevState) => ({
        ...prevState,
        [questionData.name]: {
          question: questionData.question,
          value: event.target.value,
        },
      }));
    }
  };

  return (
    <div className="main-wrapper">
      {questionsArray.map((questionData) => {
        return (
          <div className="container width-60" key={questionData.id}>
            <p>{questionData.question}</p>
            <RadioButtonGroup
              handleChange={handleChange}
              questionData={questionData}
            />
            {answer[questionData.name].conditionalQuestion ? (
              <ConditionalForm
                conditionalQuestionsArray={questionData.conditionalQuestions}
                handleChange={questionData}
              />
            ) : (
              ""
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Questions;
