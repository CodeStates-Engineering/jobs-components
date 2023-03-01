import React from 'react';

import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Label } from '..';
import { InputContainer } from '../../InputContainer';

import type { LabelProps } from '..';

export default {
  title: 'atoms/Label',
  component: Label,
} as ComponentMeta<typeof Label>;

const LabelStory: ComponentStory<typeof Label> = (args) => (
  <div>
    <Label {...args} />
    <InputContainer />
  </div>
);

export const Default = LabelStory.bind({});
Default.args = {
  children: 'label text',
} satisfies LabelProps;
