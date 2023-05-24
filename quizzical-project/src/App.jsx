import { useState, useEffect} from 'react'
import Start from "./Start"
import Questions from './Questions'
import uuid from 'react-uuid'

function App() {

  const [quiz, setQuiz] = useState(false)
  const [quizData, setQuizData] = useState("")
  const [isClicked, setClicked] = useState(false)

  async function getQuizData() {
      const res = await fetch("https://opentdb.com/api.php?amount=5&type=multiple")
      const data = await res.json()
      .catch(error => console.log(error))
      setQuiz(true)
      setQuizData(data)
  }

  function handleIsClicked(event) {
    if (event.target) {
      event.target.style.background = "#D6DBF5"
    }

    // for (let answer of quizData.results) {
    //   if (answer.correct_answer === event.target.innerText){
    //     console.log("You got it right!")
    //   }
    // }
  }

  return (
    <>
      {!quiz && <Start startQuiz={getQuizData}/>}
      {quiz && <Questions 
      data={quizData.results}
      handleClick={event => handleIsClicked(event)}
      isClicked={isClicked}
      />}
    </> 
  )
}

export default App
