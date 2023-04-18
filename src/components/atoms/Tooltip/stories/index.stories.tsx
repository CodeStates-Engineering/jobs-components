import React from 'react';

import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Tooltip } from '..';

import type { TooltipProps } from '..';

export default {
  title: 'atoms/Tooltip',
  component: Tooltip,
} as ComponentMeta<typeof Tooltip>;

const TooltipStory: ComponentStory<typeof Tooltip> = (args) => (
  <div
    style={{
      height: '50vh',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Tooltip {...args} />
  </div>
);

export const Default = TooltipStory.bind({});
const defaultArgs: TooltipProps = {
  children: (
    <>
      <Tooltip.Area>
        <h1>Tooltip Area</h1>
      </Tooltip.Area>
      <Tooltip.Content>
        <div
          style={{
            width: '200px',
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin luctus
          pharetra massa, sed fermentum sapien rutrum nec. Ut at ipsum.
        </div>
      </Tooltip.Content>
    </>
  ),
};
Default.args = defaultArgs;
