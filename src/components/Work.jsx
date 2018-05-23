import React from 'react';

// import components
import { Flex } from 'rebass';

// import containers
import Startups from '../containers/Startups';
import OtherJobs from '../containers/OtherJobs';
import Study from '../containers/Study';
import WIP from '../containers/WIP';
import Other from '../containers/Other';

// React
const Work = () => (
  <Flex justifyContent="center" flexDirection="column" mx={2}>
    <Startups id="startups" />
    <OtherJobs id="other-jobs" />
    <Study id="study" />
    <WIP id="wip" />
    <Other id="other" />
  </Flex>
);

export default Work;
