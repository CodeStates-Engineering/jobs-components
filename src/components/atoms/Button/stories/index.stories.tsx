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
    onClick: () => {
      setValue(!value);
    },
  };

  const ghostTypeProps = {
    ...buttonArgs,
    themeType: 'ghost' as const,
  };

  const containedTypeProps = {
    ...buttonArgs,
    theme: 'bluish-gray-800' as const,
    themeType: 'contained' as const,
  };
  return (
    <>
      <div style={{ display: 'flex', gap: 10, flexDirection: 'column' }}>
        <Button {...ghostTypeProps} />
        <Button {...ghostTypeProps} delay={5000} />
        <Button {...ghostTypeProps} disabled />
        <Button {...ghostTypeProps} icon={<AlertOctagon />} />
        <Button {...ghostTypeProps} icon={<AlertOctagon />}>
          {null}
        </Button>
      </div>
      <div style={{ display: 'flex', gap: 10, flexDirection: 'column' }}>
        <Button {...containedTypeProps} />
        <Button {...containedTypeProps} delay={5000} />
        <Button {...containedTypeProps} disabled />
        <Button {...containedTypeProps} icon={<AlertOctagon />} />
        <Button {...containedTypeProps} icon={<AlertOctagon />}>
          {null}
        </Button>
      </div>
      <div
        style={{
          display: 'flex',
          gap: 10,
          flexDirection: 'column',
          marginLeft: 50,
        }}
      >
        <Button {...buttonArgs} />
        <Button {...buttonArgs} delay={5000} />
        <Button {...buttonArgs} disabled />
        <Button {...buttonArgs} icon={<AlertOctagon />} />
        <Button
          {...buttonArgs}
          icon={
            <AlertOctagon
              width={args.padding ? '24px' : '40px'}
              height={args.padding ? '24px' : '40px'}
            />
          }
        >
          {null}
        </Button>
      </div>
    </>
  );
};

export const Default = ButtonStory.bind({});
const defaultArgs: ButtonProps = {
  themeType: 'contained',
};
Default.args = defaultArgs;
