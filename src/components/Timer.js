import React from 'react'
import ReactDOM from 'react-dom'

const Timer = ({minutes, seconds}) => {
  const lessThanTen = nb => {
    if(nb < 10){
      return `0${nb}`
    }
    else {
      return nb
    }
  }

  return (
    <p className="pomodoro__main__timer">{minutes} : {lessThanTen(seconds)}</p>
  )
}

export default Timer;
