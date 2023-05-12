import type { Meta, StoryObj } from '@storybook/react';

import { Input } from '.';

const meta: Meta<typeof Input> = {
  title: 'atoms/Input',
  component: Input,
  args: {
    placeholder: 'placeholder',
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {};
