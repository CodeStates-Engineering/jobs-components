/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Pagination } from '.';

const meta: Meta<typeof Pagination> = {
  title: 'molecules/Pagination',
  component: Pagination,
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
    displayedCount: 9,
    size: 'medium',
  },
};

export default meta;

type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  render: (args) => {
    const [currentPage, setCurrentPage] = useState(args.currentPage);

    return (
      <>
        <Pagination
          {...args}
          currentPage={currentPage}
          onChange={setCurrentPage}
        />
        <Pagination
          {...args}
          displayedCount={args.displayedCount}
          currentPage={undefined}
          loading
        />
      </>
    );
  },
};
