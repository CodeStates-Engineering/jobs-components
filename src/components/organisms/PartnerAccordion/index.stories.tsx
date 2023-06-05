import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { PartnerAccordion } from '.';
import { DUMMY } from '../../../utils';

const meta: Meta<typeof PartnerAccordion> = {
  title: 'organisms/PartnerAccordion',
  component: PartnerAccordion,
  decorators: [
    (Story) => (
      <div
        style={{
          height: '50vh',
          width: '300px',
          padding: '20px',
        }}
      >
        <Story />
      </div>
    ),
  ],
  args: {
    title: 'Lorem ipsum dolor sit amet',
    children: DUMMY.COMMON.TEXT_LONG,
  },
};

export default meta;

type Story = StoryObj<typeof PartnerAccordion>;

export const Default: Story = {};
