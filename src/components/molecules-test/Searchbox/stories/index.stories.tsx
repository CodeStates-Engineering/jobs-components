import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Searchbox } from '..';

type ValidValue = string | number | null;

interface ObjectOption<T extends ValidValue> {
  label: string;
  value: T;
}

export default {
  title: 'molecules-test/Searchbox',
  component: Searchbox,
} as ComponentMeta<typeof Searchbox>;

const SearchboxStory: ComponentStory<typeof Searchbox> = (args) => (
  <Searchbox {...args} />
);
export const Default = SearchboxStory.bind({});

const dummyOptions = [] as ObjectOption<string>[];
for (let i = 0; i < 20; i += 1) {
  dummyOptions.push({ label: `${i}`, value: `${i}` });
}

Default.args = {
  options: dummyOptions,
};
