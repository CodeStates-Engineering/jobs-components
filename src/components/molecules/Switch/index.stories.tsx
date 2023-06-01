import type { Meta, StoryObj } from '@storybook/react';

import { Switch } from '.';

const meta: Meta<typeof Switch> = {
  title: 'molecules/Switch',
  component: Switch,
  args: {
    label: 'Switch',
    description: '[필수] Switch description',
    essential: true,
    labelStyle: {
      fontSize: 'small',
      fontWeight: 500,
      direction: 'column',
    },
    inputStyle: {
      size: 'small',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const Default: Story = {};
