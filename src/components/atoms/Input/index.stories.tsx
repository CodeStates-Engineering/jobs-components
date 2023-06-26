import type { Meta, StoryObj } from '@storybook/react';

import { STORY_META } from '@constants';

import { Input } from '.';

import type { InputProps, InputWrapProps } from './index';

type StroyProps = InputProps &
  Pick<InputWrapProps, 'borderRadius' | 'size' | 'validationMessage' | 'width'>;

const GROUPS = {
  INPUT: {
    table: {
      category: 'Input',
    },
  },
  WRAP: {
    table: {
      category: 'Input.Wrap',
    },
  },
};

const meta: Meta<StroyProps> = {
  title: 'atoms/Input',
  component: Input,
  args: {
    placeholder: 'placeholder',
    type: 'text',
    value: '',
    size: 'large',
    width: '250px',
  },

  argTypes: {
    ref: STORY_META.HIDDEN,
    onChange: STORY_META.HIDDEN,

    type: GROUPS.INPUT,
    disabled: GROUPS.INPUT,

    size: {
      ...STORY_META.SIZE,
      ...GROUPS.WRAP,
    },
    borderRadius: {
      ...GROUPS.WRAP,
      options: ['4', '8'],
      control: 'radio',
    },

    width: {
      ...GROUPS.WRAP,
      control: 'text',
    },

    fontSize: GROUPS.INPUT,
    fontWeight: GROUPS.INPUT,
    value: {
      ...GROUPS.INPUT,
      control: {
        type: 'text',
      },
    },
    placeholder: {
      ...GROUPS.INPUT,
    },

    validationMessage: {
      ...GROUPS.WRAP,
      control: {
        type: 'text',
      },
    },
  },
};

export default meta;

type Story = StoryObj<StroyProps>;

export const Default: Story = {
  render: ({ size, borderRadius, width, validationMessage, ...args }) => (
    <Input.Wrap
      size={size}
      borderRadius={borderRadius}
      width={width}
      validationMessage={validationMessage}
    >
      <Input {...args} />
    </Input.Wrap>
  ),
};
