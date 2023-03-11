import React from 'react';

import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { InputContainer } from '..';
import { Input } from '../../Input';

import type { InputContainerProps } from '..';

export default {
  title: 'atoms/InputContainer',
  component: InputContainer,
} as ComponentMeta<typeof InputContainer>;

const ButtonStory: ComponentStory<typeof InputContainer> = (originalArgs) => {
  const args = {
    ...originalArgs,
    children: (
      <div style={{ visibility: 'hidden' }}>
        <Input />
      </div>
    ),
  };
  return (
    <>
      <div>
        <InputContainer {...args} validationMessage="필수 입력값 입니다." />
        next line
      </div>
      <div>
        <InputContainer {...args} />
        next line
      </div>
    </>
  );
};

export const Default = ButtonStory.bind({});
const defaultArgs: InputContainerProps = {
  width: '300px',
};

Default.args = defaultArgs;
