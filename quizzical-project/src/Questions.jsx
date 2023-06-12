import uuid from 'react-uuid'
import './index.css'

function Questions(props) {

    function handleClick(answer){
        // Prevents elements from being selected after the handleCheck function is ran. 
        if (props.data.checked){
          return
        }
        props.handleClickAnswer(props.id, answer)
      }

    const answersElement = props.data.answers.map(answer => {
        // Passes in the correct element ID after handle check is ran. 
        let id = null
        if (props.data.checked) {
        if (props.data.correct === answer) {
            id = 'correct'
        } else if (props.data.selected === answer) {
            id = 'incorrect'
        } else {
            id = 'not-selected'
        }
        }

        return (
            <button
            key={uuid()}
            id={id}
            onClick={() => handleClick(answer)}
            // If the answer button matches the selected answer, it will have the selected class
            className={answer === props.data.selected ? "answer-btn selected" : "answer-btn"}>
                {atob(answer)}
            </button>
        )
    })

    return (
        <div className="question-container">
            <p>{atob(props.data.question)}</p>
            <div className="answer-container">             
                {answersElement}
            </div>
        </div>
    )
}

export default Questions