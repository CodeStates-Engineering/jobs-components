import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '.';
declare const meta: Meta<typeof Input.Container>;
export default meta;
type Story = StoryObj<typeof Input.Container>;
export declare const Default: Story;
export declare const ValidationMessage: Story;
