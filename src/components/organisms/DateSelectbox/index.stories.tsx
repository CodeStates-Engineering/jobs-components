import type { Meta, StoryObj } from '@storybook/react';

import { DateSelectbox } from '.';

const meta: Meta<typeof DateSelectbox> = {
  title: 'organisms/DateSelectbox',
  component: DateSelectbox,
  decorators: [
    (Story) => (
      <div
        style={{
          width: '350px',
          height: '500px',
        }}
      >
        <Story />
      </div>
    ),
  ],

  args: {
    placeholder: 'DateSelectbox',
    label: 'DateSelectbox',
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
  },
};

export default meta;

type Story = StoryObj<typeof DateSelectbox>;

export const Default: Story = {
  render: (args) => <DateSelectbox {...args} />,
};
