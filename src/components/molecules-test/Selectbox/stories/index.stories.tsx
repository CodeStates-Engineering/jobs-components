import React from 'react';

import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Selectbox } from '..';
import { OptionHint } from '../../../atoms/Options';

export default {
  title: 'molecules-test/Selectbox',
  component: Selectbox,
} as ComponentMeta<typeof Selectbox>;

const SelectboxStory: ComponentStory<typeof Selectbox> = (args) => (
  <Selectbox {...args} />
);

const dummyOptions: OptionHint[] = [
  { label: '1', value: '1' },
  { label: '2', value: '2' },
  { label: '3', value: '3' },
];
for (let i = 0; i < 20; i += 1) {
  dummyOptions.push({ label: `${i}`, value: `${i}` });
}

export const Default = SelectboxStory.bind({});

Default.args = {
  options: dummyOptions,
};
