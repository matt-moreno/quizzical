import { useState, useEffect} from 'react'
import Start from "./Start"
import uuid from 'react-uuid'
import Questions from './Questions'

function App() {

  const [quiz, setQuiz] = useState(false)
  const [quizData, setQuizData] = useState("")

  async function getQuizData() {
      const res = await fetch("https://opentdb.com/api.php?amount=5&type=multiple")
      const data = await res.json()
      .catch(error => console.log(error))
      setQuiz(true)
      setQuizData(data)
  }

  const questionElement = quiz ? 
  quizData.results.map(question => {
    return (
      <Questions
      key={uuid()}
      id={uuid()}
      question={question.question}
      correctAnswer={question.correct_answer}
      incorrectAnswer={question.incorrect_answers} />
    )
  })
  : quiz

  return (
    <>
      {!quiz && <Start startQuiz={getQuizData}/>}
      {questionElement}
      {quiz && <button>Check answers</button>}
    </> 
  )
}

export default App
