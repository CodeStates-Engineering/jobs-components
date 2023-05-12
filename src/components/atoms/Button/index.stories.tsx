import { omit } from 'lodash-es';

import React from 'react';
import { AlertOctagon } from 'react-feather';

import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '.';

import type { ButtonProps } from '.';

const meta: Meta<typeof Button> = {
  title: 'atoms/Button',
  component: Button,
  argTypes: {
    disabled: {
      control: {
        type: 'boolean',
        default: false,
      },
    },
    children: {
      control: {
        type: 'text',
      },
    },
    enterClick: {
      control: {
        type: 'boolean',
        default: false,
      },
      description: '엔터키로 버튼을 클릭할 수 있다.',
    },
    delay: {
      control: {
        type: 'number',
      },
      description: '버튼은 클릭 전 딜레이 시간을 가질 수 있다.',
    },
  },
  args: {
    theme: 'white/purple600',
    children: 'Button',
    disabled: false,
    focusOutline: true,
    padding: true,
    size: 'large',
    fontSize: 'normal',
    fontWeight: 700,
    iconDirection: 'left',
    shape: 'default',
  },
  decorators: [
    (Story) => (
      <article
        style={{
          display: 'flex',
          gap: '10px',
          flexWrap: 'wrap',
          alignItems: 'flex-end',
        }}
      >
        <Story />
      </article>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {};

export const Theme: Story = {
  render: (args) => (
    <>
      {(
        [
          'white/purple600',
          'white/bluish-gray800',
          'purple600/0',
          'bluish-gray700/0/bluish-gray200',
          'bluish-gray700/0',
          'bluish-gray500/0',
          'bluish-gray400/bluish-gray10/bluish-gray200',
          'bluish-gray400/0/bluish-gray200',
          'bluish-gray300/0',
        ] satisfies ButtonProps['theme'][]
      ).map((theme) => (
        <Button {...{ ...args, theme }}>{theme}</Button>
      ))}
    </>
  ),
};

export const Shape: Story = {
  render: (args) => (
    <>
      {(['default', 'round'] satisfies ButtonProps['shape'][]).map((shape) => (
        <Button {...{ ...args, shape }} key={shape}>
          {shape}
        </Button>
      ))}
    </>
  ),
};

export const Size: Story = {
  render: (args) => (
    <>
      {(['small', 'medium', 'large'] satisfies ButtonProps['size'][]).map(
        (size) => (
          <Button {...{ ...args, size }} key={size}>
            {size}
          </Button>
        ),
      )}
    </>
  ),
};

export const Icon: Story = {
  args: {
    icon: <AlertOctagon />,
  },
  render: (args) => (
    <div
      style={{
        display: 'flex',
        gap: '10px',
        flexDirection: 'column',
      }}
    >
      {(['default', 'round'] satisfies ButtonProps['shape'][]).map((shape) => (
        <div
          style={{
            display: 'flex',
            gap: '10px',
          }}
          key={shape}
        >
          <Button {...{ ...args, shape }} />
          <Button {...omit({ ...args, shape }, 'children')} />
          <Button {...{ ...args, shape }} iconDirection="right" />
        </div>
      ))}
    </div>
  ),
};

export const Delay: Story = {
  args: {
    delay: 10000,
  },
  render: (args) => (
    <>
      {(
        [
          'white/purple600',
          'bluish-gray700/0/bluish-gray200',
          'bluish-gray400/bluish-gray10/bluish-gray200',
          'purple600/0',
          'bluish-gray700/0',
        ] satisfies ButtonProps['theme'][]
      ).map((theme) => (
        <Button {...{ ...args, theme }} />
      ))}
    </>
  ),
};
