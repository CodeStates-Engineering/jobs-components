/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react';
import { ChevronRight, MoreHorizontal } from 'react-feather';

import type { Meta, StoryObj } from '@storybook/react';

import { DrawerModal } from '.';
import { DUMMY } from '../../../utils';
import { Button } from '../../atoms';
import { Table } from '../../molecules';

const { TABLE_TITLE, TABLE_BODY, COMMON } = DUMMY;

const meta: Meta<typeof DrawerModal> = {
  title: 'organisms/DrawerModal',
  component: DrawerModal,
  decorators: [
    (Story) => (
      <div
        style={{
          transform: 'scale(1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem',
          height: '90vh',
          width: '100%',
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof DrawerModal>;

export const Default: Story = {
  render: (args) => {
    const [opened, setOpened] = useState(false);
    return (
      <>
        <Button
          onClick={() => {
            setOpened(true);
          }}
        >
          Open
        </Button>
        <DrawerModal
          {...args}
          opened={opened}
          onClose={() => {
            setOpened(false);
          }}
        >
          <DrawerModal.Header>HEADER</DrawerModal.Header>
          <DrawerModal.Body>BODY</DrawerModal.Body>
          <DrawerModal.Footer>FOOTER</DrawerModal.Footer>
        </DrawerModal>
      </>
    );
  },
};

export const Direction: Story = {
  render: (args) => {
    const [leftOpened, setLeftOpened] = useState(false);
    const [rightOpened, setRightOpened] = useState(false);

    return (
      <>
        <Button
          onClick={() => {
            setLeftOpened(true);
          }}
        >
          From Left
        </Button>
        <Button
          onClick={() => {
            setRightOpened(true);
          }}
        >
          From Right
        </Button>
        <DrawerModal
          {...args}
          opened={leftOpened}
          onClose={() => {
            setLeftOpened(false);
          }}
          direction="left"
        >
          <DrawerModal.Header>HEADER</DrawerModal.Header>
          <DrawerModal.Body>BODY</DrawerModal.Body>
          <DrawerModal.Footer>FOOTER</DrawerModal.Footer>
        </DrawerModal>
        <DrawerModal
          {...args}
          opened={rightOpened}
          onClose={() => {
            setRightOpened(false);
          }}
          direction="right"
        >
          <DrawerModal.Header>HEADER</DrawerModal.Header>
          <DrawerModal.Body>BODY</DrawerModal.Body>
          <DrawerModal.Footer>FOOTER</DrawerModal.Footer>
        </DrawerModal>
      </>
    );
  },
};

const Header = () => (
  <header
    style={{
      height: '100%',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '2px 24px',
      boxSizing: 'border-box',
    }}
  >
    <div
      style={{
        display: 'flex',
        gap: '1rem',
        alignItems: 'center',
        marginRight: 'auto',
      }}
    >
      <Button size="small" theme="bluish-gray700/0" icon={<ChevronRight />} />
      <h2>코드스테이츠 / 심기용</h2>
    </div>
    <Button size="small" theme="bluish-gray700/0" icon={<MoreHorizontal />} />
  </header>
);

export const WithContents: Story = {
  render: (args) => {
    const [opened, setOpened] = useState(false);
    return (
      <>
        <Button
          onClick={() => {
            setOpened(true);
          }}
        >
          Open
        </Button>
        <DrawerModal
          {...args}
          opened={opened}
          onClose={() => {
            setOpened(false);
          }}
        >
          <DrawerModal.Header>
            <Header />
          </DrawerModal.Header>
          <DrawerModal.Body>
            <Table fixedColunmCount={3}>
              <Table.Header>
                {new Array(TABLE_BODY.COLUMN_COUNT).fill(0).map((_, index) => (
                  <Table.Title
                    key={`key-${index}`}
                    maxWidth={(() => {
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
            </Table>
          </DrawerModal.Body>
          <DrawerModal.Footer>
            <div
              style={{
                display: 'flex',
                height: '100%',
                alignItems: 'center',
                justifyContent: 'flex-end',
                padding: '2px 24px',
              }}
            >
              <Button size="medium">파트너 승인</Button>
            </div>
          </DrawerModal.Footer>
        </DrawerModal>
      </>
    );
  },
};
