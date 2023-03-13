import React from 'react';

export type itemType={
    title:string
    value:any
}

export type AccordionPropsType = {
    titleValue: string
    /**
     * An element showing that the accordion is not open
     */
    collapsed: boolean
    onClick:()=>void
    items:itemType[]
    onClickOnItem:(value:any)=>void
}

function Accordion(props: AccordionPropsType) {
    return (<div><AccordionTitle title={props.titleValue} onClick={props.onClick}/>
        {!props.collapsed && <AccordionBody items={props.items} onClickOnItem={props.onClickOnItem}/>}
    </div>)
    /*
    console.log("UncontrolledAccordion rendering")
    if (props.collapsed===true){
        return (<div>
            <AccordionTitle title={props.titleValue}/>
            <AccordionBody/>
        </div>)}
    else {
        return (<div>
            <AccordionTitle title={props.titleValue}/>
        </div>)
    }
*/


}

type AccordionTitlePropsType = {
    title: string
    onClick:()=>void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return (<h3 onClick={()=>{props.onClick()}}>{props.title}</h3>)
}

type AccordionBodyPropsType={
    items:itemType[]
    onClickOnItem:(value:any)=>void
}

function AccordionBody(props:AccordionBodyPropsType) {
    console.log("AccordionBody rendering")
    return (<ul>
        {props.items.map((item,index)=><li onClick={()=>props.onClickOnItem(item.value)} key={index}>{item.title}</li>)}
    </ul>)
}

export default Accordion;