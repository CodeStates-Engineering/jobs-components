import React from 'react';

import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Skeleton } from '..';

import type { SkeletonProps } from '..';

export default {
  title: 'atoms/Skeleton',
  component: Skeleton,
} as ComponentMeta<typeof Skeleton>;

const SkeletonStory: ComponentStory<typeof Skeleton> = (args) => (
  <Skeleton {...args} />
);

export const Default = SkeletonStory.bind({});
const defaultArgs: SkeletonProps = {
  fontWeight: 700,
  fontSize: 'normal',
};
Default.args = defaultArgs;
