import type { Meta, StoryObj } from '@storybook/react';

import { Tag } from '.';

const meta: Meta<typeof Tag> = {
  title: 'molecules/Tag',
  component: Tag,
  decorators: [
    (Story) => (
      <article
        style={{
          width: '100%',
          display: 'flex',
          gap: '10px',
          flexWrap: 'wrap',
          alignItems: 'center',
        }}
      >
        <Story />
      </article>
    ),
  ],
  argTypes: {
    width: {
      description: '컴포넌트의 가로 크기를 설정합니다.',
      control: {
        type: 'text',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  render: (args) => (
    <Tag {...args} onClose={undefined}>
      Tag
    </Tag>
  ),
};

export const Size: Story = {
  render: (args) => (
    <>
      <Tag {...args} size="14">
        size-14
      </Tag>
      <Tag {...args} size="18">
        size-18
      </Tag>
      <Tag {...args} size="26">
        size-26
      </Tag>
    </>
  ),
};

export const Color: Story = {
  render: (args) => (
    <>
      <Tag {...args} color="green50">
        Green
      </Tag>
      <Tag {...args} color="purple50">
        Purple
      </Tag>
      <Tag {...args} color="blue50">
        Blue
      </Tag>
      <Tag {...args} color="peach50">
        Peach
      </Tag>
      <Tag {...args} color="orange50">
        Orange
      </Tag>
      <Tag {...args} color="bluish-gray50">
        Gray
      </Tag>
    </>
  ),
};

export const Closable: Story = {
  args: {
    onClose: () => {
      // eslint-disable-next-line no-alert
      window.alert('close');
    },
  },
  render: (args) => (
    <>
      <Tag {...args} size="14">
        Tag
      </Tag>
      <Tag {...args}>Tag</Tag>
      <Tag {...args} size="26">
        Tag
      </Tag>
    </>
  ),
};
