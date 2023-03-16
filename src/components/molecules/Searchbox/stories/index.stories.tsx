import React from 'react';

import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Searchbox } from '..';

import type { SearchboxProps } from '..';

export default {
  title: 'molecules/Searchbox',
  component: Searchbox,
} as ComponentMeta<typeof Searchbox>;

const SearchboxStory: ComponentStory<typeof Searchbox> = (args) => (
  <div
    style={{
      width: '300px',
    }}
  >
    <Searchbox {...args} />
  </div>
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
const searchboxProps: SearchboxProps = {
  placeholder: 'Searchbox',
  options: dummyOptions,
  selfFilter: true,
  label: 'Searchbox',
  validation: (value?: string) => {
    if (!value) {
      return 'Value is required';
    }
    return undefined;
  },
};
Default.args = searchboxProps;
