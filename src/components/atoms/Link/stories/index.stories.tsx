import React from 'react';

import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Link } from '..';

import type { LinkProps } from '..';

export default {
  title: 'atoms/Link',
  component: Link,
} as ComponentMeta<typeof Link>;

const LinkStory: ComponentStory<typeof Link> = (args) => (
  <>
    <a>ss</a>
    <Link {...args} />
  </>
);

export const Default = LinkStory.bind({});
const defaultArgs: LinkProps = {
  hoverType: 'none',
  children: 'Link',
  to: '#',
};
Default.args = defaultArgs;
