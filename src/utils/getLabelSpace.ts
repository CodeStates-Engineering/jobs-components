import type { LabelContainerProps, InputWrapProps } from '@components/atoms';

export const getLabelSpace = (
  labelDirection: LabelContainerProps['direction'],
  inputSize: InputWrapProps['size'],
) => (labelDirection === 'row' ? inputSize ?? 'large' : 'none');
