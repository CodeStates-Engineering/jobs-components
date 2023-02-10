import React from 'react';

import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Textbox } from '..';

import type { TextboxProps } from '..';

export default {
  title: 'molecules/Textbox',
  component: Textbox,
} as ComponentMeta<typeof Textbox>;

const ButtonStory: ComponentStory<typeof Textbox> = (args) => (
  <Textbox {...args} />
);

export const Default = ButtonStory.bind({});
const defaultArgs: TextboxProps<'text'> = {
  children: '%',
};
Default.args = defaultArgs;
