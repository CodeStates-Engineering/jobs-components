import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Table } from '.';

const meta: Meta<typeof Table> = {
  title: 'molecules/Table',
  component: Table,
  args: {
    fixedTitleCount: 3,
    children: (
      <>
        <Table.Header>
          {new Array(30).fill(0).map((_, index) => (
            <Table.Title width={60} key={`key-${index}`}>
              Title {index}
            </Table.Title>
          ))}
        </Table.Header>
        <Table.Body>
          {new Array(30).fill(0).map((_, rowIndex) => (
            <Table.Row key={`row${rowIndex}`}>
              {new Array(30).fill(0).map((_, cellIndex) => (
                <Table.Cell
                  key={` Cell ${rowIndex}-${cellIndex}`}
                  onCopy={() => undefined}
                >
                  Cell {rowIndex}-{cellIndex}
                </Table.Cell>
              ))}
            </Table.Row>
          ))}
        </Table.Body>
      </>
    ),
  },

  decorators: [
    (Story) => (
      <article
        style={{
          width: '100%',
          height: 900,
        }}
      >
        <Story />
      </article>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Table>;

export const Default: Story = {};
