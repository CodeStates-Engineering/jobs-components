import type { Meta, StoryObj } from '@storybook/react';

import { Link } from '.';

const meta: Meta<typeof Link> = {
  title: 'atoms/Link',
  component: Link,
  args: {
    children: 'Link',
    to: '#',
  },
  argTypes: {
    color: {
      control: {
        type: 'select',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Link>;

export const Default: Story = {};
