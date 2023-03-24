import React, { useState } from 'react';

import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { FocusLayer } from '..';
import { Button } from '../../Button';

import type { FocusLayerProps } from '..';

export default {
  title: 'atoms/FocusLayer',
  component: FocusLayer,
} as ComponentMeta<typeof FocusLayer>;

const FocusLayerStory: ComponentStory<typeof FocusLayer> = (args) => {
  const [focused, setFocused] = useState(false);

  return (
    <div
      style={{
        height: '150vh',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        fontSize: '2rem',
        fontWeight: '600',
      }}
    >
      <p>External text</p>
      <Button onClick={() => setFocused(true)}>open focus layer</Button>
      <FocusLayer {...args} focused={focused} onClick={() => setFocused(false)}>
        {args.children}
      </FocusLayer>
      <Button onClick={() => setFocused(true)}>open focus layer</Button>
    </div>
  );
};

export const Default = FocusLayerStory.bind({});
const defaultArgs: FocusLayerProps = {
  blur: true,
  children: 'Children text',
};
Default.args = defaultArgs;
