import React from 'react'
import ReactDOM from 'react-dom'

const Button = ({name, handleClick, addClass, disabled, isRunning}) => {
  return (
    <>
    {isRunning ?
    <button onClick={handleClick} type="button" className={addClass}>{name}</button>
    :
    <button onClick={handleClick} type="button" disabled className={addClass}>{name}</button>}
    </>
  )
}

export default Button;
