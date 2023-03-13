import React, {useRef, useState} from 'react';
import {ComponentStory, ComponentMeta, Story} from '@storybook/react';

import { Button } from './Button';


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

