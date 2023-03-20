import React from 'react';

import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Link } from '..';

import type { LinkProps } from '..';

export default {
  title: 'atoms/Link',
  component: Link,
} as ComponentMeta<typeof Link>;

const LinkStory: ComponentStory<typeof Link> = (args) => <Link {...args} />;

export const Default = LinkStory.bind({});
const defaultArgs: LinkProps = {
  children: 'Link',
  to: '#',
};
Default.args = defaultArgs;
