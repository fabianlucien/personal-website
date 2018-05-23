// React related imports
import React from 'react';
import { Button, Image, Text, Heading } from 'rebass';
import animateScrollTo from 'animated-scroll-to';
import { FullScreenFlex, MaxWidthContainer, FullScreenBox } from '../components/UI';

// images
import illu from '../images/hero-illu.svg';

const CTA = Button.extend`
  max-width: 200px;
  cursor: pointer;
  min-height: 42px;
  :hover {
    background-color: #2750ae;
  }
`;

// React
const Hero = () => (
  <FullScreenFlex>
    <MaxWidthContainer m="auto">
      <FullScreenBox
        py={4}
        maxWidth={650}
        // px={[3, 5]}
        justifyContent="center"
        ratio={3 / 4}
        w={[1, 1, 1 / 2]}
      >
        <Heading fonts="sans" color="text" fontSize={[6]} py={2}>
          Fabian Lucien Dophemont
        </Heading>
        <Text fonts="sans" color="text" lineHeight="1.75" fontSize={[3]} py={3}>
          Has been a professional musician, coffee roaster, QA developer, frontend developer,
          Android developer, small business owner, photograper, product designer and product
          manager. Always becoming and shifting as context (deliberately) requires. Living in Ghent
          and Amsterdam.
        </Text>
        <CTA
          py={3}
          m={['12px auto', '12px 0px']}
          onClick={() => {
            animateScrollTo(document.querySelector('#startups'));
          }}
        >
          learn more
        </CTA>
      </FullScreenBox>
      <Image src={illu} px={[3, 5]} w={[1, 1 / 2]} />
    </MaxWidthContainer>
  </FullScreenFlex>
);

export default Hero;
