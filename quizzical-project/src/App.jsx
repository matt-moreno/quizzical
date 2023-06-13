import { useState, useEffect} from 'react'
import Start from "./Start"
import uuid from 'react-uuid'
import Questions from './Questions'
import uuid from 'react-uuid'

function App() {

  const [quiz, setQuiz] = useState(false)
  const [quizData, setQuizData] = useState([])
  const [checked, setChecked] = useState(false)
  const [correct, setCorrect] = useState(0)

  const shuffleArray = (arr) => arr.sort(() => Math.random() - 0.5);

  async function getQuizData() {
      const res = await fetch("https://opentdb.com/api.php?amount=5&type=multiple&encode=base64")
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
          checked: false})
        })

      setQuiz(true)
      setChecked(false)
      setQuizData(questionsArray)
  }

  // Adds the answer to the selected property in the quizData state. 
  function handleClickAnswer(id, answer) {
    setQuizData(prevQuestions => prevQuestions.map(question => {
      return question.id === id ? {...question, selected: answer} : question
    }))
  }

  function handleCheck() {
    // Error handling. If the question isn't selected don't run the check.
    // This part maps through each question and will set the selected boolean to false if
    // something isn't selected.
    let selected = true
    quizData.forEach(question =>{
      if (question.selected === null){
        selected = false
        return
      }
    })

    // This part then prevents the handle check functionality from running if it hasn't been selected. 
    if (!selected){
      return
    }
    
    // Sets the checked boolean to true so that the Questions component knows if the selected answer was
    // correct or incorrect. 
    setQuizData(prevQuestions => prevQuestions.map(question => {
      return {...question, checked:true}
    }))

    // Sets the checked state to true so that the conditional elements below render.
    setChecked(true)

    // Increases the count if the selected question matches the correct question. 
    let correct = 0
    quizData.forEach(question =>{
      if (question.correct === question.selected){
        correct += 1
      }
    })
    setCorrect(correct)
  }

  // Checks if Quiz is true then maps over the quizData to render the Questions components
  const questionElement = quiz ? 
  quizData.map(question => {
    return (
      <Questions
      key={question.id}
      id={question.id}
      data={question}
      handleClickAnswer={handleClickAnswer}
      />
    )
  })
  : quiz

  return (
    <>
      {!quiz && <Start startQuiz={getQuizData}/>}
      {questionElement}
      {checked && <div className="score">You scored {correct}/5 correct answers</div>}
      {quiz && <button 
      className="check-btn"
      onClick={checked ? getQuizData : handleCheck}>
        {checked ? "Play again" : "Check answers"}
        </button>}
    </> 
  )
}

export default App
