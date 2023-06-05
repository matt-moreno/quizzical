import {decode} from 'html-entities';
import uuid from 'react-uuid'
import './index.css'

function Questions(props) {

    function handleClick(answer){
        if (props.data.checked){
          return
        }
        props.handleClickAnswer(props.id, answer)
      }

    const answersElement = props.data.answers.map(answer => {
        
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
            // STUDY BELOW TO UNDERSTAND HOW THE SELECTED BUTTON WORKS
            className={answer === props.data.selected ? "answer-btn selected" : "answer-btn"}>
                {decode(answer)}
            </button>
        )
    })

    return (
        <div className="question-container">
            <p>{decode(props.data.question)}</p>
            <div className="answer-container">             
                {answersElement}
            </div>
        </div>
    )
}

export default Questions