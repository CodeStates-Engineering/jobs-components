import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Table } from '.';

const meta: Meta<typeof Table> = {
  title: 'molecules/Table',
  component: Table,
  args: {
    children: (
      <>
        <Table.Header>
          {new Array(15).fill(0).map((_, index) => (
            <Table.Title key={`key-${index}`}>Title {index}</Table.Title>
          ))}
        </Table.Header>
        <Table.Body>
          {new Array(30).fill(0).map((_, rowIndex) => (
            <Table.Row key={`row${rowIndex}`}>
              {new Array(15).fill(0).map((_, cellIndex) => (
                <Table.Cell key={` Cell ${rowIndex}-${cellIndex}`}>
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
          height: '500px',
          width: '100%',
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
