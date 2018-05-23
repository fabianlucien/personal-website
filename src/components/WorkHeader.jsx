import React from 'react';

// import components
import { Text, Row, Column } from 'rebass';

// React
const WorkHeader = props => (
  <Row mx={0} bg="" px={0} py={0} my={0}>
    <Column p={0} px={0} id="column" mb={0}>
      <Text
        color={props.color}
        fontSize={6}
        p={0}
        mx={0}
        my={1}
        textAlign={['center', 'left']}
        fontWeight="bold"
      >
        {props.headerText}
      </Text>
    </Column>
  </Row>
);

export default WorkHeader;
