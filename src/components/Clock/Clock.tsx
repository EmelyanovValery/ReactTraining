
import React, {useEffect, useState} from "react";
import "./Clock.css"
export type ClockType = {}
export const Clock: React.FC<ClockType> = () => {
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
    const hour = count.getHours() * 30  // Move 30degree on first hour, 60 degree on second and so on.
    const minute = count.getMinutes() * 6 //same as above.
    const second = count.getSeconds() * 6 //same as above
    return <div>
        {count.toLocaleString('ru', {
            hour: "numeric",
            minute: "numeric",
            second: "numeric"
        })}
        <div className="clock">
            <div className="hour-hand"
                 style={{ transform: "rotate(" + hour + "deg)" }}
            ></div>
            <div className="minute-hand"
                 style={{ transform: "rotate(" + minute + "deg)" }}
            ></div>
            <div className="second-hand"
                 style={{ transform: "rotate(" + second + "deg)"}}
            ></div>
        </div>
    </div>
};