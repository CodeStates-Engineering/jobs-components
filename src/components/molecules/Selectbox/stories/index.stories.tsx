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

const dummyOptions: string[] = [];

for (let i = 0; i < 100; i += 1) {
  dummyOptions.push(
    `Test label ${i}${
      i % 7 === 0
        ? ' is long text: aurora sunrise eunoia vanilla iris adorable kitten laptop lucid sunrise shine banana adorable moonlight melody haze sunrise vanilla girlish blossom'
        : ''
    }`,
  );
}

export const Default = SelectboxStory.bind({});

Default.args = {
  options: dummyOptions,
  selfFilter: true,
};
