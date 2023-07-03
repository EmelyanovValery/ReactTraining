import React, {useEffect, useState} from 'react';
import {ComponentStory} from '@storybook/react';
import {clearInterval} from "timers";

export default {
    title: 'Use Effect',
}

export const SetTimeOutExample: ComponentStory<any> = () => {
    console.log("SetTimeOutExample")
    const [count,setCount]=useState(1)
    const [fakeCount,setFakeCount]=useState(1)
    setTimeout(()=>{
        console.log("setTimeout")
        document.title="New title:"+count
    },1000)
    return  <div>Изменяем title страницы черрез 1с. на {count}
    <button onClick={()=>{setCount(count+1)}}>C+</button>
    <button onClick={()=>{setFakeCount(fakeCount+1)}}>F+</button>
    </div>

};

export const SetTimeOutExampleWithUseEffect: ComponentStory<any> = () => {
    console.log("SetTimeOutExample")
    const [count,setCount]=useState(1)
    const [fakeCount,setFakeCount]=useState(1)
    useEffect(()=>{
        setTimeout(()=>{
            console.log("setTimeout")
            document.title="New title:"+count
        },1000)
    },[count])

    return  <div>Изменяем title страницы черрез 1с. на {count}
        <button onClick={()=>{setCount(count+1)}}>+</button>
        <button onClick={()=>{setFakeCount(fakeCount+1)}}>F+</button>
    </div>

};
export const SetIntervalExample: ComponentStory<any> = () => {
    console.log("SetTimeOutExample")
    const [count,setCount]=useState(1)
    const [fakeCount,setFakeCount]=useState(1)
    setInterval(()=>{
        console.log("setTimeout")
        document.title="New title:"+count
    },1000)
    return  <div>Изменяем title страницы черрез 1с. на {count}
        <button onClick={()=>{setCount(count+1)}}>C+</button>
        <button onClick={()=>{setFakeCount(fakeCount+1)}}>F+</button>
    </div>

};
export const SetIntervalExampleWithUseEffect: ComponentStory<any> = () => {
    console.log("SetTimeOutExample")
    const [count,setCount]=useState(1)
    const [fakeCount,setFakeCount]=useState(1)
    useEffect(()=>{
        const intervalId = setInterval(()=>{
            console.log("setTimeout")
            console.log(count)
        },1000)
        return ()=>{
            clearInterval(intervalId)
        }
    },[])
    return  <div>Изменяем title страницы черрез 1с. на {count}
        <button onClick={()=>{setCount(count+1)}}>C+</button>
        <button onClick={()=>{setFakeCount(fakeCount+1)}}>F+</button>
    </div>

};