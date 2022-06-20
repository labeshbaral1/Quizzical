import React from "react"
import Question from "./Question.js"




export function Main(){
    
    const [questionArray, setQuestionArray] = React.useState([])
    
        
    React.useEffect(() => {
        fetch('https://opentdb.com/api.php?amount=6&type=multiple')
        .then(res => res.json())
        .then(data => setQuestionArray(data.results))

    }, [])
    
    let questionNumber = 0;
    const questionElements = questionArray.map(elem => {
        questionNumber++
        let rand = (1 + Math.floor(Math.random()* 4))

        window.localStorage.setItem(questionNumber, rand)

        return (
            <Question 
            key={questionNumber}
            questionNumber={questionNumber} 
            question={elem.question} 
            correct_answer={elem.correct_answer} 
            correct_answer_position = {rand}
            incorrect_answers={elem.incorrect_answers} 
            />
        )})



    return (
        <div>
            <div className="question-container"> 
            {questionElements}
            </div>     
        </div>
    )
}


 