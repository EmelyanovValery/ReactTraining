
import React, {useEffect, useState} from "react";
import "./Clock.css"
import AnalogClockView from "./AnalogClockView";
import DigitalClockView from "./DigitalClockView";
export type ClockType = {
    mode?:"digital" | "analog"
}
export const Clock: React.FC<ClockType> = (props) => {
    console.log("render component")
    const [count, setCount] = useState<Date>(new Date)
    useEffect(() => {

        const idInterval = setInterval(() => {
            console.log("TICK")
            setCount(new Date)
        }, 1000)

        return ()=>{
            clearInterval(idInterval)
        }


    }, [])

    return <div>
        { props.mode !=="analog" ?
            <AnalogClockView count={count}/>:
        <DigitalClockView count={count}/>
        }
    </div>
};