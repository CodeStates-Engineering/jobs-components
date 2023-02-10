import React from 'react';

import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { InputContainer } from '..';
import { Input } from '../../Input';

import type { InputContainerProps } from '..';

export default {
  title: 'atoms/InputContainer',
  component: InputContainer,
} as ComponentMeta<typeof InputContainer>;

const ButtonStory: ComponentStory<typeof InputContainer> = (args) => (
  <InputContainer {...args} />
);

export const Default = ButtonStory.bind({});
const defaultArgs: InputContainerProps = {
  children: (
    <div style={{ visibility: 'hidden' }}>
      <Input />
    </div>
  ),
  validationMessage: '필수 입력값 입니다.',
};
Default.args = defaultArgs;
