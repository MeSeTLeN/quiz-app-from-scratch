import React from 'react'

// create single function which brings in props using a single argument(from dataArray)
const QuestionBox = ({question, options}) =>{
    return(
        // destructuring - expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables
        // instead argument we destructuring directly to exctract question and options
        // then return jsx template
        <div className="questionBox">
            <div className="question">{question}</div>
        </div>
    )
}

export default QuestionBox