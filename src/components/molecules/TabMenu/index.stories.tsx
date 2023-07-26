import type { Meta, StoryObj } from '@storybook/react';

import { TabMenu } from '.';

const items = [
  {
    label: '전체',
    to: '/',
  },
  {
    label: '소프트웨어 개발',
    to: '/software-development',
    disabled: true,
  },
  {
    label: '데이터',
    to: '/data',
  },
  {
    label: '마케팅',
    to: '/marketing',
  },
  {
    label: '블록체인',
    to: '/?type=blockchain',
  },
  {
    label: '프로덕트매니저',
    to: '/product-manager?category=product-manager&category2=product-designer2',
  },
  {
    label: '데브옵스',
    to: '/devops',
  },
];

const meta: Meta<typeof TabMenu> = {
  title: 'molecules/TabMenu',
  component: TabMenu,
  args: {
    items,
    itemSize: 'medium',
    bottomLineWeight: 'medium',
    selectedLineWeight: 'medium',
    fontWeight: 500,
    fontSize: 'medium',
  },
};

export default meta;

type Story = StoryObj<typeof TabMenu>;

export const Default: Story = {};

export const Round: Story = {
  render: (args) => (
    <>
      <TabMenu
        {...args}
        selectedLineWeight="none"
        bottomLineWeight="none"
        itemSize="small"
        fontSize="small2x"
        theme={{
          default: 'bluish-gray300/0',
          selected: 'white/purple600',
        }}
        itemShape="8"
      />
    </>
  ),
};
