import React from 'react';

import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Selectbox } from '..';

import type { SelectboxProps } from '..';

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
const selectboxProps: SelectboxProps = {
  placeholder: 'Selectbox',
  options: dummyOptions,
  label: 'Selectbox',
  validation: (option) => {
    if (!option) {
      return 'Value is required';
    }
    if (option.value === '0번 옵션이 선택') {
      return '0번 옵션은 선택할 수 없습니다.';
    }
  },
};

Default.args = selectboxProps;
