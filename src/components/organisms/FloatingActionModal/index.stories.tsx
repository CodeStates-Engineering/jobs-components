/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '@components/atoms';
import type { FloatingModal } from '@components/molecules/FloatingModal';

import { FloatingActionModal } from '.';

const meta: Meta<typeof FloatingModal> = {
  title: 'organisms/FloatingActionModal',
  component: FloatingActionModal,
  decorators: [
    (Story) => (
      <div style={{ height: '100vh', width: '100%' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof FloatingActionModal>;

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
          open floating modal
        </Button>

        <FloatingActionModal
          {...args}
          opened={opened}
          onClose={() => setOpened(false)}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: '16px',
              padding: '0 24px',
            }}
          >
            <div
              style={{
                padding: '3px 0',
                height: '10px',
                fontSize: '14px',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              리스트2
            </div>
            <div
              style={{
                padding: '3px 0',
                height: '10px',
                fontSize: '14px',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              리스트3
            </div>
          </div>
        </FloatingActionModal>
      </>
    );
  },
};
