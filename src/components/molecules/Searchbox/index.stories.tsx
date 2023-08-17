import type { Meta, StoryObj } from '@storybook/react';

import { Searchbox } from '.';

const dummyOptions: string[] = [];

for (let i = 0; i < 100; i += 1) {
  dummyOptions.push(
    `Test label ${i}${
      i % 7 === 0
        ? ' is long text: aurora sunrise eunoia vanilla iris adorable kitten laptop lucid sunrise shine banana adorable moonlight melody haze sunrise vanilla girlish blossom'
        : ''
    }`,
  );
}

const meta: Meta<typeof Searchbox> = {
  title: 'molecules/Searchbox',
  component: Searchbox,
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
    placeholder: 'Searchbox',
    options: dummyOptions,
    selfFilter: true,
    label: 'Searchbox',
    labelStyle: {
      fontSize: 'small',
      fontWeight: 500,
      direction: 'column',
    },
    inputStyle: {
      width: '100%',
      fontSize: 'normal',
      fontWeight: 500,
      borderRadius: '8',
      size: 'large',
    },
    description: '테스트',
    readOnly: false,
    textEllipsis: false,
  },
};

export default meta;

type Story = StoryObj<typeof Searchbox>;

export const Default: Story = {
  args: {
    requireMessage: '필수 입력입니다.',
  },
};
