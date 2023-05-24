import { useState, useEffect } from 'react'
import {decode} from 'html-entities';
import uuid from 'react-uuid'
import './App.css'

function Questions(props) {
    // const triviaQuestions = props.data.map(trivia => {
        
    //     const questionsArr = [trivia.correct_answer, 
    //     trivia.incorrect_answers[0], 
    //     trivia.incorrect_answers[1], 
    //     trivia.incorrect_answers[2]]
        
    //     const randomizedQuestions = questionsArr.sort((a, b) => 0.5 - Math.random())
        
    //     console.log(randomizedQuestions)
    console.log(props)
    return (
        <div className="question-container">
            <p>{decode(props.question)}</p>
            <div className='answer-container'>             
                <button></button>
                <button></button>
                <button></button>
                <button></button>
            </div>
        </div>
    )
}

export default Questions