import React, {KeyboardEvent, useState} from 'react';
import Style from "./Select.module.css";

export type optionType = {
    title: string
    index: number
}
type SelectProps = {
    defaultSelectIndex?: any
    options: optionType[]
    onClickOption: (option: number) => void
}
const Select = (props: SelectProps) => {
    console.log("Select render")
    //debugger
    let selectValue = props.options.find(el => el.index === props.defaultSelectIndex)
    const [collapsed, setCollapsed] = useState(false)
    const [indexItemHover, setIndexItemHover] = useState(props.defaultSelectIndex ? props.options[props.defaultSelectIndex].index : null)
    const onClickSelectValue = () => {
        setCollapsed(!collapsed)
    }
    const onClickOptionHandler = (option: optionType) => {
        props.onClickOption(option.index)
        setIndexItemHover(option.index)
        setCollapsed(!collapsed)
    }
    const onSelectHandler = (index: number) => {
        setIndexItemHover(index)
    }
    const onKeyUpHandler = (e: KeyboardEvent<HTMLDivElement>) => {
        if(e.key === "ArrowUp"|| e.key === "ArrowDown"){
        if (indexItemHover || indexItemHover === 0) {
            if (e.key === "ArrowUp") {
                setIndexItemHover(indexItemHover !== 0 ? indexItemHover - 1 : props.options.length - 1)
                props.onClickOption(indexItemHover !== 0 ? indexItemHover - 1 : props.options.length - 1)
            } else if (e.key === "ArrowDown") {
                setIndexItemHover(indexItemHover !== props.options.length - 1 ? indexItemHover + 1 : 0)
                props.onClickOption(indexItemHover !== props.options.length - 1 ? indexItemHover + 1 : 0)
            }

        } else if(indexItemHover===null){
            setIndexItemHover(0)
            props.onClickOption(0)
        }}
        if (e.key === "Escape" || e.key === "Enter") {
            setCollapsed(false)
        }

    }
    return (
        <div className={Style.select} tabIndex={0} onKeyUp={e => onKeyUpHandler(e)} onBlur={() => setCollapsed(false)}>
            <span className={Style.main} onClick={onClickSelectValue}> {selectValue && selectValue.title}</span>
            <div className={Style.items}>{collapsed && props.options.map(option => {
                return <div onClick={() => onClickOptionHandler(option)}
                            className={Style.item + " " + (indexItemHover == option.index ? Style.itemHover : "")}
                            onMouseEnter={() => onSelectHandler(option.index)} key={option.index}>
                    {option.title}</div>
            })}</div>
        </div>
    );
};

export default Select;
