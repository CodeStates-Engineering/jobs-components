import type { Meta, StoryObj } from '@storybook/react';

import { Textarea } from '.';

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
    labelStyle: {
      fontSize: 'small',
      fontWeight: 500,
      direction: 'column',
    },
    inputStyle: {
      width: '300px',
      fontSize: 'normal',
      fontWeight: 500,
      borderRadius: '8',
      height: '300px',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Textarea>;

export const Default: Story = {};
