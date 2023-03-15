import React, {useEffect, useState} from 'react';
import {ComponentStory} from '@storybook/react';

export default {
    title: 'Use Effect',
}

export const Example1: ComponentStory<any> = () => {

    const [count,setCount]=useState(1)
    const [fake,setFake]=useState(1)
    useEffect(()=>{
        console.log("useEffect every render")
        document.title=count.toString()
    })
    useEffect(()=>{
        console.log("useEffect only first render")
        document.title=count.toString()
    },[])
    useEffect(()=>{
        console.log("useEffect first render and every counter change")
        document.title=count.toString()
    },[count])
    console.log("render component")
    return <div>
        <button onClick={()=>setCount(count+1)}>+</button> <div>Count {count}</div>
        <button onClick={()=>setFake(fake+1)}>+</button> <div>Fake {fake}</div>
    </div>};
export const Watch: ComponentStory<any> = () => {
    console.log("render component")
    const [count,setCount]=useState<Date>(new Date)
    useEffect(()=>{
      setInterval(()=>{setCount(new Date)},900)
    },[])
    return <div>
        {count.toLocaleString('ru',{hour: "numeric",
            minute: "numeric",
            second: "numeric"})}
    </div>};


