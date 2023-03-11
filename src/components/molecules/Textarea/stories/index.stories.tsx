import React from 'react';

import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Textarea } from '..';

import type { TextareaProps } from '..';

export default {
  title: 'molecules/Textarea',
  component: Textarea,
} as ComponentMeta<typeof Textarea>;

const ButtonStory: ComponentStory<typeof Textarea> = (args) => (
  <Textarea {...args} />
);

export const Default = ButtonStory.bind({});
const defaultArgs: TextareaProps = {
  label: 'Textarea',
  placeholder: 'Textarea',
  validation: (value) => {
    if (!value) {
      return 'This field is required';
    }
  },
  disabled: false,
};

Default.args = defaultArgs;
