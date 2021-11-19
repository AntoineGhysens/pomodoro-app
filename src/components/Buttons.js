import React from 'react'
import ReactDOM from 'react-dom'
import Button from './Button.js'

const Buttons = ({forIncrement, forPauseResume, forReset, forDecrement, pauseResumeStatus}) => {
  return (
    <div className="pomodoro__main__buttons">
      <Button handleClick={forIncrement} addClass="pomodoro__main__buttons__plus" name="+"/>
      <Button handleClick={forPauseResume} addClass="pomodoro__main__buttons__pause-resume" name={pauseResumeStatus}/>
      <Button handleClick={forReset} addClass="pomodoro__main__buttons__reset" name="reset"/>
      <Button handleClick={forDecrement} addClass="pomodoro__main__buttons__minus" name="-"/>
    </div>
  )
}


export default Buttons;
