import React from 'react'

const Button = (props) => {
  return (
        <button className= {props.cssclass} onClick={props.onClickHandler}>
          {props.children}
        </button>
  )
}

export default Button