import React from 'react';

// import components
import { MaxWidthContainer } from '../components/UI';
import WorkEntry from '../components/WorkEntry';
import WorkHeader from '../components/WorkHeader';

// images
import stampix from '../images/stampix-2.png';
import publitas from '../images/publitas.png';

// copy
import copy from '../locales/copy.json';

// React
const Startups = props => (
  <div id={props.id}>
    <MaxWidthContainer m={0} p="10% 4% 2%">
      <WorkHeader headerText="startup jobs" color="#FD786A" />
    </MaxWidthContainer>
    <MaxWidthContainer my={2} flexDirection="column" bg="#f7f6f8">
      <WorkEntry copy={copy.stampix} images={[stampix]} />
      <WorkEntry copy={copy.publitas} images={[publitas]} />
    </MaxWidthContainer>
  </div>
);

export default Startups;
