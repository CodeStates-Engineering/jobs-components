/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { DrawModal } from '.';
import { Button } from '../../atoms';

const meta: Meta<typeof DrawModal> = {
  title: 'organisms/DrawModal',
  component: DrawModal,
  decorators: [
    (Story) => (
      <div
        style={{
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

type Story = StoryObj<typeof DrawModal>;

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
        <DrawModal
          {...args}
          opened={opened}
          onClose={() => {
            setOpened(false);
          }}
        >
          <DrawModal.Header>HEADER</DrawModal.Header>
          <DrawModal.Body>BODY</DrawModal.Body>
          <DrawModal.Footer>FOOTER</DrawModal.Footer>
        </DrawModal>
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
        <DrawModal
          {...args}
          opened={leftOpened}
          onClose={() => {
            setLeftOpened(false);
          }}
          direction="left"
        >
          <DrawModal.Header>HEADER</DrawModal.Header>
          <DrawModal.Body>BODY</DrawModal.Body>
          <DrawModal.Footer>FOOTER</DrawModal.Footer>
        </DrawModal>
        <DrawModal
          {...args}
          opened={rightOpened}
          onClose={() => {
            setRightOpened(false);
          }}
          direction="right"
        >
          <DrawModal.Header>HEADER</DrawModal.Header>
          <DrawModal.Body>BODY</DrawModal.Body>
          <DrawModal.Footer>FOOTER</DrawModal.Footer>
        </DrawModal>
      </>
    );
  },
};
