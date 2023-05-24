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
            <label htmlFor={props.id}>{decode(props.question)}</label>
            <select id={props.id} className='answer-container'>             
                <option>{decode(questions[0])}</option>
                <option>{decode(questions[1])}</option>
                <option>{decode(questions[2])}</option>
                <option>{decode(questions[3])}</option>
            </select>
        </div>
    )
}

export default Questions