/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { BackOfficePagination } from '.';

const meta: Meta<typeof BackOfficePagination> = {
  title: 'organisms/BackOfficePagination',
  component: BackOfficePagination,
  decorators: [
    (Story) => (
      <div
        style={{
          height: '50vh',
          width: '100%',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }}
      >
        <Story />
      </div>
    ),
  ],
  args: {
    currentPage: 1,
    itemsPerPage: 10,
    totalItems: 503,
  },
};

export default meta;

type Story = StoryObj<typeof BackOfficePagination>;

export const Default: Story = {
  render: (args) => {
    const [currentPage, setCurrentPage] = useState(args.currentPage);

    return (
      <>
        <BackOfficePagination
          {...args}
          currentPage={currentPage}
          onChange={setCurrentPage}
        />
        <BackOfficePagination {...args} currentPage={undefined} loading />
      </>
    );
  },
};
