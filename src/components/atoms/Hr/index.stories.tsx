import type { Meta, StoryObj } from '@storybook/react';

import { Hr } from '.';

const meta: Meta<typeof Hr> = {
  title: 'atoms/Hr',
  component: Hr,
  args: {
    color: 'bluish-gray-100',
    weight: 'thin',
  },
  argTypes: {
    weight: {
      options: ['thin', 'medium', 'thick'],
      control: {
        type: 'radio',
      },
    },
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

type Story = StoryObj<typeof Hr>;

export const Default: Story = {};
