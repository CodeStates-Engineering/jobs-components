import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { FocusLayer } from '.';

const meta: Meta<typeof FocusLayer> = {
  title: 'atoms/FocusLayer',
  component: FocusLayer,
  args: {
    blur: true,
    children: 'In',
    focused: true,
  },
  decorators: [
    (Story) => (
      <article
        style={{
          transform: 'scale(1)',
          height: '200px',
          width: '100%',
          fontSize: '30px',
        }}
      >
        Out
        <Story />
      </article>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof FocusLayer>;
export const Default: Story = {};
