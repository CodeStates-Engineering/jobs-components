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
  <>
    <div>
      <InputContainer {...args} validationMessage="필수 입력값 입니다." />
    </div>
    <div>
      <InputContainer {...args} />
    </div>
  </>
);

export const Default = ButtonStory.bind({});
const defaultArgs: InputContainerProps = {
  children: (
    <InputContainer.Intreraction>
      <div style={{ visibility: 'hidden' }}>
        <Input />
      </div>
    </InputContainer.Intreraction>
  ),
};

Default.args = defaultArgs;
