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

export const Example1 = Template.bind({})
Example1.args={

}