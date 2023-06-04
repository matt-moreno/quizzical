import { useState, useEffect } from 'react'
import {decode} from 'html-entities';
import uuid from 'react-uuid'
import './App.css'

function Questions(props) {
    const questions = [
        props.correctAnswer,
        props.incorrectAnswer[0],
        props.incorrectAnswer[1],
        props.incorrectAnswer[2]
    ].sort((a, b) => 0.5 - Math.random())

    return (
        <div className="question-container">
            <p>{decode(props.question)}</p>
            <div className='answer-container'>             
                <button>{decode(questions[0])}</button>
                <button>{decode(questions[1])}</button>
                <button>{decode(questions[2])}</button>
                <button>{decode(questions[3])}</button>
            </div>
        </div>
    )
}

export default Questions