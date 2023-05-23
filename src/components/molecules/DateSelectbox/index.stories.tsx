import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { DateSelectbox } from '.';

const meta: Meta<typeof DateSelectbox> = {
  title: 'molecules/DateSelectbox',
  component: DateSelectbox,
  decorators: [
    (Story) => (
      <div
        style={{
          width: '500px',
          height: '500px',
        }}
      >
        <Story />
      </div>
    ),
  ],
  args: {
    placeholder: 'DateSelectbox',
    label: 'DateSelectbox',
    borderRadius: '4',
  },
};

export default meta;

type Story = StoryObj<typeof DateSelectbox>;

export const Default: Story = {
  render: (args) => <DateSelectbox {...args} />,
};
