import type { Meta, StoryObj } from '@storybook/react';

import { DropdownTag } from '.';

const meta: Meta<typeof DropdownTag> = {
  title: 'organisms/DropdownTag',
  component: DropdownTag,
  args: {
    children: 'Check Tag',
  },
  decorators: [
    (Story) => (
      <article
        style={{
          width: '100%',
          height: 300,
        }}
      >
        <Story />
      </article>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof DropdownTag>;

export const Default: Story = {};
