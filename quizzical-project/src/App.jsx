import { useState, useEffect} from 'react'
import Start from "./Start"
import Questions from './Questions'

function App() {

  const [quiz, setQuiz] = useState(false)
  const [quizData, setQuizData] = useState()

  async function getQuizData() {
      const res = await fetch("https://opentdb.com/api.php?amount=5&type=multiple")
      const data = await res.json()
      .catch(error => console.log(error))
      setQuiz(true)
      setQuizData(data)
  }

  return (
    <>
      {!quiz && <Start startQuiz={getQuizData}/>}
      {quiz && <Questions data={quizData.results}/>}
    </> 
  )
}

export default App
