import React, {useReducer} from 'react';
import {reducer} from "./Reducer";

export type UncontrolledAccordionPropsType = {
    titleValue: string

}


function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {
    const [collapsed, dispatchCollapsed]=useReducer(reducer, {collapsed:true})
    return (<div>
        <AccordionTitle title={props.titleValue} onClick={()=>{dispatchCollapsed({type:"TOGGLE-COLLAPSED"})}}/>
        {!collapsed.collapsed && <AccordionBody/>}
    </div>)

}

type AccordionTitlePropsType = {
        onClick:()=>void
    title: string

}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return (<h3 onClick={()=>{props.onClick()}}>{props.title}</h3>)
}

function AccordionBody() {
    console.log("AccordionBody rendering")
    return (<ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>)
}

export default UncontrolledAccordion;