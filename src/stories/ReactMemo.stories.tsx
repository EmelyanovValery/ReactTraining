import React, {ChangeEvent, useRef, useState} from 'react';
import {ComponentStory, ComponentMeta, Story} from '@storybook/react';
import Select, {optionType} from "../components/Select/Select";

export default {
    title: 'React.Memo demo',
    //component: Button,
}
const NewMessageCounter = (props:{count:number}) => {
    console.log("count")
 return <div>{props.count}</div>
}
const UserWithOutMemo = (props:{name:string[]}) => {
    console.log("users")
  return <div>{props.name.map((el,index)=><div key={index}>{el}</div>)}</div>
}

const Users=React.memo(UserWithOutMemo)

export const Example1: ComponentStory<any> = (args) => {
    const [count,setCount]=useState(0)
    const [users,setUsers]=useState(["Valya","Bob","Sasha"])
    const addUser = () => {
      setUsers([...users,"+"+new Date().getTime()])
    }
    return <>
        <button onClick={()=>setCount(count+1)}>+</button>
        <button onClick={addUser}>add users</button>
        <NewMessageCounter count={count}/>
        <Users name={users}/>

    </>};
Example1.args={

}
const Template: ComponentStory<typeof Select> = (args) => {

    const [defaultValue,setDefaultValue]=useState(1)
    const onClickOption = (optionIndex:number) => {
        setDefaultValue(optionIndex)
    }
    const items:optionType[]=[{title:"Valera", index:0},{title:"Petr", index:1},{title:"Misha", index:2}]
    return <Select   defaultSelectIndex={defaultValue} {...args} onClickOption={onClickOption} options={items} />
};

export const WithDefaultIndex = Template.bind({});

WithDefaultIndex.args = {
};

const Secondary: ComponentStory<typeof Select> = (args) => {

    const [defaultValue,setDefaultValue]=useState<number|null>(null)
    const onClickOption = (optionIndex:number) => {
        setDefaultValue(optionIndex)
    }
    const items:optionType[]=[{title:"Valera", index:0},{title:"Petr", index:1},{title:"Misha", index:2}]
    return <Select   defaultSelectIndex={defaultValue} {...args} onClickOption={onClickOption} options={items} />
};
export const WithoutDefaultIndex = Secondary.bind({});
WithoutDefaultIndex.args = {

};

