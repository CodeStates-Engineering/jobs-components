import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Searchbox } from '..';

type ValidValue = string | number | null;

interface ObjectOption<T extends ValidValue> {
  label: string;
  value: T;
}

const data: ObjectOption<string>[] = [];
for (let i = 0; i < 20; i += 1) {
  data.push({ label: `${i}`, value: `${i}` });
}

export default {
  title: 'molecules-test/Searchbox',
  component: Searchbox,
  argTypes: {
    disabled: {
      options: [true, false],
      control: { type: 'boolean' },
    },
    focused: {
      options: [true, false],
      control: { type: 'boolean' },
    },
    size: {
      options: ['small', 'middle', 'large'],
      control: { type: 'inline-radio' },
    },
    width: {
      control: { type: 'text' },
    },
    parameters: {
      actions: {
        argTypesRegex: '^on.*',
      },
    },
  },
} as ComponentMeta<typeof Searchbox>;

export const Default: ComponentStory<typeof Searchbox> = (args) => (
  <Searchbox {...args} options={data} />
);

export const Size: ComponentStory<typeof Searchbox> = () => (
  <>
    <div>
      <span>Small</span>
      <Searchbox size="small" options={data} />
    </div>
    <div>
      <span>Medium</span>
      <Searchbox size="medium" options={data} />
    </div>
    <div>
      <span>Large</span>
      <Searchbox size="large" options={data} />
    </div>
  </>
);

export const Disabled: ComponentStory<typeof Searchbox> = () => (
  <Searchbox disabled="true" options={data} />
);

export const Float: ComponentStory<typeof Searchbox> = () => (
  <>
    <div>
      <span>Top</span>
      <Searchbox options={data} float="top" />
    </div>
    <div>
      <span>Bottom</span>
      <Searchbox options={data} float="bottom" />
    </div>
  </>
);
