import React, { useState } from "react";

const QuestionBox = ({ question, options }) => {
  // when user press one of the btn we wanna remove other from UI
  // using Local State Variable to hold options Array when QuestionBox component created
  // we can use it to render a set of option btn
  // function component dont provide state management as class component
  // cause we dont wanna state management and lifecycle feature in component which use to only display data and provide simple interaction features
  // if u will need state in function component react offers plug&play API known as HOOKS
  // import useState and create state var set initial value of answer var from options array that getting as prop

  const [answer, setAnswer] = useState(options);

  // setAnswer refers to funct that can be used to update value of answer var
  // use .map on the answer var to render series of bn
  // use index from answer array as key
  return (
    <div className="questionBox">
      <div className="question">{question}</div>
      {answer.map((text, index) => (
        <button key={index} className="answerBtn">
          {text}
        </button>
      ))}
    </div>
  );
};

export default QuestionBox;
