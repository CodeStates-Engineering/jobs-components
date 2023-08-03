import { useState as createState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Options } from '.';

import type { ValidOptionValue } from '.';

const meta: Meta<typeof Options> = {
  title: 'atoms/Options',
  component: Options,

  argTypes: {
    opened: {
      control: 'boolean',
    },
    float: {
      options: ['top', 'bottom'],
      control: 'radio',
      defaultValue: 'bottom',
    },
    options: {
      control: 'object',
    },
    multiple: {
      control: 'boolean',
      description: '옵션을 여러개 선택할 수 있다.',
      defaultValue: false,
    },
  },

  args: {
    opened: true,
    float: 'top',
    multiple: false,
    options: Array.from({ length: 100 }, (_, index) => ({
      label: `Test label ${index}${
        index % 7 === 0
          ? ' is long text: aurora sunrise eunoia vanilla iris adorable kitten laptop lucid sunrise shine banana adorable moonlight melody haze sunrise vanilla girlish blossom'
          : ''
      }`,
      value: `${index}번 옵션이 선택`,
    })),
    textEllipsis: false,
  },

  decorators: [
    (Story) => (
      <article
        style={{
          position: 'relative',
          height: 650,
          padding: '10px 0',
        }}
      >
        <div
          style={{
            margin: '500px auto',
            position: 'relative',
            width: '400px',
          }}
        >
          <Story />
        </div>
      </article>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Options>;

export const Default: Story = {
  render: (props) => {
    const [value, setValue] = createState<
      ValidOptionValue | ValidOptionValue[]
    >();
    return <Options {...props} value={value} onChange={setValue} />;
  },
};

export const Multiple: Story = {
  args: {
    multiple: true,
  },
  render: (props) => {
    const [value, setValue] = createState<
      ValidOptionValue | ValidOptionValue[]
    >();
    return <Options {...props} value={value} onChange={setValue} />;
  },
};

export const TextEllipsis: Story = {
  args: {
    textEllipsis: true,
  },
  render: (props) => {
    const [value, setValue] = createState<
      ValidOptionValue | ValidOptionValue[]
    >();
    return <Options {...props} value={value} onChange={setValue} />;
  },
};
