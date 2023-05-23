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
