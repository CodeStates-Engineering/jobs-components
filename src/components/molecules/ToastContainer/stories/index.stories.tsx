import React, { useState } from 'react';

import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { ToastContainer } from '..';
import { Button } from '../../../atoms';

import type { ToastContainerProps } from '..';

export default {
  title: 'molecules/ToastContainer',
  component: ToastContainer,
} as ComponentMeta<typeof ToastContainer>;

const ToastContainerStory: ComponentStory<typeof ToastContainer> = (args) => {
  const [toastIndex, setToastIndex] = useState(0);

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
      <ToastContainer
        {...args}
        type={toastIndex % 2 === 0 ? 'success' : 'fail'}
      >
        {toastIndex ? `Toast test text ${toastIndex}` : null}
      </ToastContainer>
    </div>
  );
};

export const Default = ToastContainerStory.bind({});
const defaultArgs: ToastContainerProps = {};
Default.args = defaultArgs;
