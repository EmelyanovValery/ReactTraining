import React, {useState} from 'react';
import s from "./OnOff.module.css"

type OnOffPropsType = {
    position: boolean
    onClick: (position: boolean) => void
}

const OnOff = (props: OnOffPropsType) => {

    const onClicked = () => {
        props.onClick(true)
    }
    const offClicked = () => {
        props.onClick(false)
    }
    return (
        <div>
            <div onClick={onClicked} className={`${s.Indicator} ${props.position && s.on}`}>
                ON
            </div>
            <div onClick={offClicked} className={`${s.Indicator} ${!props.position && s.off}`}>OFF
            </div>
            <div className={`${s.bulb} ${!props.position && s.off} `}></div>
        </div>
    );
};

export default OnOff;