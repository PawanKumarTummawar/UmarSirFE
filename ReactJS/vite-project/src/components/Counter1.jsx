import React from 'react'
import { useState } from 'react';
import Button from './Button';
import { MdExposurePlus1 } from "react-icons/md";
import { MdExposurePlus2 } from "react-icons/md";
import { TbExposureMinus2 } from "react-icons/tb";
import { TbExposureMinus1 } from "react-icons/tb";


const Counter1 = () => {
    const [myCounter, setMyCounter] = useState(0);
    // console.log(myCounter);

    function handleIncrementBy1(){
        // setMyCounter(myCounter ? myCounter + 1 : 1);
        setMyCounter(myCounter+1);
        // console.log(myCounter);
    }

    function handleDecrementBy1(){
        if(myCounter >= 1){
            // setMyCounter(myCounter ? myCounter - 1 : 1);
            setMyCounter(myCounter-1);
            // console.log(myCounter);
        }
    };

    function handleIncrementBy2(){
        // setMyCounter(myCounter ? myCounter + 2 : 1);
        setMyCounter(myCounter+2);
        // console.log(myCounter);
    }

    function handleDecrementBy2(){
        if(myCounter >= 1){
            // setMyCounter(myCounter ? myCounter - 2 : 1);
            setMyCounter(myCounter-2);
            // console.log(myCounter);
        }
    };


  return (
    <div className='parent-container'>
        <Button mycolor = "red" myfontsize = '32px' onClickHandler = {handleIncrementBy1} myicon={<MdExposurePlus1/>}/>
        <Button mycolor = "blue" myfontsize = '26px' onClickHandler = {handleIncrementBy2} myicon={<MdExposurePlus2 />}/>
        <Button mycolor = "green" myfontsize = '20px' onClickHandler = {handleDecrementBy1} myicon={<TbExposureMinus1 />}/>
        <Button mycolor = "yellow" myfontsize = '16px' onClickHandler = {handleDecrementBy2} myicon={<TbExposureMinus2 />}/>
        <br/>
        <span>{myCounter ? myCounter:0}</span>
    </div>
  )
}

export default Counter1