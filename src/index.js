import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './assets/style.css'
import quizService from './quizService'

class QuizBee extends Component{
    state{
        // here question store when pulled from API

        // state should always be located at the nearest parent cause easy to debug
        questionBank: []
    }
    render(){
        return(
            <div className='container'>
                <div className='title'>QuizBee</div>
            </div>
        )
    }
}

ReactDOM.render(<QuizBee/>,document.getElementById('root'))