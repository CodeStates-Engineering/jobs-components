import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { InputContainer } from '.';

const meta: Meta<typeof InputContainer> = {
  title: 'atoms/InputContainer',
  component: InputContainer,
  args: {
    children: <InputContainer.Interaction />,
  },
};

export default meta;

type Story = StoryObj<typeof InputContainer>;

export const Default: Story = {};

export const ValidationMessage: Story = {
  args: {
    validationMessage: 'validation message',
  },
};
