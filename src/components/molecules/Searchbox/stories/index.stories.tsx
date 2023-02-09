import React from 'react';

import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Searchbox } from '..';

import type { SearchboxProps } from '..';

export default {
  title: 'molecules/Searchbox',
  component: Searchbox,
} as ComponentMeta<typeof Searchbox>;

const SearchboxStory: ComponentStory<typeof Searchbox> = (args) => (
  <Searchbox {...args} />
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

export const Default = SearchboxStory.bind({});
const defaultArgs: SearchboxProps = {
  options: dummyOptions,
};

Default.args = defaultArgs;
