import React from 'react';
import { AlertOctagon } from 'react-feather';

import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Textbox } from '..';

import type { TextboxProps } from '..';

export default {
  title: 'molecules/Textbox',
  component: Textbox,
} as ComponentMeta<typeof Textbox>;

const TextboxStory: ComponentStory<typeof Textbox> = ({ ...args }) => (
  <div
    style={{
      width: '300px',
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
    }}
  >
    <Textbox
      {...args}
      label="Readonly"
      disabled="read-only"
      value={100}
      unit="명"
    />
    <Textbox
      {...args}
      label="Large number"
      type="large-number"
      value={undefined}
    />
    <Textbox
      {...args}
      label="Phone number"
      type="phone-number"
      value={undefined}
    />
    <Textbox
      {...args}
      label="Business number"
      type="business-number"
      value={undefined}
    />
    <Textbox {...args} type="number" label="Number" value={undefined} />
    <Textbox {...args} unit={<AlertOctagon />} />
  </div>
);

export const Default = TextboxStory.bind({});

Default.args = {
  placeholder: 'Textbox',
  label: 'Textbox',
  validation: (value?: string) => {
    if (!value) {
      return 'Value is required';
    }
  },
} satisfies TextboxProps;
