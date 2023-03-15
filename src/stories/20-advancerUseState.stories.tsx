import React, { useState} from 'react';
import {ComponentStory} from '@storybook/react';

export default {
    title: 'Advanced useState',
}

const getInitialCount = () => {
    console.log("getInitialCount")
    //...
  return 1
}

export const Example1: ComponentStory<any> = () => {
    console.log("render component")
    const [count,setCount]=useState(getInitialCount)
    const plus1 = (state:number) => {
       return state+1
    }
    return <div>
        <button onClick={()=>setCount(plus1)}>+</button> <div> {count}</div>
    </div>};
Example1.args={

}


