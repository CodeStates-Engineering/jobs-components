/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import type { Meta, StoryObj } from '@storybook/react';

import { ConfirmModal } from './ConfirmModal';
import { Button } from '../../atoms';

const DUMMY_TEXT = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
consectetur vulputate ultrices. Proin vestibulum velit et ornare lacinia.
Sed consequat, enim quis mollis ultrices, sem diam pulvinar ligula,
suscipit laoreet leo tellus et urna. Aliquam cursus justo vitae
scelerisque egestas. Praesent hendrerit pharetra purus, at elementum
tortor facilisis a. Ut placerat, ex eu iaculis scelerisque, odio ante
rutrum lorem, id tincidunt enim augue sed felis. In ante metus, dignissim
non est nec, ultrices pulvinar est. Fusce ac accumsan turpis, eget
fermentum augue.`;

const meta: Meta<typeof ConfirmModal> = {
  title: 'organisms/Modal/ConfirmModal',
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
          {DUMMY_TEXT}
        </ConfirmModal>
      </>
    );
  },
};
