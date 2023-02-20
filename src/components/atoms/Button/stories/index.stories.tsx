import React, { useState } from 'react';
import { AlertOctagon } from 'react-feather';

import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '..';

import type { ButtonProps } from '..';

export default {
  title: 'atoms/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const ButtonStory: ComponentStory<typeof Button> = (args) => {
  const [value, setValue] = useState(true);

  const buttonArgs = {
    ...args,
    children: value ? '취소' : '확인',
  };
  return (
    <>
      <Button {...buttonArgs} onClick={() => setValue(!value)} />
      <Button {...buttonArgs} onClick={() => setValue(!value)} delay={5000} />
      <Button {...buttonArgs} onClick={() => setValue(!value)} disabled />
      <Button
        {...buttonArgs}
        onClick={() => setValue(!value)}
        icon={AlertOctagon}
      />
    </>
  );
};

export const Default = ButtonStory.bind({});
const defaultArgs: ButtonProps = {
  width: '120px',
};
Default.args = defaultArgs;
