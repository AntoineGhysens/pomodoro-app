import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom'
import Timer from './Timer.js';
import Buttons from './Buttons.js';

const Main = ({title}) => {
  const [userDefinedProp, setUserDefinedProp] = useState(1)
  const [countdown, setCountdown] = useState(userDefinedProp*60000)
  const DEFAULT_TIME = countdown
  const [runState, setRunState] = useState(false)
  const [pauseResumeText, setPauseResumeText] = useState("start")
  const [msDisplayed, setMsDisplayed] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(userDefinedProp)

  // const manageTime = (cd) => {
  //   getTimeMs(cd)
  //   while(countdown%1000 == 999){
  //     getTimeSeconds(cd)
  //   }
  //   while(countdown%60000 == 59999){
  //     getTimeMinutes(cd)
  //   }
  // }


  const getTimeMs = (cd) => {
    if(cd%1000 != 0){
      setMsDisplayed(msDisplayed - 1)
    }
    else{
      setMsDisplayed(999)
    }
    return msDisplayed
  }
  const getTimeSeconds = (cd) => {
    setSeconds(parseInt((cd/1000)%60))
    return seconds
  }
  const getTimeMinutes = (cd) => {
    setMinutes(parseInt(cd/60000))
    return minutes
    // let minutes = parseInt(ms/60000)
  }
  useEffect(() => {
    if(runState){
      const timeTicks = setInterval(() => {
        if(countdown === 0){
            clearInterval(timeTicks)
            setRunState(false)
          } else {
            // manageTime(countdown)
            getTimeMs(countdown)
            getTimeSeconds(countdown)
            getTimeMinutes(countdown)
            setCountdown(countdown - 1)
          }
      }, 1)
      return () => clearInterval(timeTicks)
    }
  }, [countdown, runState])

  // useEffect(()=>{
  //   setInterval(()=>{
  //     console.log(countdown)
  //   }, 5000)
  // },[])
  const increment = () => {
    if(countdown%60000 ==0){
      // setUserDefinedProp(userDefinedProp + 1)
    // if(countdown == DEFAULT_TIME){
    setCountdown(countdown + 60000)
  }
    // setDEFAULT_COUNTDOWN_MINUTES
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
    setCountdown(userDefinedProp*60000)
    getTimeMs(countdown)
    getTimeSeconds(countdown)
    getTimeMinutes(countdown)
  }
  const decrement = () => {
    setCountdown(countdown - 60000)
  }
  return (
    <div className="pomodoro">
      <header className="pomodoro__header">
        <h1 className="pomodoro__header__heading">{title}</h1>
      </header>
      <main className="pomodoro__main">
        <Timer minutes={minutes} seconds={seconds} milliseconds={msDisplayed}/>
        <Buttons forIncrement={increment} forDecrement={decrement} forReset={reset} forPauseResume={pauseResume} pauseResumeStatus={pauseResumeText}/>
      </main>
    </div>
  )
}

export default Main;
