import React from 'react'
import ReactDOM from 'react-dom'

const Timer = ({value}) => {
  return (
    <p className="pomodoro__main__timer">{value}</p>
  )
}

export default Timer;
