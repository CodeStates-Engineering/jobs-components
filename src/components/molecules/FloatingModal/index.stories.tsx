/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react';
import { X } from 'react-feather';

import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '@components/atoms';

import { FloatingModal } from '.';

const meta: Meta<typeof FloatingModal> = {
  title: 'organisms/FloatingModal',
  component: FloatingModal,
  decorators: [
    (Story) => (
      <div style={{ height: '600px', width: '100%' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof FloatingModal>;

export const Default: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button
          onClick={() => {
            setOpen(true);
          }}
        >
          open floating modal
        </Button>

        <FloatingModal {...args} opened={open} onClose={() => setOpen(false)}>
          <FloatingModal.Body>
            <>
              <div
                style={{
                  padding: '3px',
                  height: '10px',
                  fontSize: '14px',
                  fontWeight: '600',
                  display: 'flex',
                  alignItems: 'center',
                  paddingRight: '24px',
                }}
              >
                리스트1
              </div>
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
                  리스트4
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
                  리스트5
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
                  리스트6
                </div>
              </div>
            </>
          </FloatingModal.Body>
          <FloatingModal.Tail>
            <div style={{ display: 'flex', alignSelf: 'center' }}>
              <Button
                icon={<X />}
                variant="ghost"
                color="bluishGray700"
                size="small3x"
                onClick={() => {
                  setOpen(false);
                }}
              />
            </div>
          </FloatingModal.Tail>
        </FloatingModal>
      </>
    );
  },
};
