import React from 'react';

import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { TabMenu } from '..';

import type { TabMenuProps } from '..';

export default {
  title: 'molecules/TabMenu',
  component: TabMenu,
} as ComponentMeta<typeof TabMenu>;

const TabMenuStory: ComponentStory<typeof TabMenu> = (args) => (
  <TabMenu {...args} />
);

export const Default = TabMenuStory.bind({});

const defaultArgs: TabMenuProps = {
  items: [
    {
      label: '전체',
      to: '/',
    },
    {
      label: '소프트웨어 개발',
      to: '/software-development',
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
      to: '/product-manager?category=product-manager&category=product-designer2',
    },
    {
      label: '데브옵스',
      to: '/devops',
    },
  ],
  color: 'bluish-gray-300',
  selectedColor: 'bluish-gray-800',
  bottomLineWeight: 'medium',
  selectedLineWeight: 'medium',
  width: '100%',
  height: '80px',
  fontWeight: 700,
  fontSize: 'large',
};

Default.args = defaultArgs;
