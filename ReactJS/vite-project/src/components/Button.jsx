import React from 'react'

const Button = (props) => {
    
  return (
    <button style={{backgroundColor: props.mycolor, fontSize: props.myfontsize}} onClick={props.onClickHandler}>{props.mytext}{props.myicon}</button>
  );
}

export default Button;