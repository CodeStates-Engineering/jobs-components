import React from 'react';

import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Dropdown } from '..';

import type { DropdownProps } from '..';

export default {
  title: 'atoms/Dropdown',
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const DropdownStory: ComponentStory<typeof Dropdown> = (args) => (
  <div
    style={{
      height: '50vh',
      width: '100%',
      padding: '20px',
    }}
  >
    <Dropdown {...args} />
  </div>
);

export const Default = DropdownStory.bind({});
const defaultArgs: DropdownProps = {
  children: (
    <section
      style={{
        height: '300px',
        width: '200px',
        padding: '20px',
      }}
    >
      Dropdown Text
    </section>
  ),
  opened: true,
};
Default.args = defaultArgs;
