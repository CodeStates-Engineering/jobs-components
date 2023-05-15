import type { Meta, StoryObj } from '@storybook/react';

import { Textarea } from '..';

const meta: Meta<typeof Textarea> = {
  title: 'molecules/Textarea',
  component: Textarea,
  args: {
    label: 'Textarea',
    placeholder: 'Textarea',
    validation: (value) => {
      if (!value) {
        return 'This field is required';
      }
    },
    disabled: false,
  },
};

export default meta;

type Story = StoryObj<typeof Textarea>;

export const Default: Story = {};
