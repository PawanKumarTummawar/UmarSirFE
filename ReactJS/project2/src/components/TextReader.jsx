import React from 'react'
import './TextReader.css'
import { useState } from 'react'

const TextReader = () => {
  const [text, setText] = useState('');

  function handleOnChange(event) {
    setText(event.target.value)
    console.log(event.target.value);
  }

  // function convertToUppercase(){
  //   setText(text.toUpperCase())
  // }

  return (
    <div className='parent-container'>
        <div className='left-section'>
        <h3>User Input</h3>
        <textarea 
        name="user-input" 
        rows="20"
        value={text}
        onChange={handleOnChange}
        placeholder='Type Here'
        ></textarea>
        <p>Character Count: {text?text.length : 0}</p>
        <p>Word Count: {text.split(' ').length}</p>
        <p>Reading Time: {60/200*(text.split(' ').length)} Seconds</p>
        <div className='button-container'>
            <button onClick={() => setText(text.toUpperCase())}>Upper-Case</button>
            <button onClick={() => setText(text.toLowerCase())} >Lower-Case</button>
        </div>
        </div>

        <div className='right-section'>
             <h3>Print Preview</h3>
             <div className='print-preview'>
              {text?text: 'Nothing to Display'}
             </div>
        </div>
    </div>
  )
}

export default TextReader