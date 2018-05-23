import React from 'react';
import styled from 'styled-components';
import animateScrollTo from 'animated-scroll-to';
import Sticky from 'react-stickynode';
import media from '../utils/media';

const Container = styled.div`
  width: 100vw;
  background-color: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 4%;
  margin: 0px;
  position: absolute;
  .active {
    font-size: 200px;
  }
  ${media.small`
    display: none;
  `};
`;

const Content = styled.div`
  max-width: 1200px;
  padding-left: 4%;
  display: flex;
  flex-direction: row;
`;

// const LogoContainer = styled.div`
//   padding: 12px;
//   font-family: 'Rubik', sans-serif;
//   font-size: 1rem;

//   ${media.medium`
//       padding: 12px;
//     `};
// `;

const ButtonContainer = styled.div`
  padding: 12px 0px;
  display: flex;
  flex-direction: row;
`;

const Button = styled.div`
  color: #3333f1;
  opacity: 0.4;
  font-weight: 700;
  font-family: 'IBM Plex Sans', 'sans-serif';
  font-size: 0.8rem;
  cursor: pointer;
  padding-right: 24px;
  :hover {
    color: #fd786a;
  }
`;

const handleStateChange = (status) => {
  const menu = document.getElementById('menu');
  if (status.status === Sticky.STATUS_FIXED) {
    menu.style.boxShadow = '0 0 30px 0 rgba(0,0,0,0.05)';
    menu.style.borderBottom = '1px solid #efefef';
    menu.style.backgroundColor = 'rgba(255,255,255, 0.98)';
  } else {
    menu.style.boxShadow = 'none';
    menu.style.borderBottom = 'none';
    menu.style.backgroundColor = 'rgba(255,255,255, 0)';
  }
};

// React
const Menu = () => (
  <Sticky enabled innerZ={100} onStateChange={handleStateChange}>
    <Container id="menu">
      <Content>
        <ButtonContainer>
          <Button
            onClick={() => {
              animateScrollTo(document.querySelector('#startups'));
            }}
          >
            startup jobs
          </Button>
          <Button
            onClick={() => {
              animateScrollTo(document.querySelector('#other-jobs'));
            }}
          >
            job experience
          </Button>
          <Button
            onClick={() => {
              animateScrollTo(document.querySelector('#study'));
            }}
          >
            education
          </Button>
          <Button
            onClick={() => {
              animateScrollTo(document.querySelector('#wip'));
            }}
          >
            work in progress
          </Button>
          <Button
            onClick={() => {
              animateScrollTo(document.querySelector('#other'));
            }}
          >
            other projects
          </Button>
        </ButtonContainer>
      </Content>
    </Container>
  </Sticky>
);

export default Menu;
