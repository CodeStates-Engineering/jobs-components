import React from 'react';

import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { LocalModal } from '..';

import type { LocalModalProps } from '..';

export default {
  title: 'atoms/LocalModal',
  component: LocalModal,
} as ComponentMeta<typeof LocalModal>;

const LocalModalStory: ComponentStory<typeof LocalModal> = (args) => (
  <div
    style={{
      height: '50vh',
      width: '100%',
      padding: '20px',
    }}
  >
    <LocalModal {...args} />
  </div>
);

export const Default = LocalModalStory.bind({});
const defaultArgs: LocalModalProps = {
  children: (
    <section
      style={{
        height: '300px',
        width: '200px',
        padding: '20px',
      }}
    >
      LocalModal
    </section>
  ),
};
Default.args = defaultArgs;
