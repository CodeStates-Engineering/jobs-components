import type { Meta, StoryObj } from '@storybook/react';

import { Tooltip } from '.';

const meta: Meta<typeof Tooltip.Content> = {
  title: 'atoms/Tooltip/Content',
  component: Tooltip.Content,
  args: {
    children: 'Tooltip content',
  },
  decorators: [
    (Story) => (
      <Tooltip>
        <Tooltip.Area>Tooltip area</Tooltip.Area>
        <Story />
      </Tooltip>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Tooltip.Content>;

export const Default: Story = {};
