import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom'
import Timer from './Timer.js';
import Button from './Button.js';
import ResetButton from './ResetButton.js';

const Main = ({title}) => {
  const [userDefinedProp, setUserDefinedProp] = useState(3)
  const [countdown, setCountdown] = useState(userDefinedProp*60000)
  const DEFAULT_TIME = countdown
  const [runState, setRunState] = useState(false)
  const [pauseResumeText, setPauseResumeText] = useState("start")
  const [msInMemory, setMsInMemory] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(userDefinedProp)
  const [firstRender, setFirstRender] = useState(true)
  const [buttonInactive, setButtonInactive] = useState(false)
  // const [changeMin, setChangeMin] = useState(3)

  // const manageTime = (cd) => {
  //   while(countdown%1000 == 999){
  //     getTimeSeconds(cd)
  //   }
  //   while(countdown%60000 == 59999){
  //     getTimeMinutes(cd)
  //   }
  // }


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

  // if(firstRender){
  //   setFirstRender(false)
  //   getTimeSeconds(countdown)
  //   getTimeMinutes(countdown)
  // }
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
    if(!runState){
      setUserDefinedProp(userDefinedProp + 1)
    }
    // if(countdown%60000 ==0){
      // setUserDefinedProp(userDefinedProp + 1)
    // if(countdown == DEFAULT_TIME){
    // setCountdown(countdown + 60000)
    // }
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
      // getTimeSeconds(countdown)
      // getTimeMinutes(countdown)
    }
    else{
      setButtonInactive(true)
    }
  }
  const decrement = () => {
    // setCountdown(countdown - 60000)
    setUserDefinedProp(userDefinedProp - 1)
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
          <div>{userDefinedProp}</div>
        </div>
      </main>
    </div>
  )
}

export default Main;
