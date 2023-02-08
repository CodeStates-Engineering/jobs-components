import React, { useState } from 'react';

import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { FocusLayer } from '..';
import { Button } from '../..';

import type { FocusLayerProps } from '..';

export default {
  title: 'atoms/FocusLayer',
  component: FocusLayer,
} as ComponentMeta<typeof FocusLayer>;

const FocusLayerStory: ComponentStory<typeof FocusLayer> = (args) => {
  const [focused, setFocused] = useState(args.focused);
  return (
    <div
      style={{
        height: '300vh',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        fontSize: '5rem',
        fontWeight: 'bold',
      }}
    >
      <p>Background</p>
      <FocusLayer {...args} focused={focused}>
        <Button onClick={() => setFocused(!focused)}>🚧 Test Button</Button>
        {args.children}
      </FocusLayer>
      <p>Background</p>
    </div>
  );
};

export const Default = FocusLayerStory.bind({});
const defaultArgs: FocusLayerProps = {
  focused: false,
  children: 'Children Text',
};
Default.args = defaultArgs;
