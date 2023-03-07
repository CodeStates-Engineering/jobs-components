import React, { useState } from 'react';

import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { ToastContainer } from '..';
import { Button } from '../../../atoms';

import type { ToastContainerProps, ToastOption } from '..';

export default {
  title: 'molecules/ToastContainer',
  component: ToastContainer,
} as ComponentMeta<typeof ToastContainer>;

const ToastContainerStory: ComponentStory<typeof ToastContainer> = (args) => {
  const [toastIndex, setToastIndex] = useState(1);
  const toastOption: ToastOption = {
    type: toastIndex % 2 === 0 ? 'success' : 'fail',
    content: `Toast test text ${toastIndex}`,
  };
  return (
    <div
      style={{
        height: '100vh',
        width: '100%',
        padding: '20px',
      }}
    >
      <Button onClick={() => setToastIndex((prev) => prev + 1)}>
        Toast Up
      </Button>
      <ToastContainer {...args} toastOption={toastOption} />
    </div>
  );
};

export const Default = ToastContainerStory.bind({});
const defaultArgs: ToastContainerProps = {};
Default.args = defaultArgs;
