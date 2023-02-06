import React, { useState } from 'react';

import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '..';

import type { ButtonProps } from '..';

export default {
  title: 'atoms/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const ButtonStory: ComponentStory<typeof Button> = (args) => {
  const [value, setValue] = useState(true);

  return (
    <Button {...args} onClick={() => setValue(false)}>
      {String(value)}
    </Button>
  );
};

export const Default = ButtonStory.bind({});
const defaultArgs: ButtonProps = {};
Default.args = defaultArgs;
