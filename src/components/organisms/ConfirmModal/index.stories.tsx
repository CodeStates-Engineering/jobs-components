/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import type { Meta, StoryObj } from '@storybook/react';

import { ConfirmModal } from '.';
import { DUMMY } from '../../../utils';
import { Button } from '../../atoms';

const meta: Meta<typeof ConfirmModal> = {
  title: 'organisms/ConfirmModal',
  component: ConfirmModal,
};

export default meta;

type Story = StoryObj<typeof ConfirmModal>;

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
        <ConfirmModal
          {...args}
          opened={search.includes('?tab=')}
          onClose={() => navigate('/')}
          confirmButtonProps={{ children: 'Confirm' }}
        >
          {DUMMY.COMMON.TEXT_MIDDLE}
        </ConfirmModal>
      </>
    );
  },
};
