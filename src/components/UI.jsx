import { Flex, Heading, Box, Container } from 'rebass';
import media from '../utils/media';

export const FullScreenFlex = Flex.extend`
  height: 96vh;
  justify-content: center;
  ${media.small`
    height: auto;
  `};
`;

export const FullScreenBox = Box.extend`
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${media.small`
    min-height: 60vh;
    height: auto;
    text-align: center;
  `};
`;
export const MaxWidthContainer = Container.extend`
  max-width: 1200px;
  padding: ${props => props.p || '4%'};
  display: flex;
  flex-direction: ${props => props.flexDirection || 'none'};
  ${media.small`
    flex-direction: column;
  `};
`;

export const StyledHeader = Heading.extend`
  text-transform: ${props => props.texttransform || 'none'};
`;
