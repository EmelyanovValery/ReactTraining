import {Clock} from "./Clock";
import {ComponentMeta, ComponentStory, Story} from "@storybook/react";
import React from "react";

export default {
    title: 'Clock',
    component: Clock
} as ComponentMeta<typeof Clock>;

const Template: ComponentStory<any> = (args) => {
    return <Clock {...args}/>
}

export const Digital = Template.bind({})
Digital.args={
    mode:"digital"
}
export const Analog = Template.bind({})
Analog.args={
    mode:"analog"
}