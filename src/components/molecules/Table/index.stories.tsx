import type { Meta, StoryObj } from '@storybook/react';

import { DUMMY } from '@constants';

import { Table } from '.';

const ROW_COUNT = 20;
const COLUMN_COUNT = 10;

const COLUMN_INDEX = {
  CAPYABLE: 4,
  LONG_TEXT: 2,
  LONG_TEXT_COPYABLE: 5,
};

const meta: Meta<typeof Table> = {
  title: 'molecules/Table',
  component: Table,
  argTypes: {
    fixedColumnCount: {
      control: 'number',
      description: '고정된 타이틀의 개수',
    },
  },
  args: {
    fixedColumnCount: 2,
    storageKey: 'table-test',
    children: (
      <>
        <Table.Header>
          {new Array(COLUMN_COUNT).fill(0).map((_, index) => (
            <Table.Title
              key={`key-${index}`}
              maxWidth={
                [
                  COLUMN_INDEX.LONG_TEXT,
                  COLUMN_INDEX.LONG_TEXT_COPYABLE,
                ].includes(index)
                  ? '150px'
                  : undefined
              }
            >
              {(() => {
                switch (index) {
                  case COLUMN_INDEX.CAPYABLE:
                    return 'Copyable';
                  case COLUMN_INDEX.LONG_TEXT:
                    return 'Long text';
                  case COLUMN_INDEX.LONG_TEXT_COPYABLE:
                    return 'Long text\ncopyable';
                  default:
                    return `Title ${index}`;
                }
              })()}
            </Table.Title>
          ))}
        </Table.Header>
        <Table.Body>
          {new Array(ROW_COUNT).fill(0).map((_, rowIndex) => (
            <Table.Row key={`row${rowIndex}`}>
              {new Array(COLUMN_COUNT).fill(0).map((_, cellIndex) => (
                <Table.Cell
                  hoverStyle={{
                    maxHeight: 200,
                    maxWidth: 300,
                  }}
                  key={`Cell ${cellIndex}-${rowIndex}`}
                  onCopy={(() => {
                    switch (cellIndex) {
                      case COLUMN_INDEX.CAPYABLE:
                      case COLUMN_INDEX.LONG_TEXT_COPYABLE:
                        return (value) =>
                          // eslint-disable-next-line no-alert
                          window.alert(`${value} Copied!`);
                      default:
                    }
                  })()}
                >
                  {(() => {
                    switch (cellIndex) {
                      case COLUMN_INDEX.LONG_TEXT:
                      case COLUMN_INDEX.LONG_TEXT_COPYABLE:
                        return DUMMY.LONG_TEXT;
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
