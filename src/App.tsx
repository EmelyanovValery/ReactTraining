
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import Accordion from "./components/Accordion/Accordion";
import UncontrolledOnOff from "./components/UncontrolledOnOff/UncontrolledOnOff";
import OnOff from "./components/OnOff/OnOff";

function App() {
    console.log("App rendering")
    let [value, setValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    const [position, setPosition]=useState<boolean>(false);
    return (
        <div className="App">
            <div>
                <Rating value={value} onClick={(value) => {
                    setValue(value)
                }}/>
            </div>
            <div>
                <Accordion titleValue={"YO!"}
                           collapsed={accordionCollapsed}
                           onClick={() => setAccordionCollapsed(!accordionCollapsed)}/>
            </div>
            <UncontrolledOnOff/>
            <OnOff onClick={(position)=>{setPosition(position)}} position={position}/>
        </div>
    );
>>>>>>> bb8a33c (Initialize project using Create React App)
}

export default App;
