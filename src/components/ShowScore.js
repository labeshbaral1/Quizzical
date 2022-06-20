import React from 'react'

function ShowScore(props) {
  return (
    <div>{props.correct} out of {props.total}</div>
  )
}

export default ShowScore