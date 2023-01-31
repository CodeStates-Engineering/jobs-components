import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { Button } from '..';
import type { ButtonProps } from '..';

export default {
  title: 'atoms/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const ButtonStory: ComponentStory<typeof Button> = (args) => (
  <Button {...args} />
);

export const Default = ButtonStory.bind({});
const defaultArgs: ButtonProps = { children: 'Button' };
Default.args = defaultArgs;
