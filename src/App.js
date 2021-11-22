import React from 'react'
import ReactDOM from 'react-dom'
import Main from './components/Main.js';
import './style/app.scss'

const App = () => {
  return (
    <>
      <Main title="Pomodoro"/>
    </>
  );
}

// export default App;
ReactDOM.render(<App/>, document.querySelector('#root'))
