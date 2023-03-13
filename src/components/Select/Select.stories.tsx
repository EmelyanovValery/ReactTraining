import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import Select, {optionType} from "./Select";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Select',
    component: Select,
} as ComponentMeta<typeof Select>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
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
