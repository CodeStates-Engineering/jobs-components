import React from 'react';

import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { File } from '..';

import type { FileProps } from '..';

export default {
  title: 'molecules/File',
  component: File,
} as ComponentMeta<typeof File>;

const FileStory: ComponentStory<typeof File> = (args) => (
  <div
    style={{
      height: '50vh',
      width: '300px',
      padding: '20px',
    }}
  >
    <File {...args} />
  </div>
);

export const Default = FileStory.bind({});
const defaultArgs: FileProps = {
  children: 'Upload',
};
Default.args = defaultArgs;
