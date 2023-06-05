import { useState, useEffect} from 'react'
import Start from "./Start"
import uuid from 'react-uuid'
import Questions from './Questions'

function App() {

  const [quiz, setQuiz] = useState(false)
  const [quizData, setQuizData] = useState([])
  // Add a count state that will fetch a new quiz everytime the count is increased
  // const [count, setCount] = useState(0)

  // Add a checked state that defaults to false. If the checked state is false you can check your answers
  // If the checked state is true you can play again
  // const [checked, setChecked] = useState(false)

  // Wrap the function below in a UseEffect that will update each time the count is updated.
  // useEffect(() => {
  // Add GET request here 
  // }, [count])

  const shuffleArray = (arr) => arr.sort(() => Math.random() - 0.5);

  async function getQuizData() {
    // Add &encode=base64 to API call to hide the API data in the console
      const res = await fetch("https://opentdb.com/api.php?amount=5&type=multiple")
      const data = await res.json()
      .catch(error => console.log(error))

      let questionsArray = []
      data.results.map(question => {
        questionsArray.push({
          id: uuid(),
          answers: shuffleArray([...question.incorrect_answers, question.correct_answer]),
          question: question.question, 
          correct: question.correct_answer,
          selected: null, 
          checked:false})
        })

      setQuiz(true)
      setQuizData(questionsArray)
  }

  function handleClickAnswer(id, answer) {
    setQuizData(prevQuestions => prevQuestions.map(question => {
      return question.id === id ? {...question, selected: answer} : question
    }))
  }

  const questionElement = quiz ? 
  quizData.map(question => {
    return (
      <Questions
      key={question.id}
      id={question.id}
      handleClickAnswer={handleClickAnswer}
      question={question.question}
      answers={question.answers} 
      />
    )
  })
  : quiz

  return (
    <>
      {!quiz && <Start startQuiz={getQuizData}/>}
      {questionElement}
      {quiz && <button className="check-btn">Check answers</button>}
    </> 
  )
}

export default App
