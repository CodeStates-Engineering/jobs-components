import React from 'react';

import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Selectbox } from '..';
import { OptionHint } from '../../../atoms/Options';

export default {
  title: 'molecules-test/Selectbox',
  component: Selectbox,
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
} as ComponentMeta<typeof Selectbox>;

const data: OptionHint[] = [];
for (let i = 0; i < 20; i += 1) {
  data.push({ label: `${i}`, value: `${i}` });
}

export const Default: ComponentStory<typeof Selectbox> = (args) => (
  <Selectbox {...args} options={data} />
);
