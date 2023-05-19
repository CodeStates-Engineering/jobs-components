import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Table } from '.';

const COPYABLE_COLUMN = 3;
const LONG_TEXT_COLUMN = 5;
const LONG_TEXT_COPYABLE_COLUMN = 1;

const ROW_COUNT = 30;
const COLUMN_COUNT = 10;

const DUMMY_TEXT = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
consectetur vulputate ultrices. Proin vestibulum velit et ornare lacinia.
Sed consequat, enim quis mollis ultrices, sem diam pulvinar ligula,
suscipit laoreet leo tellus et urna. Aliquam cursus justo vitae
scelerisque egestas. Praesent hendrerit pharetra purus, at elementum
tortor facilisis a. Ut placerat, ex eu iaculis scelerisque, odio ante
rutrum lorem, id tincidunt enim augue sed felis. In ante metus, dignissim
non est nec, ultrices pulvinar est. Fusce ac accumsan turpis, eget
fermentum augue.`;

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
          {new Array(COLUMN_COUNT).fill(0).map((_, index) => (
            <Table.Title
              key={`key-${index}`}
              width={(() => {
                switch (index) {
                  case LONG_TEXT_COLUMN:
                  case LONG_TEXT_COPYABLE_COLUMN:
                    return 100;
                  default:
                }
              })()}
            >
              {(() => {
                switch (index) {
                  case COPYABLE_COLUMN:
                    return 'Copyable';
                  case LONG_TEXT_COLUMN:
                    return 'Long text';
                  case LONG_TEXT_COPYABLE_COLUMN:
                    return 'Long text copyable';
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
                  key={`Cell ${cellIndex}-${rowIndex}`}
                  onCopy={(() => {
                    switch (cellIndex) {
                      case COPYABLE_COLUMN:
                      case LONG_TEXT_COPYABLE_COLUMN:
                        return (value) =>
                          // eslint-disable-next-line no-alert
                          window.alert(`${value} Copied!`);
                      default:
                    }
                  })()}
                >
                  {(() => {
                    switch (cellIndex) {
                      case LONG_TEXT_COLUMN:
                      case LONG_TEXT_COPYABLE_COLUMN:
                        return DUMMY_TEXT;
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
