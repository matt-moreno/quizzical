import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './Start.css'

function Start() {

    return (
    <>
        <div>
            <a href="https://vitejs.dev" target="_blank">
                <img src={viteLogo} className="logo" alt="Vite logo" />
                {/* CHANGE ABOVE TO QUIZ LOGO */}
            </a>
            <a href="https://react.dev" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
        </div>

        <h1>Quizzical Project</h1>
        <h3>Put your trivia knowledge to the test!</h3>
        <button className='start-button'>
            Start Quiz
        </button>
    </>
    )
}

export default Start