import React from 'react';

import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Category } from '..';

import type { CategoryProps } from '..';

export default {
  title: 'molecules/Category',
  component: Category,
} as ComponentMeta<typeof Category>;

const CategoryStory: ComponentStory<typeof Category> = (args) => (
  <Category {...args} />
);

export const Default = CategoryStory.bind({});
const defaultArgs: CategoryProps = {
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
      to: '/blockchain',
    },
    {
      label: '프로덕트매니저',
      to: '/product-manager',
    },
    {
      label: '데브옵스',
      to: '/devops',
    },
  ],
};
Default.args = defaultArgs;
