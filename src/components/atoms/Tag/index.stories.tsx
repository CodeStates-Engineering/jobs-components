import type { StoryObj, Meta } from '@storybook/react';

import { Tag } from '.';

const meta: Meta<typeof Tag> = {
  title: 'atoms/Tag',
  component: Tag,
  args: {
    children: 'Tag',
    variant: 'filled',
    color: 'purple-500',
    size: 'medium',
  },

  argTypes: {
    variant: {
      options: ['filled', 'outlined', 'text'],
      control: {
        type: 'radio',
      },
    },
    color: {
      options: ['purple-500'],
      control: {
        type: 'radio',
      },
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: {
        type: 'radio',
      },
    },
  }
};

export default meta;

type Story = StoryObj<typeof Tag>;

export const Default: Story = {};

