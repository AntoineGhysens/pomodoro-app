import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom'
import Timer from './Timer.js';
import Button from './Button.js';
import ResetButton from './ResetButton.js';

const Main = ({title}) => {
  const [userDefinedProp, setUserDefinedProp] = useState(5)
  const [countdown, setCountdown] = useState(userDefinedProp*60000)
  const DEFAULT_TIME = countdown
  const [runState, setRunState] = useState(false)
  const [pauseResumeText, setPauseResumeText] = useState("start")
  const [msInMemory, setMsInMemory] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(userDefinedProp)
  const [firstRender, setFirstRender] = useState(true)
  const [buttonInactive, setButtonInactive] = useState(false)

  const getTimeMs = (cd) => {
    return
  }
  const getTimeSeconds = (cd) => {
    setSeconds(parseInt((cd/1000)%60))
    return seconds
  }

  const getTimeMinutes = (cd) => {
    setMinutes(parseInt(cd/60000))
    return minutes
  }

  useEffect(() => {
    if(runState){
      const timeTicks = setInterval(() => {
        if(countdown === 0){
          clearInterval(timeTicks)
          setRunState(false)
        } else {
          setCountdown(countdown - 1000)
          getTimeSeconds(countdown)
          getTimeMinutes(countdown)
        }
      }, 1000)
      return () => clearInterval(timeTicks)
    }
  }, [countdown, runState])

  useEffect(() => {
    setMinutes(userDefinedProp)
    setCountdown(userDefinedProp * 60000)
  }, [userDefinedProp])

  const increment = () => {
    if(!runState && (userDefinedProp < 59)){
      setUserDefinedProp(userDefinedProp + 1)
    }
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
    if(!runState){
      setCountdown(userDefinedProp*60000)
    }
    else{
      setButtonInactive(true)
    }
  }
  const decrement = () => {
    if (!runState && (userDefinedProp > 1)){
      setUserDefinedProp(userDefinedProp - 1)
      setCountdown(userDefinedProp * 60000)
    }
  }

  return (
    <div className="pomodoro">
      <header className="pomodoro__header">
        <h1 className="pomodoro__header__heading">{title}</h1>
      </header>
      <main className="pomodoro__main">
        <Timer minutes={minutes} seconds={seconds}/>
        <div className="pomodoro__main__buttons">
          <Button handleClick={increment} addClass={"pomodoro__main__buttons__increment"} name={"+"}/>
          <Button handleClick={pauseResume} addClass={"pomodoro__main__buttons__start-pause-resume"} name={pauseResumeText}/>
          <ResetButton isRunning={!runState} handleClick={reset} addClass={"pomodoro__main__buttons__reset"} disabled={buttonInactive} name={"reset"}/>
          <Button handleClick={decrement} addClass={"pomodoro__main__buttons__decrement"} name={"-"}/>
        </div>
      </main>
    </div>
  )
}

export default Main;
