/* eslint-disable react-hooks/rules-of-hooks */

import { useLocation, useNavigate } from 'react-router-dom';

import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '@components/atoms';
import { DUMMY } from '@constants';

import { Modal } from '.';

const meta: Meta<typeof Modal> = {
  title: 'organisms/Modal',
  component: Modal,
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

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  render: (args) => {
    const navigate = useNavigate();
    const { search } = useLocation();

    return (
      <>
        <Button
          onClick={() => {
            navigate('/?tab=1');
          }}
        >
          Open
        </Button>
        <Modal
          {...args}
          opened={search.includes('?tab=')}
          onClose={() => navigate('/')}
        >
          <Modal.Header />
          <Modal.Body>
            <p>{DUMMY.VERY_LONG_TEXT}</p>
          </Modal.Body>
          <Modal.Footer>footer children</Modal.Footer>
        </Modal>
      </>
    );
  },
};

export const WithTabMenu: Story = {
  render: (args) => {
    const navigate = useNavigate();
    const { search } = useLocation();

    return (
      <>
        <Button
          onClick={() => {
            navigate('/?tab=1');
          }}
        >
          Open
        </Button>
        <Modal
          {...args}
          opened={search.includes('?tab=')}
          onClose={() => navigate('/')}
        >
          <Modal.TabMenuHeader
            items={[
              {
                label: 'Tab 1',
                to: '/?tab=1',
              },
              {
                label: 'Tab 2',
                to: '/?tab=2',
              },
              {
                label: 'Tab 3',
                to: '/?tab=3',
              },
              {
                label: 'Tab 4',
                to: '/?tab=4',
              },
            ]}
          />
          <Modal.Body>
            <p>{DUMMY.VERY_LONG_TEXT}</p>
          </Modal.Body>
          <Modal.Footer>footer children</Modal.Footer>
        </Modal>
      </>
    );
  },
};
