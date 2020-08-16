import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./assets/style.css";
import quizService from "./quizService";
import QuestionBox from "./components/QuestionBox";

// here selected prop will run fucnt computeAnswer
// which get user responce and access to correct answer from API
class QuizBee extends Component {
  // add state var score
  // add state responses to track number of question answered
  state = {
    questionBank: [],
    score: 0,
    responses: 0,
  };
  getQuestions = () => {
    quizService().then((question) => {
      this.setState({
        questionBank: question,
      });
    });
  };
  //   computeAnswer check matches with correct if so we increment score
  computeAnswer = (answer, correctAnswer) => {
    if (answer === correctAnswer) {
      this.setState({
        //   if answer correct plus 1
        score: this.state.score + 1,
      });
    }
    //   in all cases will +1 to track number of questions
    // and ensure that dont over-set value of responses than 5 questions
    this.setState({
      responses: this.state.responses < 5 ? this.state.responses + 1 : 5,
    });
  };
  componentDidMount() {
    this.getQuestions();
  }
  render() {
    return (
      <div className="container">
        <div className="title">QuizBee</div>
        {/* add another contidion to render QuestionBox component */}
        {/* if value 5 display result */}
        {this.state.questionBank.length > 0 &&
          this.state.responses < 5 &&
          this.state.questionBank.map(
            ({ question, answers, correct, questionId }) => (
              <QuestionBox
                question={question}
                options={answers}
                key={questionId}
                selected={(answer) => this.computeAnswer(answer, correct)}
              />
            )
          )}
        {/* add display result if responses =5 so return state score and if false null */}
        {this.state.responses === 5 ? <h2>{this.state.score}</h2> : null}
      </div>
    );
  }
}

ReactDOM.render(<QuizBee />, document.getElementById("root"));
