import React from "react"
import Choice from "./Choice.js"

export default function Question(props){
    
    const cap = props.correct_answer_position 

     
    const choices = [...props.incorrect_answers.slice(0,cap-1), props.correct_answer, ...props.incorrect_answers.slice(cap-1, props.incorrect_answers.length)]


    let choiceNumber = 0
    const choicesElements = choices.map(elem => {
        choiceNumber++

        return (
            <Choice 
            key={choiceNumber}
            questionNumber={props.questionNumber}
            choiceNumber={choiceNumber} 
            choice = {elem}
            />
        )})
    

    return (
        <div className="question">
            <h1 className="question-question">{props.question}</h1>
            <div className="question-choice-container">
                {choicesElements}
            </div>
        </div>
        
    )
        
    }