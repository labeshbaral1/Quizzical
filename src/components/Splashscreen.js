import React from "react"

export default function Splashscreen(props){
 return(
    <div className="splashscreen-container">
        <h1>Quizzical</h1>
        <h2>Click Start Quiz to begin</h2>
        <div className="start-button" onClick={props.toggle}>Start quiz</div>
    </div>
 )   
}