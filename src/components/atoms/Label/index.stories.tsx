import type { StoryObj, Meta } from '@storybook/react';

import { Label } from '.';

const meta: Meta<typeof Label> = {
  title: 'atoms/Label',
  component: Label,
  args: {
    children: 'Label',
    htmlFor: '',
  },
};

export default meta;

type Story = StoryObj<typeof Label>;

export const Default: Story = {};
