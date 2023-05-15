import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { File } from '.';

const meta: Meta<typeof File> = {
  title: 'molecules/File',
  component: File,
  decorators: [
    (Story) => (
      <div
        style={{
          height: '50vh',
          width: '300px',
          padding: '20px',
        }}
      >
        <Story />
      </div>
    ),
  ],
  args: {
    children: 'Upload',
    validation: () => 'Test',
  },
};

export default meta;

type Story = StoryObj<typeof File>;

export const Default: Story = {};
