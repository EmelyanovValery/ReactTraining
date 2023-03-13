import React, {ChangeEvent, useRef, useState} from 'react';
import {ComponentStory, ComponentMeta, Story} from '@storybook/react';

import { Button } from './Button';
import {action} from "@storybook/addon-actions";
import {string} from "prop-types";


export default {
  title: 'Input',
  //component: Button,
}

const InputComponents = () => {
  return <input/>
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof InputComponents> = (args) => <InputComponents />;

export const UncontrolledInput = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
UncontrolledInput.args = {
};

export const TrackInput: ComponentStory<any> = (args) => {
  const [value,setValue]=useState("")
  return <>
    <input onChange={event => setValue(event.currentTarget.value)}/> {value}</>};
TrackInput.args={}

export const GetValueInput: ComponentStory<any> = (args) => {
  const [value,setValue]=useState("")
  const inputRef=useRef<HTMLInputElement>(null)
  const save = () => {
    const valueInput=inputRef.current as HTMLInputElement
    setValue(valueInput.value)
  }
  return <>
    <input ref={inputRef}/> <button onClick={save}>save</button> actual value: {value}</>};
GetValueInput.args={}

export const FixedInput: ComponentStory<any> = (args) => <input value={"Yooooo"}/>;
FixedInput.args={}

export const ControlledInput:ComponentStory<any> = ()=>{
  const [paramsValue, setParamsValue]=useState("")
  const onChangeInputHandler = (e:ChangeEvent<HTMLInputElement>) => {
    debugger;
    setParamsValue(e.currentTarget.value)
  }
  return <input value={paramsValue} onChange={onChangeInputHandler}/>
}

export const ControlledCheckbox:ComponentStory<any> = ()=>{
  const [paramsValue, setParamsValue]=useState(true)
  const onChangeInputHandler = (e:ChangeEvent<HTMLInputElement>) => {
    debugger;
    setParamsValue(e.currentTarget.checked)
  }
  return <input type={"checkbox"} checked={paramsValue} onChange={action("changed")}/>
}

export const ControlledSelect:ComponentStory<any> = ()=>{
  const [paramsValue, setParamsValue]=useState<string|undefined>("2")
  const onChangeSelectHandler = (e:ChangeEvent<HTMLSelectElement>) => {
    debugger;
    setParamsValue(e.currentTarget.value)
  }
  return <select value={paramsValue} onChange={onChangeSelectHandler}>
    <option>None</option>
    <option value={"1"}>1</option>
    <option value={"2"}>2</option>
    <option value={"3"}>3</option>
  </select>
}