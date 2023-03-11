import React from 'react';

import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Input } from '..';

import type { InputProps } from '..';

export default {
  title: 'atoms/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const ButtonStory: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = ButtonStory.bind({});
Default.args = {
  placeholder: 'Input',
} satisfies InputProps<'text'>;
