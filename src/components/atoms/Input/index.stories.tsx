import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Input } from '.';

import type { InputType } from './index';

const meta: Meta<typeof Input> = {
  title: 'atoms/Input',
  component: Input,
  args: {
    placeholder: 'placeholder',
    value: '',
  },
  argTypes: {
    value: {
      control: {
        type: 'text',
      },
    },
  },
  decorators: [
    (Story) => (
      <article
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}
      >
        <Story />
      </article>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {};

export const Type: Story = {
  render: (args) => (
    <>
      {(
        [
          {
            type: 'text',
            value: 'text',
          },
          {
            type: 'number',
            value: 1234567890,
          },
          {
            type: 'large-number',
            value: 1234567890,
          },
          {
            type: 'phone-number',
            value: '01012345678',
          },
          {
            type: 'business-number',
            value: '1234567890',
          },
        ] satisfies {
          type: InputType;
          value: string | number;
        }[]
      ).map(({ type, value }) => (
        <label key={type}>
          {type}
          <Input {...args} type={type} value={value} />
        </label>
      ))}
    </>
  ),
};
