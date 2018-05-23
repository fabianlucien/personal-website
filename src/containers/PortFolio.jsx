// React related imports
import React from 'react';

// import components
import { Flex } from 'rebass';
import {} from '../components/UI';
import Card from '../components/Card';

// React
const Portfolio = () => (
  <Flex justifyContent="left" bg="white" boxShadow={1} width="auto" px={5}>
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
  </Flex>
);

export default Portfolio;
