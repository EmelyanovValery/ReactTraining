import React from 'react';
import "./Clock.css"
type AnalogClockViewType={
    count:Date
}
const AnalogClockView:React.FC<AnalogClockViewType> = ({count}) => {
    const hour = count.getHours() * 30  // Move 30degree on first hour, 60 degree on second and so on.
    const minute = count.getMinutes() * 6 //same as above.
    const second = count.getSeconds() * 6 //same as above
    return (
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
    );
};

export default AnalogClockView;