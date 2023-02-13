import React from 'react';
import { AlertOctagon } from 'react-feather';

import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Textbox } from '..';

import type { TextboxProps } from '..';

export default {
  title: 'molecules/Textbox',
  component: Textbox,
} as ComponentMeta<typeof Textbox>;

const ButtonStory: ComponentStory<typeof Textbox> = ({ children, ...args }) => (
  <>
    <Textbox {...args}>{children}</Textbox>
    <Textbox {...args}>
      <AlertOctagon />
    </Textbox>
    <Textbox {...args} />
  </>
);

export const Default = ButtonStory.bind({});
const defaultArgs: TextboxProps<'text'> = {
  children: '원',
};
Default.args = defaultArgs;
