import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Dropdown } from '.';

const meta: Meta = {
  title: 'atoms/Dropdown',
  component: Dropdown,
  args: {
    opened: true,
    children: (
      <div
        style={{
          minWidth: '300px',
          height: '100px',
          padding: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <p>Dropdown</p>
      </div>
    ),
  },
  decorators: [
    (Story) => (
      <article
        style={{
          height: '150px',
        }}
      >
        <Story />
      </article>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {};
