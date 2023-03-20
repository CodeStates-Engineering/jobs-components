import React from 'react';

import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Hr } from '..';

import type { HrProps } from '..';

export default {
  title: 'atoms/Hr',
  component: Hr,
} as ComponentMeta<typeof Hr>;

const HrStory: ComponentStory<typeof Hr> = (args) => (
  <div
    style={{
      height: '50vh',
      width: '100%',
      padding: '20px',
    }}
  >
    <Hr {...args} />
  </div>
);

export const Default = HrStory.bind({});
const defaultArgs: HrProps = {};
Default.args = defaultArgs;
