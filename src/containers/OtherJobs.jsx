import React from 'react';

// import components
import { MaxWidthContainer } from '../components/UI';
import WorkEntry from '../components/WorkEntry';
import WorkHeader from '../components/WorkHeader';

// images
import ordersystem from '../images/coffeecompany.png';
import bohemes from '../images/bohemes.jpg';

// copy
import copy from '../locales/copy.json';

// React
const OtherJobs = props => (
  <div id={props.id}>
    <MaxWidthContainer m={0} p="10% 4% 2%">
      <WorkHeader headerText="job experience" color="#FD786A" />
    </MaxWidthContainer>
    <MaxWidthContainer my={2} flexDirection="column" bg="#f7f6f8">
      <WorkEntry copy={copy.coffeecompany} images={[ordersystem]} />
      <WorkEntry copy={copy.musician} images={[bohemes]} />
    </MaxWidthContainer>
  </div>
);

export default OtherJobs;
