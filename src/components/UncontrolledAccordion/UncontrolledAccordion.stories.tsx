import React, {useState} from 'react';
import {ComponentStory, ComponentMeta, Story} from '@storybook/react';

import UncontrolledAccordion, {UncontrolledAccordionPropsType} from "./UncontrolledAccordion";

export default {
  title: 'components/UncontrolledAccordion',
  component: UncontrolledAccordion,
}

const Template: Story<UncontrolledAccordionPropsType> = (args) => <UncontrolledAccordion {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  titleValue: "string",
};


