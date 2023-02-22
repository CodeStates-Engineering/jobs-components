import React from 'react';

import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Selectbox } from '..';

export default {
  title: 'molecules/Selectbox',
  component: Selectbox,
} as ComponentMeta<typeof Selectbox>;

const SelectboxStory: ComponentStory<typeof Selectbox> = (args) => (
  <Selectbox {...args} />
);

const dummyOptions: { label: string; value: string }[] = [];

for (let i = 0; i < 100; i += 1) {
  dummyOptions.push({
    label: `Test label ${i}${
      i % 7 === 0
        ? ' is long text: aurora sunrise eunoia vanilla iris adorable kitten laptop lucid sunrise shine banana adorable moonlight melody haze sunrise vanilla girlish blossom'
        : ''
    }`,
    value: `${i}번 옵션이 선택`,
  });
}

export const Default = SelectboxStory.bind({});

Default.args = {
  options: dummyOptions,
};
