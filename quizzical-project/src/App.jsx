import { useState, useEffect} from 'react'
import Start from "./Start"
import uuid from 'react-uuid'
import Questions from './Questions'

function App() {

  const [quiz, setQuiz] = useState(false)
  const [quizData, setQuizData] = useState([])
  const [checked, setChecked] = useState(false)
  const [correct, setCorrect] = useState(0)

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
          checked: false})
        })

      setQuiz(true)
      setChecked(false)
      setQuizData(questionsArray)
  }

  function handleClickAnswer(id, answer) {
    setQuizData(prevQuestions => prevQuestions.map(question => {
      return question.id === id ? {...question, selected: answer} : question
    }))
  }

  // STUDY THIS FUNCTION TO UNDERSTAND HOW THE CHECK WORKS
  function handleCheck() {
    let selected = true
    quizData.forEach(question =>{
      if (question.selected === null){
        selected = false
        return
      }
    })

    if (!selected){
      return
    }
    
    setQuizData(prevQuestions => prevQuestions.map(question => {
      return {...question, checked:true}
    }))
    setChecked(true)
    
    let correct = 0
    quizData.forEach(question =>{
      if (question.correct === question.selected){
        correct += 1
      }
    })
    setCorrect(correct)
  }

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
