import React from 'react'
import ReactDOM from 'react-dom'

const Button = ({name, handleClick, addClass, disabled}) => {
  return (
    <button onClick={handleClick} type="button" disabled={disabled} className={addClass}>{name}</button>
  )
}

export default Button;
