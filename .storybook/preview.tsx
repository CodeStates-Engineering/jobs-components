import '../src/styles/_global.scss';

import React from 'react';

import { MemoryRouter } from 'react-router-dom';
import { Compatibility } from '../src/plugins';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

Compatibility.injectDependencies('react', {
  location: useLocation,
  link: Link,
});

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
