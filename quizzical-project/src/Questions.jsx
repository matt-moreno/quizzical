import { useState, useEffect } from 'react'
import {decode} from 'html-entities';
import uuid from 'react-uuid'
import './index.css'

function Questions(props) {

    const answersElement = props.answers.map(answer => {
        return (
            <button
            key={uuid()}
            onClick={() => props.handleClickAnswer(props.id, answer)}
            className="answer-btn">
                {decode(answer)}
            </button>
        )
    })

    return (
        <div className="question-container">
            <p>{decode(props.question)}</p>
            <div className='answer-container'>             
                {answersElement}
            </div>
        </div>
    )
}

export default Questions