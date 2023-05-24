import type { Meta, StoryObj } from '@storybook/react';

import { Checkbox } from '.';

const meta: Meta<typeof Checkbox> = {
  title: 'molecules/Checkbox',
  component: Checkbox,
  args: {
    label: 'Checkbox',
    description: '[필수] Checkbox description',
    essential: true,
    labelStyle: {
      fontSize: 'small',
      fontWeight: 500,
      direction: 'column',
    },
    inputStyle: {
      size: 'medium',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {};
