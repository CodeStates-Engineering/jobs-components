import type { Meta, StoryObj } from '@storybook/react';
import type { InputProps, InputWrapProps } from './index';
type StroyProps = InputProps & Pick<InputWrapProps, 'borderRadius' | 'size' | 'validationMessage' | 'width'>;
declare const meta: Meta<StroyProps>;
export default meta;
type Story = StoryObj<StroyProps>;
export declare const Default: Story;
