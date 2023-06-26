import type { Meta, StoryObj } from '@storybook/react';

import { Accordion } from '.';
import { DUMMY } from '../../../utils';

const meta: Meta<typeof Accordion> = {
  title: 'molecules/Accordion',
  component: Accordion,
  decorators: [
    (Story) => (
      <div
        style={{
          height: '50vh',
          width: '300px',
          padding: '20px',
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  render: (args) => (
    <Accordion {...args}>
      <Accordion.Title>Accordion Title</Accordion.Title>
      <Accordion.Contents>{DUMMY.COMMON.TEXT_LONG}</Accordion.Contents>
    </Accordion>
  ),
};
