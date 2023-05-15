import type { Meta } from '@storybook/react';

import { Checkbox } from '.';

const meta: Meta<typeof Checkbox> = {
  title: 'molecules/Checkbox',
  component: Checkbox,
  args: {
    label: 'Checkbox',
    description: '[필수] Checkbox description',
    essential: true,
  },
};

export default meta;
