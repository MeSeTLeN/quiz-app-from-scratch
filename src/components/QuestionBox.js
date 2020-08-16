import React, { useState } from "react";

const QuestionBox = ({ question, options }) => {
  const [answer, setAnswer] = useState(options);
//   onClick run funct which run setAnswer method
//   it will rewrtite the answer state Array with new Array contain only one answer
  return (
    <div className="questionBox">
      <div className="question">{question}</div>
      {answer.map((text, index) => (
        <button
          key={index}
          className="answerBtn"
          onClick={() => setAnswer([text])}
        >
          {text}
        </button>
      ))}
    </div>
  );
};

export default QuestionBox;
