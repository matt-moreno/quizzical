import { useState, useEffect } from 'react'
import './App.css'

function Questions(props) {
    console.log(props)

    return (
        <>
            <div className="question-container">
                <p>This is where the question will go. What's your favorite color?</p>
                <div className='answer-container'>
                    <button>Blue</button>
                    <button>Yellow</button>
                    <button>Red</button>
                    <button>Orange</button>
                </div>
            </div>
        </>
    )
}

export default Questions