import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { OptionsButton } from '.';

const meta: Meta<typeof OptionsButton> = {
  title: 'organisms/OptionsButton',
  component: OptionsButton,
  args: {
    buttonStyle: {
      fontSize: 'small',
      size: 'small',
      theme: 'bluish-gray700/0',
    },
    buttonContent: '공개 설정하기',
    optionStyle: { fontSize: 'small2x', fontWeight: 500, width: '100px' },
    options: [
      {
        label: '공개',
        value: '공개',
      },
      {
        label: '비공개',
        value: '비공개',
      },
    ],
    textEllipsis: true,
    float: 'top',
  },
  decorators: [
    (Story) => (
      <div
        style={{
          height: '600px',
          width: '100%',

          padding: '300px',
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof OptionsButton>;

export const Default: Story = {
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState<string | undefined>('');
    return (
      <OptionsButton
        {...args}
        value={value}
        onChange={(value) => {
          setValue(value);
        }}
      />
    );
  },
};
