
import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Rating, RatingValueType} from "./components/Rating/Rating";

import Accordion, {itemType} from "./components/Accordion/Accordion";
import UncontrolledOnOff from "./components/UncontrolledOnOff/UncontrolledOnOff";
import OnOff from "./components/OnOff/OnOff";

function App() {
    console.log("App rendering")
    let [value, setValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    const [position, setPosition]=useState<boolean>(false);
    const items:itemType[]=[{title:"1",value:"1"},{title:"2",value: "2"},{title:"3",value:"3"}]
    const onClickOnItem = (value:any) => {
        console.log("some item clicked")
    }
    return (
        <div className="App">
            <div>
                <Rating value={value} onClick={(value) => {
                    setValue(value)
                }}/>
            </div>
            <div>

            </div>
            <UncontrolledOnOff/>
            <OnOff onClick={(position)=>{setPosition(position)}} position={position}/>
        </div>
    );
}

export default App;
