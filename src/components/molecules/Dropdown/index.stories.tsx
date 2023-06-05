import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Dropdown } from '.';

const meta: Meta = {
  title: 'molecules/Dropdown',
  component: Dropdown,
  args: {
    opened: true,
    children: (
      <div
        style={{
          position: 'relative',
          minWidth: '300px',
          height: '100px',
          padding: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      />
    ),
  },
  decorators: [
    (Story) => (
      <article
        style={{ transform: 'scale(1)', height: '150px', width: '100%' }}
      >
        <Story />
      </article>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {};
