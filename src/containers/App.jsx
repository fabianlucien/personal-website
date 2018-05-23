/* eslint-disable */
// https://github.com/jxnblk/grid-styled
// https://github.com/jxnblk/styled-system

// React related imports
import React from 'react';
import styled from 'styled-components';
import { ThemeProvider, injectGlobal } from 'styled-components';
import theme from '../theme';
import { Provider } from 'rebass';

// components
import Card from '../components/Card';
import Work from '../components/Work';
import Menu from '../components/menu';

// containers
import Hero from './Hero';

// Injecting some global style
injectGlobal`
  * { box-sizing: border-box; }
  body { margin: 0; }
`;

// React component
const App = () => (
  <Provider theme={theme}>
    <Menu />
    <Hero />
    <Work />
  </Provider>
);
export default App;
