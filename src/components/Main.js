import React from 'react'
import ReactDOM from 'react-dom'
import Timer from './Timer.js';
import Buttons from './Buttons.js';

const Main = ({title}) => {
  return (
    <div className="pomodoro">
      <header className="pomodoro__header">
        <h1 className="pomodoro__header__heading">{title}</h1>
      </header>
      <main className="pomodoro__main">
        <Timer/>
        <Buttons name="bouton"/>
      </main>
    </div>
  )
}

export default Main;
