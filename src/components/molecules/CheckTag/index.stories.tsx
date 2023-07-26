import type { Meta, StoryObj } from '@storybook/react';

import { CheckTag } from '.';

const meta: Meta<typeof CheckTag> = {
  title: 'molecules/CheckTag',
  component: CheckTag,
  args: {
    children: 'Check Tag',
  },
  decorators: [
    (Story) => (
      <article
        style={{
          width: '100%',
        }}
      >
        <Story />
      </article>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof CheckTag>;

export const Default: Story = {};
