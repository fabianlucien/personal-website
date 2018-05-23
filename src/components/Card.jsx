import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid #efefef;
  border-radius: 5px;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.05);
  width: 250px;
  height: 250px;
  margin: 12px;
`;

const ImageContainer = styled.img`
  background: white;
  height: 90%;
  width: 90%;
  margin: 12px auto;
`;

const Header = styled.h2`
  font-size: 1.2rem;
  margin: auto;
  padding: 6px;
`;

// Component
const Card = () => (
  <Container>
    <ImageContainer />
    <Header>This is a header to test with</Header>
  </Container>
);

export default Card;
