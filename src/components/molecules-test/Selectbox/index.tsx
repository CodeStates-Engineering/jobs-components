/* eslint-disable dot-notation */
import {
  FocusLayer,
  FocusLayerProps,
  Input,
  InputContainer,
  InputContainerProps,
  InputProps,
  OptionHint,
  Options,
  OptionsProps,
} from 'components/atoms';
import { cleanClassName } from 'utils';

import { useState } from 'react';
import { ChevronDown } from 'react-feather';

import styles from './index.module.scss';

// 🙋‍♂️ Options > ValidValue 타입이 재활용되고 있는데,
// 공통 타입 폴더에서 관리할 수 있을 것 같다
type ValidValue = string | number | null;

interface ObjectOption<T extends ValidValue> {
  label: string;
  value: T;
}

type SelectboxProps<T extends OptionHint> = Omit<
  OptionsProps<T> & InputProps<'text'> & InputContainerProps & FocusLayerProps,
  'type' | 'children' | 'validationMessage' | 'onFocus' | 'value' | 'onChange'
> &
  Pick<OptionsProps<T>, 'float' | 'options' | 'width' | 'value'> & {
    dependencies?: React.DependencyList;
    onChange?: OptionsProps<T>['onSelect'];
  };

export const Selectbox = <T extends OptionHint>({
  float,

  // 🙋‍♂️ value의 역할은?
  value,
  width = '300px',
  options,
  size = 'medium',
  disabled = false,
  placeholder = '선택해주세요',
  blur = false,
  onChange,
}: SelectboxProps<T>) => {
  const [active, setActive] = useState<boolean>(false);

  // 외부에서 deps를 전달해, 이에 따라 selected 옵션을 업데이트할 수 있는 커스텀 훅이 필요하다.
  const [selected, setSelected] = useState<ObjectOption<ValidValue>>({
    label: 'null',
    value: null,
  });

  function handleOptionSelect<T extends OptionHint>(option: T) {
    if (typeof option === 'object') {
      setSelected(option);
      return;
    }
    setSelected({
      label: option,
      value: option,
    });
  }

  // 🙋‍♂️ undefined를 return하는 패턴이 어색하진 않은지?
  function getInputValueFor(selected: OptionHint) {
    if (typeof selected === 'string') {
      return selected;
    }

    return selected.label === 'null' ? undefined : selected.label;
  }

  // 🙋‍♂️ 타입 단언이 옳은 방법인가?
  function getOptionValueFor(selected: ObjectOption<ValidValue>) {
    return selected.value as typeof value;
  }

  return (
    <>
      <div
        className={styles['select-box-wrap']}
        onClick={() => {
          if (disabled) {
            return;
          }

          if (active) {
            setActive(false);
          } else {
            setActive(true);
          }
        }}
      >
        <FocusLayer
          onClick={() => {
            setActive(false);
          }}
          focused={active}
          blur={blur}
        >
          <InputContainer width={width} size={size}>
            <Input
              value={getInputValueFor(selected)}
              width={width}
              disabled={disabled}
              placeholder={placeholder}
            />
            <ChevronDown
              className={cleanClassName(
                `${styles.icon} ${active && styles['rotate']}`,
              )}
            />
            <Options
              opened={active}
              options={options}
              onSelect={(option) => {
                handleOptionSelect(option);
                onChange?.(option);
              }}
              value={getOptionValueFor(selected)}
              width={width}
              float={float}
            />
          </InputContainer>
        </FocusLayer>
      </div>
    </>
  );
};
