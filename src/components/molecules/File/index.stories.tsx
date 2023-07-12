import type { Meta, StoryObj } from '@storybook/react';

import { File } from '.';

const meta: Meta<typeof File> = {
  title: 'molecules/File',
  component: File,
  decorators: [
    (Story) => (
      <div
        style={{
          height: '50vh',
          width: '300px',
          padding: '20px',
        }}
      >
        <Story />
      </div>
    ),
  ],
  args: {
    children: 'Upload',

    label: 'File',
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
      size: 'large',
    },
    description: '테스트',
  },
};

export default meta;

type Story = StoryObj<typeof File>;

export const Default: Story = {};
