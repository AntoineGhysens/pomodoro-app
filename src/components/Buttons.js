import React from 'react'
import ReactDOM from 'react-dom'
import Button from './Button.js'

const Buttons = () => {
  return (
    <div className="pomodoro__main__buttons">
      <Button handleClick={increment} addClass="pomodoro__main__buttons__plus" name="+"/>
      <Button handleClick={pauseResume} addClass="pomodoro__main__buttons__pause-resume" name="resume/pause"/>
      <Button handleClick={reset} addClass="pomodoro__main__buttons__reset" name="reset"/>
      <Button handleClick={decrement} addClass="pomodoro__main__buttons__minus" name="-"/>
    </div>
  )
}


const increment = () => {
  console.log("+")
  // count += 1
}
const pauseResume = () => {
  console.log("pause/resume")
}
const reset = () => {
  console.log("reset")
}
const decrement = () => {
  console.log("-")
}


export default Buttons;
