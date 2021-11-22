import React from 'react'
import ReactDOM from 'react-dom'

const Timer = ({minutes, seconds}) => {
  return (
    <p className="pomodoro__main__timer">{minutes} : {seconds}</p>
  )
}

export default Timer;
