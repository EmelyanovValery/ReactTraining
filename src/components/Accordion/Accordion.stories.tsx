import React, {useState} from 'react';
import {ComponentStory, ComponentMeta, Story} from '@storybook/react';

import Accordion, {AccordionPropsType} from "./Accordion";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'components/Accordion',
  component: Accordion,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<AccordionPropsType> = (args) => <Accordion {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  titleValue: "string",
  collapsed: true,
  onClick:()=>{}
};

export const ModeChanging: Story<AccordionPropsType> = (args) => {
  let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
  const onClickHandler =() => setAccordionCollapsed(!accordionCollapsed)
  return <Accordion {...args} onClick={onClickHandler} collapsed={accordionCollapsed}/>
}

ModeChanging.args={
  titleValue: "ModeChanging",
}