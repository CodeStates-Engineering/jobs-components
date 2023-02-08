import React, { useState } from 'react';

import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Options } from '..';

import type { OptionsProps, Option } from '..';

export default {
  title: 'atoms/Options',
  component: Options,
} as ComponentMeta<typeof Options>;

const ButtonStory: ComponentStory<typeof Options> = (args) => {
  const [label, setLabel] = useState('');

  return (
    <div>
      <div>
        <Options
          {...args}
          onClick={(value) => {
            setLabel(value.name);
          }}
        />
      </div>
      <p>{label}</p>
    </div>
  );
};

type DummyOption = Option<{ name: string; number: number }>;

const dummyOptions: DummyOption[] = [];

for (let i = 0; i < 100; i += 1) {
  dummyOptions.push({
    label: `Test label ${i}${
      i % 7 === 0
        ? ' is long text: aurora sunrise eunoia vanilla iris adorable kitten laptop lucid sunrise shine banana adorable moonlight melody haze sunrise vanilla girlish blossom'
        : ''
    }`,
    value: {
      name: `Test label ${i}'s name`,
      number: i,
    },
  });
}

export const Default = ButtonStory.bind({});
const defaultArgs: OptionsProps<DummyOption> = {
  opened: true,
  options: dummyOptions,
};
Default.args = defaultArgs;
