<<<<<<< HEAD
import "../src/scss/global.scss";
import "@fontsource/noto-sans-kr";
import "@storybook/addon-console";
import { Link, useLocation, MemoryRouter } from "react-router-dom";
import { replaceDependency } from "../src/plugins";
=======
import '../src/scss/global.scss';
import '@storybook/addon-console';
import { Link, useLocation, MemoryRouter } from 'react-router-dom';
import { replaceDependency } from '../src/plugins';
>>>>>>> release

replaceDependency({
  Link,
  usePathname: () => useLocation().pathname,
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
      <div
        id="preview-wrap"
        style={{
<<<<<<< HEAD
          display: "flex",
          minHeight: "80vh",
          justifyContent: "center",
          alignItems: "center",
=======
          display: 'flex',
          minHeight: '80vh',
          justifyContent: 'center',
          alignItems: 'center',
>>>>>>> release
        }}
      >
        <Story />
      </div>
    </MemoryRouter>
  ),
];
