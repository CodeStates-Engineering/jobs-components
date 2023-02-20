import '../src/global.scss';
import '@storybook/addon-console';

import { MemoryRouter } from 'react-router-dom';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <MemoryRouter>
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        <Story />
      </div>
    </MemoryRouter>
  ),
];
