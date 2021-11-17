import React from 'react'
import ReactDOM from 'react-dom'
import Main from './components/Main.js';
import './style/app.scss'

const App = () => {
  return (
    <div>
      <Main title="Pomodoro"/>
    </div>
  );
}

// export default App;
ReactDOM.render(<App/>, document.querySelector('#root'))
