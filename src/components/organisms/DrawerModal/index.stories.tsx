/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { DrawerModal } from '.';
import { Button } from '../../atoms';

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
          height: '100vh',
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
