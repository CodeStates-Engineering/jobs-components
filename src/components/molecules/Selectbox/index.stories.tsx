import type { Meta, StoryObj } from '@storybook/react';

import { Selectbox } from '.';

const dummyOptions: { label: string; value: string }[] = [];

for (let i = 0; i < 100; i += 1) {
  dummyOptions.push({
    label: `Test label ${i}${
      i % 7 === 0
        ? ' is long text: aurora sunrise eunoia vanilla iris adorable kitten laptop lucid sunrise shine banana adorable moonlight melody haze sunrise vanilla girlish blossom'
        : ''
    }`,
    value: `${i}번 옵션이 선택`,
  });
}

const meta: Meta<typeof Selectbox> = {
  title: 'molecules/Selectbox',
  component: Selectbox,
  decorators: [
    (Story) => (
      <div
        style={{
          width: '300px',
          height: '500px',
        }}
      >
        <Story />
      </div>
    ),
  ],
  args: {
    placeholder: 'Selectbox',
    options: dummyOptions,
    label: 'Selectbox',
    validation: (value) => {
      if (!value) {
        return 'Value is required';
      }
      if (value === '0번 옵션이 선택') {
        return '0번 옵션은 선택할 수 없습니다.';
      }
    },
    labelStyle: {
      fontSize: 'small',
      fontWeight: 500,
      direction: 'column',
    },
    inputStyle: {
      width: '300px',
      fontSize: 'normal',
      fontWeight: 500,
      borderRadius: '8',
      size: 'large',
    },
    description: '테스트',
    readOnly: false,
    cancelable: true,
    textEllipsis: false,

  },
};

export default meta;

type Story = StoryObj<typeof Selectbox>;

export const Default: Story = {};
