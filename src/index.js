import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./assets/style.css";
import quizService from "./quizService";
import QuestionBox from "./components/QuestionBox";

// creating class component QuizBee
class QuizBee extends Component {
  state = {
    // here question store when pulled from API

    // state should always be located at the nearest parent cause easy to debug
    questionBank: [],
  };

  // only way to update state variable by setState
  getQuestions = () => {
    quizService().then((question) => {
      this.setState({
        questionBank: question,
      });
    });
  };
  // we need to run function when component load up thats why componentDidMount
  componentDidMount() {
    this.getQuestions();
  }
  render() {
    return (
      <div className="container">
        <div className="title">QuizBee</div>
        {/* cheking is questionBank does have data to render */}
        {/* its will render a data only when its available {this.state.questionBank.length>0}*/}
        {/* use .map function to replace question objects */}
        {/* and then return back with => h4 tags with question text */}

        {/* instead of h4 we put QuestionBox with two props which automaticly bound question to render question and options to render btn of answers  */}
        {/* and property called key equal to questionId from data so React identify and correlate example of component with data thats consumes */}

        {this.state.questionBank.length > 0 &&
          this.state.questionBank.map(
            ({ question, answers, correct, questionId }) => (
              <QuestionBox
                question={question}
                option={answers}
                key={questionId}
              />
            )
          )}
      </div>
    );
  }
}

ReactDOM.render(<QuizBee />, document.getElementById("root"));
