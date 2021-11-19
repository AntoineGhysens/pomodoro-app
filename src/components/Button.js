import React from 'react'
import ReactDOM from 'react-dom'

const Button = ({name, handleClick, addClass}) => {
  return (
    <button onClick={handleClick} type="button" className={addClass}>{name}</button>
  )
}

export default Button;
