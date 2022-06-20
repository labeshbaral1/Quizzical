import React from "react"
import {toggleSelected} from "../redux/actions/index"
import { useDispatch } from 'react-redux'
import { useSelector } from "react-redux"
import { store } from "../redux/store"

export default function Choice(props){    
    
    const dispatch = useDispatch()   
     
    var active = useSelector((state) => state[props.questionNumber][props.choiceNumber])

    const style1 = {
        backgroundColor: active ? "#D6DBF5" : "#F5F7FB"
    }

    const style2 = {
        backgroundColor: (props.choiceNumber == localStorage.getItem(props.questionNumber) && store.getState()[props.questionNumber][props.choiceNumber]) ? "green" : "red"
    }

        return (
            props.checking ? 

            <div className="question-choice" style={style2}> {props.choice} </div> : 

            <div className="question-choice" onClick={() => dispatch(toggleSelected(props.questionNumber, props.choiceNumber))} style={style1}>  {props.choice}</div>

        )
   
}

 