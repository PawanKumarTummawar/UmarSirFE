import React from 'react'
import { useState } from 'react';

const Counter = () => {
    const [myCounter, setMyCounter] = useState();
    console.log(myCounter);

    function handleIncrement(){
        setMyCounter(myCounter ? myCounter : 1);
        console.log(myCounter);
    }

    function handleDecrement(){
        if(myCounter >= 1){
            setMyCounter(myCounter ? myCounter - 1 : 1);
        console.log(myCounter);
        }
    };


  return (
    <div className='parent-container'>
       <button onClick={handleIncrement}>Increment</button> 
       <button onClick={handleDecrement}>Decrement</button> 
        <span>{myCounter ? myCounter:0}</span>
    </div>
  )
}

export default Counter