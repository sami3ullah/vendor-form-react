import { useState } from "react";
import "./App.css";
import questionsArray from "./data";
import Questions from "./components/Questions";

function App() {
  const [answer, setAnswer] = useState({
    recommendation: {
      question: "",
      value: "",
      conditionalQuestion: false,
    },
    helpful: {
      question: "",
      value: "",
      conditionalQuestion: false,
    },
    experience: {
      question: "",
      value: "",
      conditionalQuestion: false,
    },
  });

  // handle submit form
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Questions
          questionsArray={questionsArray}
          answer={answer}
          setAnswer={setAnswer}
        />
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
