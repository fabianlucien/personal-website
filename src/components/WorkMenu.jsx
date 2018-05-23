// React related imports
import React from 'react';
// import styled from 'styled-components';

// import components
import { Container, Tabs, Tab } from 'rebass';
import {} from '../components/UI';

const FullWidthTabs = Tabs.extend`
  width: 100%;
  display: flex;
  justify-content: left;
`;

// const Selected = styled.span`
//   background-color: yellow;
//   width: 50px;
//   height: 50px;
//   position: absolute;
//   z-index: 0;
// `;

const StyledTab = Tab.extend`
  cursor: pointer;
  background-color: none;
  border: none;
`;

// React
const Menu = () => (
  <Container w={1200}>
    {/* <Selected id="selected" /> */}
    <FullWidthTabs zIndex={2}>
      <StyledTab onClick={() => alert('test')}>done /</StyledTab>
      <StyledTab>doing /</StyledTab>
      <StyledTab>upcoming /</StyledTab>
    </FullWidthTabs>
  </Container>
);

export default Menu;
