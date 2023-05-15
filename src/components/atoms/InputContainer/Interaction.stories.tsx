import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { InputContainer } from '.';

import type { InputContainerInteractionProps } from '.';

const meta: Meta<typeof InputContainer.Interaction> = {
  title: 'atoms/InputContainer/Interaction',
  component: InputContainer.Interaction,
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

type Story = StoryObj<typeof InputContainer.Interaction>;

export const Default: Story = {};

export const Size: Story = {
  render: (args) => (
    <>
      {(
        [
          'none',
          'small',
          'medium',
          'large',
        ] satisfies InputContainerInteractionProps['size'][]
      ).map((size) => (
        <InputContainer.Interaction {...args} size={size} key={size} />
      ))}
    </>
  ),
};
