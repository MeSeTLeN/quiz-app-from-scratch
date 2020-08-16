import React from "react";

// add funct with prop playAgain
const Result = ({ score, responses, playAgain }) => (
  <div className="score-board">
    <div className="score">
      You scored {score}/{responses} correct answers!
    </div>
    <button className="playBtn" onClick={playAgain}>
      Play again!
    </button>
  </div>
);
export default Result;
