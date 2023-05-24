import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Input } from '.';

import type { InputWrapProps } from '.';

const meta: Meta<typeof Input.Wrap> = {
  title: 'atoms/Input/Wrap',
  component: Input.Wrap,
  args: {
    size: 'large',
  },
  argTypes: {
    size: {
      options: ['none', 'small', 'medium', 'large'],
      control: {
        type: 'select',
        default: 'large',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Input.Wrap>;

export const Default: Story = {};

export const Size: Story = {
  render: (args) => (
    <>
      {(
        ['none', 'small', 'medium', 'large'] satisfies InputWrapProps['size'][]
      ).map((size) => (
        <Input.Wrap {...args} size={size} key={size} />
      ))}
    </>
  ),
};
