import { useState, useEffect } from 'react'
import uuid from 'react-uuid'
import './App.css'

function Questions(props) {
    

    const triviaQuestions = props.data.map(triviaQuestion => {
        // Figure out how to randomize correct/incorrect answers
        return (
        <div className="question-container" key={uuid()}>
            <p>{triviaQuestion.question}</p>
            <div className='answer-container'>
                <button>{triviaQuestion.correct_answer}</button>
                <button>{triviaQuestion.incorrect_answers[0]}</button>
                <button>{triviaQuestion.incorrect_answers[1]}</button>
                <button>{triviaQuestion.incorrect_answers[2]}</button>
            </div>
        </div>
        )
    })
    return (
        <>
            {triviaQuestions}
        </>
    )
}

export default Questions