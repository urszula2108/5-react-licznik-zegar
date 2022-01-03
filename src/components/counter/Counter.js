import React, { useState } from "react"
import ButtonsPannel from "../buttons-panel/ButtonsPanel"
import ClockFunctional from "../clock-functional/ClockFunctional"
import "./Counter.css"
import Display from "../display/Display"
import Step from "../step/Step"

const Counter = (props) => {
  const [counterValue, setCounterValue] = useState(props.initValue)
  const [stepValue, setStepValue] = useState(1)
  const [displayClock, setdisplayClock] = useState(true)

  const showHideClock = (e) => {
    setdisplayClock(!displayClock)
  }

  const stepValueChange = (e) => {
    setStepValue(+e.target.value)
  }

  const buttonHandleChange = (action) => {
    let currentCounterValue = counterValue
    let currentStepValue = stepValue


    if (action === "add-x") {
      currentCounterValue += currentStepValue
    } else if (action === "reset") {
      currentCounterValue = 0
    } else {
      currentCounterValue = props.initValue
    }
    setCounterValue(currentCounterValue)
  }


  return (
    <div className="counter-container">
      <div>
        <Display counterValueToDisplay={counterValue} />
        <ButtonsPannel
          buttonMethod={buttonHandleChange}
          stepValueToDisplay={stepValue}
        />
        <Step stepMethod={stepValueChange} />
      </div>
      <div className="clock-container">
        {displayClock ? (
          <ClockFunctional clockMethod={showHideClock} />
        ) : (
          <span onClick={showHideClock} className="show-clock">Show clock</span>
        )}
      </div>
    </div>
  )
}

export default Counter
