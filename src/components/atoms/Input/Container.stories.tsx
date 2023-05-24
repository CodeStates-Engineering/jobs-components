import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Input } from '.';

const meta: Meta<typeof Input.Container> = {
  title: 'atoms/Input/Container',
  component: Input.Container,
  args: {
    children: <Input.Wrap />,
  },
};

export default meta;

type Story = StoryObj<typeof Input.Container>;

export const Default: Story = {};

export const ValidationMessage: Story = {
  args: {
    validationMessage: 'validation message',
  },
};
