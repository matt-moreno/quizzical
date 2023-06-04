import { useState, useEffect} from 'react'
import Start from "./Start"
import uuid from 'react-uuid'
import Questions from './Questions'

function App() {

  const [quiz, setQuiz] = useState(false)
  const [quizData, setQuizData] = useState("")
  // Add a count state that will fetch a new quiz everytime the count is increased
  // const [count, setCount] = useState(0)

  // Wrap the function below in a UseEffect that will update each time the count is updated.
  // useEffect(() => {
  // Add GET request here 
  // }, [count])


  async function getQuizData() {
    // Add &encode=base64 to API call to hide the API data in the console
      const res = await fetch("https://opentdb.com/api.php?amount=5&type=multiple")
      const data = await res.json()
      .catch(error => console.log(error))

      let questionsArray = []
      data.results.map(question => {
        questionsArray.push({
          id: uuid(),
          answers: ([...question.incorrect_answers, question.correct_answer]),
          question: question.question, 
          correct: question.correct_answer,
          selected: null, 
          checked:false})
        })
      console.log(questionsArray)
      
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
