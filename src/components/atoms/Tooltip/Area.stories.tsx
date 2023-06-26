import type { Meta, StoryObj } from '@storybook/react';

import { Tooltip } from '.';

const meta: Meta<typeof Tooltip.Area> = {
  title: 'atoms/Tooltip/Area',
  component: Tooltip.Area,
  args: {
    children: 'Tooltip area',
  },
  decorators: [
    (Story) => (
      <Tooltip>
        <Story />
        <Tooltip.Content>Tooltip content</Tooltip.Content>
      </Tooltip>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Tooltip.Area>;

export const Default: Story = {};
