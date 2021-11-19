import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom'
import Timer from './Timer.js';
import Buttons from './Buttons.js';

const Main = ({title}) => {
  const DEFAULT_COUNTDOWN = 5*60000
  const [countdown, setCountdown] = useState(DEFAULT_COUNTDOWN)
  const [runState, setRunState] = useState(false)
  const [pauseResumeText, setPauseResumeText] = useState("start")

  // useEffect(()=>{
  //   setInterval(()=>{
  //     console.log(countdown)
  //   }, 30000)
  // },[])


  useEffect(() => {
    if(runState){
      const myVar = setInterval(() => {
        if(countdown === 0){
            clearInterval(myVar)
            setRunState(false)
          } else {
            setCountdown(countdown - 1)
          }
      }, 1)
      return () => clearInterval(myVar)
    }
  }, [countdown, runState])

  const increment = () => {
    setCountdown(countdown + 60000)
  }
  const pauseResume = () => {
    if (runState == false){
      setRunState(true)
      setPauseResumeText("pause")
    }
    else{
      setRunState(false)
      setPauseResumeText("start")
    }
  }
  const reset = () => {
    setCountdown(DEFAULT_COUNTDOWN)
  }
  const decrement = () => {
    setCountdown(countdown - 60000)
  }

  const manageTime = () => {

  }

  const getTimeMinutes = (ms) => {
    let minutes = parseInt(ms/60000)
    return minutes
  }
  const getTimeSeconds = (ms) => {
    let seconds = parseInt((ms/1000)%60)
    return seconds
  }
  const getTimeMs = (ms) => {
    let msDisplayed
    return msDisplayed
  }
  console.log(getTimeSeconds())
  return (
    <div className="pomodoro">
      <header className="pomodoro__header">
        <h1 className="pomodoro__header__heading">{title}</h1>
      </header>
      <main className="pomodoro__main">
        <Timer minutes={countdown} seconds={countdown} milliseconds={countdown}/>
        <Buttons forIncrement={increment} forDecrement={decrement} forReset={reset} forPauseResume={pauseResume} pauseResumeStatus={pauseResumeText}/>
      </main>
    </div>
  )
}

export default Main;
