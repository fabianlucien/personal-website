import React from 'react';

// import components
import { MaxWidthContainer } from '../components/UI';
import WorkEntry from '../components/WorkEntry';
import WorkHeader from '../components/WorkHeader';

// images
import lett from '../images/lett.png';

// copy
import copy from '../locales/copy.json';

// React
const Study = props => (
  <div id={props.id}>
    <MaxWidthContainer m={0} p="10% 4% 2%">
      <WorkHeader headerText="Education" color="#FD786A" />
    </MaxWidthContainer>
    <MaxWidthContainer my={2} flexDirection="column" bg="#f7f6f8">
      <WorkEntry copy={copy.education} images={[lett]} />
    </MaxWidthContainer>
  </div>
);

export default Study;
