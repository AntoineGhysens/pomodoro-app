import React from 'react'
import ReactDOM from 'react-dom'
import Button from './Button.js'

const Buttons = ({name}) => {
  return (
    <div className="pomodoro__main__buttons">
      <Button name="+"/>
      <Button name="resume/pause"/>
      <Button name="reset"/>
      <Button name="-"/>
    </div>
  )
}

export default Buttons;
