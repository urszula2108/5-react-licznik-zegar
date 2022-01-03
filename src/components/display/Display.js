import React from "react"
import "./Display.css"

const Display = (props) => {

  return (
    <div className="counter-display">
      Counter: <span className="counter-value">{props.counterValueToDisplay}</span>
    </div>
  )
}

export default Display
