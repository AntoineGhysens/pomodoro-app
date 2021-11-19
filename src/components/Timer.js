import React from 'react'
import ReactDOM from 'react-dom'

const Timer = ({minutes, seconds, milliseconds}) => {
  return (
    <p className="pomodoro__main__timer">{minutes} : {seconds}.{milliseconds}</p>
  )
}

export default Timer;
