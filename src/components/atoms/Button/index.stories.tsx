import { omit } from 'lodash-es';

import { AlertOctagon } from 'react-feather';

import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '.';

import type { ButtonProps } from '.';

const colorOptions = {
  contained: [
    'purple550',
    'purple600',
    'bluishGray600',
    'bluishGray700',
    'bluishGray800',
    'peach600',
  ],
  ghost: [
    'purple600',
    'bluishGray300',
    'bluishGray400',
    'bluishGray500',
    'bluishGray600',
    'bluishGray700',
    'bluishGray800',
  ],
  outlined: [
    'bluishGray400',
    'bluishGray500',
    'bluishGray600',
    'bluishGray700',
    'bluishGray800',
  ],
};

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
    delay: {
      control: {
        type: 'number',
      },
      description: '버튼은 클릭 전 딜레이 시간을 가질 수 있다.',
    },
    variant: {
      control: {
        type: 'radio',
        options: Object.keys(colorOptions),
      },
    },
    color: {
      control: {
        type: 'select',
        options: (args: ButtonProps) =>
          colorOptions[args.variant ?? 'contained'] || [],
      },
    },
  },
  args: {
    variant: 'contained',
    color: 'purple600',
    children: 'Button',
    disabled: false,
    padding: true,
    size: 'large',
    fontSize: 'normal',
    fontWeight: 700,
    iconDirection: 'left',
    shape: '8',
  },
  decorators: [
    (Story, context) => {
      const { variant } = context.args;
      if (context.argTypes.color) {
        context.argTypes.color.options = colorOptions[variant ?? 'contained'];
      }

      return (
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
      );
    },
  ],
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {};

export const VariantAndColors: Story = {
  render: (args) => (
    <div
      style={{
        display: 'flex',
        gap: '80px',
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: '16px',
          flexDirection: 'column',
        }}
      >
        <h3>Contained</h3>
        {(colorOptions.contained as ButtonProps['color'][]).map(
          (color, key) => (
            <Button {...{ ...args, color, key, variant: 'contained' }}>
              {color}
            </Button>
          ),
        )}
      </div>
      <div
        style={{
          display: 'flex',
          gap: '16px',
          flexDirection: 'column',
        }}
      >
        <h3>Ghost</h3>
        {(colorOptions.ghost as ButtonProps['color'][]).map((color, key) => (
          <Button {...{ ...args, color, key, variant: 'ghost' }}>
            {color}
          </Button>
        ))}
      </div>
      <div
        style={{
          display: 'flex',
          gap: '16px',
          flexDirection: 'column',
        }}
      >
        <h3>Outlined</h3>
        {(colorOptions.outlined as ButtonProps['color'][]).map((color, key) => (
          <Button {...{ ...args, color, key, variant: 'outlined' }}>
            {color}
          </Button>
        ))}
      </div>
    </div>
  ),
};

export const Shape: Story = {
  render: (args) => (
    <>
      {(['pill', '8', '4'] satisfies ButtonProps['shape'][]).map((shape) => (
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
        (size, key) => (
          <Button {...{ ...args, size, key }}>{size}</Button>
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
      {(['pill', '8', '4'] satisfies ButtonProps['shape'][]).map((shape) => (
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
      {(['purple600'] satisfies ButtonProps['color'][]).map((color, key) => (
        <Button {...{ ...args, color, key }} />
      ))}
    </>
  ),
};
