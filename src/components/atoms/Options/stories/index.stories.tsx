import React, { useState } from 'react';

import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Options, OptionsProps } from '..';

export default {
  title: 'atoms/Options',
  component: Options,
} as ComponentMeta<typeof Options>;

interface DummyOption {
  label: string;
  value: string;
}

const dummyOptions: DummyOption[] = [];

for (let i = 0; i < 100; i += 1) {
  dummyOptions.push({
    label: `Test label ${i}${
      i % 7 === 0
        ? ' is long text: aurora sunrise eunoia vanilla iris adorable kitten laptop lucid sunrise shine banana adorable moonlight melody haze sunrise vanilla girlish blossom'
        : ''
    }`,
    value: `${i}번 옵션이 선택`,
  });
}

const OptionsStory: ComponentStory<typeof Options> = (args) => {
  const [option, setOption] = useState<DummyOption | DummyOption[]>();
  return (
    <div>
      <div style={{ position: 'relative' }}>
        {JSON.stringify(option)}
        <Options
          {...args}
          value={option}
          options={dummyOptions}
          onSelect={(option) => {
            setOption(option);
          }}
        />
      </div>
    </div>
  );
};

export const Default = OptionsStory.bind({});
Default.args = {
  opened: true,
  options: dummyOptions,
} satisfies OptionsProps<DummyOption>;
