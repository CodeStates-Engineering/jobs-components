import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Table } from '.';
import { DUMMY } from '../../../utils';
import { Selectbox } from '../Selectbox';

const { TABLE_TITLE, TABLE_BODY, COMMON } = DUMMY;

const meta: Meta<typeof Table> = {
  title: 'molecules/Table',
  component: Table,
  argTypes: {
    fixedTitleCount: {
      control: 'number',
      description: '고정된 타이틀의 개수',
    },
  },
  args: {
    fixedTitleCount: 3,
    children: (
      <>
        <Table.Header>
          {new Array(TABLE_BODY.COLUMN_COUNT).fill(0).map((_, index) => (
            <Table.Title
              key={`key-${index}`}
              width={(() => {
                switch (index) {
                  case TABLE_TITLE.LONG_TEXT_COLUMN:
                  case TABLE_TITLE.LONG_TEXT_COPYABLE_COLUMN:
                    return 100;
                  default:
                }
              })()}
            >
              {(() => {
                switch (index) {
                  case TABLE_TITLE.COPYABLE_COLUMN:
                    return 'Copyable';
                  case TABLE_TITLE.LONG_TEXT_COLUMN:
                    return 'Long text';
                  case TABLE_TITLE.LONG_TEXT_COPYABLE_COLUMN:
                    return 'Long text copyable';
                  default:
                    return `Title ${index}`;
                }
              })()}
            </Table.Title>
          ))}
        </Table.Header>
        <Table.Body>
          {new Array(TABLE_BODY.ROW_COUNT).fill(0).map((_, rowIndex) => (
            <Table.Row key={`row${rowIndex}`}>
              {new Array(TABLE_BODY.COLUMN_COUNT)
                .fill(0)
                .map((_, cellIndex) => (
                  <Table.Cell
                    hoverStyle={{
                      maxHeight: 200,
                      maxWidth: 300,
                    }}
                    key={`Cell ${cellIndex}-${rowIndex}`}
                    onCopy={(() => {
                      switch (cellIndex) {
                        case TABLE_TITLE.COPYABLE_COLUMN:
                        case TABLE_TITLE.LONG_TEXT_COPYABLE_COLUMN:
                          return (value) =>
                            // eslint-disable-next-line no-alert
                            window.alert(`${value} Copied!`);
                        default:
                      }
                    })()}
                  >
                    {(() => {
                      switch (cellIndex) {
                        case TABLE_TITLE.LONG_TEXT_COLUMN:
                        case TABLE_TITLE.LONG_TEXT_COPYABLE_COLUMN:
                          return COMMON.TEXT_MIDDLE;
                        default:
                          return `Cell ${cellIndex}-${rowIndex}`;
                      }
                    })()}
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
          height: 500,
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
