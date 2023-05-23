import { useState, useEffect } from 'react'
import {decode} from 'html-entities';
import uuid from 'react-uuid'
import './App.css'

function Questions(props) {
    const triviaQuestions = props.data.map(trivia => {
        
        const questionsArr = [trivia.correct_answer, 
        trivia.incorrect_answers[0], 
        trivia.incorrect_answers[1], 
        trivia.incorrect_answers[2]]
        
        const randomizedQuestions = questionsArr.sort((a, b) => 0.5 - Math.random())
        
        console.log(randomizedQuestions)

        return (
        <div className="question-container" key={uuid()}>
            <p>{decode(trivia.question)}</p>
            <div className='answer-container'>
                <button>{trivia.correct_answer}</button>
                <button>{trivia.incorrect_answers[0]}</button>
                <button>{trivia.incorrect_answers[1]}</button>
                <button>{trivia.incorrect_answers[2]}</button>
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