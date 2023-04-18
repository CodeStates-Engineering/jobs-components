import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '../../../atoms';
import { ConfirmModal } from '../ConfirmModal';

import type { ConfirmModalProps } from '../ConfirmModal';

export default {
  title: 'organisms/Modal/ConfirmModal',
  component: ConfirmModal,
} as ComponentMeta<typeof ConfirmModal>;

const DUMMY_TEXT = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
consectetur vulputate ultrices. Proin vestibulum velit et ornare lacinia.
Sed consequat, enim quis mollis ultrices, sem diam pulvinar ligula,
suscipit laoreet leo tellus et urna. Aliquam cursus justo vitae
scelerisque egestas. Praesent hendrerit pharetra purus, at elementum
tortor facilisis a. Ut placerat, ex eu iaculis scelerisque, odio ante
rutrum lorem, id tincidunt enim augue sed felis. In ante metus, dignissim
non est nec, ultrices pulvinar est. Fusce ac accumsan turpis, eget
fermentum augue.`;

const ModalStory: ComponentStory<typeof ConfirmModal> = (args) => {
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
      />
    </>
  );
};

export const Default = ModalStory.bind({});
Default.args = {
  children: DUMMY_TEXT,
  confirmButtonProps: {
    children: 'Confirm',
  },
} satisfies ConfirmModalProps;
