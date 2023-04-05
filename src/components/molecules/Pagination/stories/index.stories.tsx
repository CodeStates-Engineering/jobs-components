import React, { useState } from 'react';

import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Pagination } from '..';

import type { PaginationProps } from '..';

export default {
  title: 'molecules/Pagination',
  component: Pagination,
} as ComponentMeta<typeof Pagination>;

const PaginationStory: ComponentStory<typeof Pagination> = (args) => {
  const [currentPage, setCurrentPage] = useState(args.currentPage);
  return (
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
      <Pagination
        {...args}
        currentPage={currentPage}
        onChange={setCurrentPage}
      />
      <Pagination displayedCount={args.displayedCount} loading />
    </div>
  );
};

export const Default = PaginationStory.bind({});
const defaultArgs: PaginationProps = {
  currentPage: 1,
  itemsPerPage: 10,
  totalItems: 503,
  displayedCount: 9,
};

Default.args = defaultArgs;
