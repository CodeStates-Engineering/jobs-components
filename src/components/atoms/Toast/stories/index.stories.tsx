import React from 'react';

import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Toast } from '..';

import type { ToastProps } from '..';

export default {
  title: 'atoms/Toast',
  component: Toast,
} as ComponentMeta<typeof Toast>;

const ToastStory: ComponentStory<typeof Toast> = (args) => (
  <div
    style={{
      height: '50vh',
      width: '100%',
      padding: '20px',
    }}
  >
    <Toast {...args} />
  </div>
);

export const Default = ToastStory.bind({});
const defaultArgs: ToastProps = {
  children: 'Toast test text',
  type: 'success',
  floatDirection: 'from-top',
};
Default.args = defaultArgs;
