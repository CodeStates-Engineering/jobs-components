import React from 'react';

import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Checkbox } from '..';

import type { CheckboxProps } from '..';

export default {
  title: 'molecules/Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const ButtonStory: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

export const Default = ButtonStory.bind({});
const checkboxProps: CheckboxProps = {
  label: 'Checkbox',
  description: '[필수] Checkbox description',
  essential: true,
};
Default.args = checkboxProps;
