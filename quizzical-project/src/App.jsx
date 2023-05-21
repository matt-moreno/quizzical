import { useState, useEffect} from 'react'
import Start from "./Start"
import Questions from './Questions'

function App() {

  const [quiz, setQuiz] = useState(false)
    
    function startQuizBtn() {
      // Make it flip the boolean later  
      setQuiz(true)
      getQuizData()
    }

    async function getQuizData() {
        const res = await fetch("https://opentdb.com/api.php?amount=5&type=multiple")
        const quizData = await res.json()
        return quizData
    }

  return (
    <>
      {!quiz && <Start startQuiz={startQuizBtn}/>}
      {quiz && <Questions />}
    </> 
  )
}

export default App
