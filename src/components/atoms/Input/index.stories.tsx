import type { Meta, StoryObj } from '@storybook/react';

import { STORY_META } from '@constants';

import { Input } from '.';

import type { InputProps, InputWrapProps } from './index';

type StroyProps = InputProps &
  Pick<
    InputWrapProps,
    'borderRadius' | 'size' | 'validationMessage' | 'width' | 'description'
  >;

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
      options: ['small', 'medium', 'large'],
      control: 'radio',
      description: '컴포넌트의 크기를 설정합니다.',
      ...GROUPS.WRAP,
    },
    borderRadius: {
      ...GROUPS.WRAP,
      options: ['4', '8'],
      control: 'radio',
    },

    description: {
      ...GROUPS.WRAP,
      control: 'text',
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
    readOnly: {
      ...GROUPS.WRAP,
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<StroyProps>;

export const Default: Story = {
  render: ({
    size,
    borderRadius,
    width,
    validationMessage,
    description,
    ...args
  }) => (
    <Input.Wrap
      size={size}
      borderRadius={borderRadius}
      width={width}
      validationMessage={validationMessage}
      description={description}
    >
      <Input {...args} />
    </Input.Wrap>
  ),
};
