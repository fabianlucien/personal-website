import React from 'react';

// import components
import { MaxWidthContainer } from '../components/UI';
import WorkEntry from '../components/WorkEntry';
import WorkHeader from '../components/WorkHeader';

// images
import replyhero from '../images/replyhero.png';

// copy
import copy from '../locales/copy.json';

// React
const Other = props => (
  <div id={props.id}>
    <MaxWidthContainer m={0} p="10% 4% 2%">
      <WorkHeader headerText="Other projects" color="#FD786A" />
    </MaxWidthContainer>
    <MaxWidthContainer my={2} flexDirection="column" bg="#f7f6f8">
      <WorkEntry copy={copy.replyhero} images={[replyhero]} />
    </MaxWidthContainer>
  </div>
);

export default Other;
