/// <reference types="react" />
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '.';
declare const meta: Meta<typeof Button>;
export default meta;
type Story = StoryObj<typeof Button>;
export declare const Default: Story;
export declare const Theme: Story;
export declare const Shape: Story;
export declare const Size: Story;
export declare const Icon: Story;
export declare const Delay: {
    args: {
        delay: number;
    };
    render: (args: any) => JSX.Element;
};
