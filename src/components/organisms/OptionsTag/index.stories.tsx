import { useState } from 'react';
import { Award } from 'react-feather';

import type { Meta, StoryObj } from '@storybook/react';

import { OptionsTag } from '.';

const meta: Meta<typeof OptionsTag> = {
  title: 'organisms/OptionsTag',
  component: OptionsTag,
  args: {
    icon: <Award size={10} />,
    options: [
      {
        label: 'Option 1',
        value: 'option-1',
      },
      {
        label: 'Option 2',
        value: 'option-2',
      },
      {
        label: 'Option 3 (default)',
        value: 'option-3',
        default: true,
      },
    ],
  },
  decorators: [
    (Story) => (
      <article
        style={{
          width: '100%',
          height: 300,
        }}
      >
        <Story />
      </article>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof OptionsTag>;

export const Default: Story = {
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState<string | undefined>('option3');
    return <OptionsTag {...args} value={value} onChange={setValue} />;
  },
};
