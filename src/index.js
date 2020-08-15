import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './assets/style.css'
import quizService from './quizService'

class QuizBee extends Component{
    state = {
        // here question store when pulled from API

        // state should always be located at the nearest parent cause easy to debug
        questionBank: []
    }
    getQuestions =() => {
        quizService().then(question => {
            this.setState({
                questionBank:question
            })
        })
    }
    // we need to load function with component thats why componentDidMount
    componentDidMount(){
        this.getQuestions()
    }
    render(){
        return(
            <div className='container'>
                <div className='title'>QuizBee</div>
                {/* cheking is questionBank does have data to render */}
                {/* its will render a data only when its available {this.state.questionBank.length>0}*/}
                {/* use .map function to replace question objects */}
                {/* and then return back with => h4 tags with question text */}
                {this.state.questionBank.length>0 && this.state.questionBank.map(({question,answers,correct, questionId})=> <h4>{question}</h4>)}
            </div>
        )
    }
}

ReactDOM.render(<QuizBee/>,document.getElementById('root'))