import type { Meta, StoryObj } from '@storybook/react';

import { NotFound } from '.';

const meta: Meta<typeof NotFound> = {
  title: 'organisms/NotFound',
  component: NotFound,
  decorators: [
    (Story) => (
      <div
        style={{
          width: '100%',
          height: '100%',
        }}
      >
        <Story />
      </div>
    ),
  ],

  args: {
    description: `죄송합니다, \n요청하신 페이지를 찾을 수 없습니다.`,
    buttonTitle: '메인 페이지로 이동',
  },
};

export default meta;

type Story = StoryObj<typeof NotFound>;

export const Default: Story = {
  render: (args) => <NotFound {...args} />,
};
