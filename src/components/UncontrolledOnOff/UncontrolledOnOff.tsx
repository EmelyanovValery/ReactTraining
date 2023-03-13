import React, {useState} from 'react';
import s from "./OnOff.module.css"

type OnOffPropsType = {

}

const UncontrolledOnOff = (props: OnOffPropsType) => {
    const [position, setPosition]=useState(false);
    return (
        <div>
            <div onClick={()=>{setPosition(true)}} className={`${s.Indicator} ${position && s.on}`}>
                ON</div>
            <div onClick={()=>{setPosition(false)}} className={`${s.Indicator} ${!position && s.off}`}>OFF</div>
            <div className={`${s.bulb} ${!position && s.off} `}></div>
        </div>
    );
};

export default UncontrolledOnOff;