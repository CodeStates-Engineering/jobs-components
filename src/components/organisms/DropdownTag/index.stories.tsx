import { Trash2 } from 'react-feather';

import type { Meta, StoryObj } from '@storybook/react';

import { DropdownTag } from '.';

const meta: Meta<typeof DropdownTag> = {
  title: 'organisms/DropdownTag',
  component: DropdownTag,
  args: {
    tagContent: 'Check Tag',
    icon: <Trash2 size={10} />,
    children: (
      <div
        style={{
          width: 200,
          height: 200,
          padding: 20,
        }}
      >
        dropdown contents
      </div>
    ),
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

export const Default: Story = {
  render: (args) => <DropdownTag {...args} />,
};
