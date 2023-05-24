import { useState, useEffect } from 'react'
import {decode} from 'html-entities';
import uuid from 'react-uuid'
import './App.css'

function Questions(props) {
    const triviaQuestions = props.data.map(trivia => {
        
        const questions = [
            trivia.correct_answer, 
            trivia.incorrect_answers[0], 
            trivia.incorrect_answers[1], 
            trivia.incorrect_answers[2]
        ].sort((a, b) => 0.5 - Math.random())
        
        return (
        <div className="question-container" key={uuid()} id={uuid()}>
            <p>{decode(trivia.question)}</p>
            <div className='answer-container'>
                <button onClick={props.handleClick}>{decode(questions[0])}</button>
                <button onClick={props.handleClick}>{decode(questions[1])}</button>
                <button onClick={props.handleClick}>{decode(questions[2])}</button>
                <button onClick={props.handleClick}>{decode(questions[3])}</button>
            </div>
        </div>
        )
    })
    return (
        <>
            {triviaQuestions}
            <button className='start-button'>
                Check answers
            </button>
        </>
    )
}

export default Questions