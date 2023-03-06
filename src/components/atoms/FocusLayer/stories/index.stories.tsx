import React from 'react';

import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { FocusLayer } from '..';

import type { FocusLayerProps } from '..';

export default {
  title: 'atoms/FocusLayer',
  component: FocusLayer,
} as ComponentMeta<typeof FocusLayer>;

const FocusLayerStory: ComponentStory<typeof FocusLayer> = (args) => (
  <div
    style={{
      height: '300vh',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      fontSize: '2rem',
      fontWeight: '600',
    }}
  >
    <p>Background header text</p>
    <FocusLayer {...args}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          padding: '20px',
          backgroundColor: '#858585',
          borderRadius: '10px',
          color: '#f7f7f7',
        }}
      >
        {args.children}
      </div>
    </FocusLayer>
    <p>Background footer text</p>
  </div>
);

export const Default = FocusLayerStory.bind({});
const defaultArgs: FocusLayerProps = {
  focused: true,
  blur: true,
  children: 'Children text',
};
Default.args = defaultArgs;
