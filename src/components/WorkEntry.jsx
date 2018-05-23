import React from 'react';
import styled from 'styled-components';
import LazyLoad from 'react-lazyload';

// import components
import { Flex, Text, Row, Column, Image, Box } from 'rebass';
import { StyledHeader } from '../components/UI';
import ImageModal from '../components/ImageModal';

// media
import media from '../utils/media';

const StyledRow = Row.extend`
  background-color: #fafafa;
  border-radius: 4px;
  border: 0px;
  ${media.small`
        flex-direction: column;
        text-align: center;
    `};
`;

const Tag = styled.span`
  background-color: ${props => props.backgroundColor || 'blue'};
  color: white;
  text-align: center;
  font-size: 0.65em;
  padding: 4px;
  margin: 2px;
  text-transform: uppercase;
  border: 1px solid transparent;
  border-radius: 2px;
  opacity: 0.81;
`;

const StyledImage = Image.extend`
  cursor: pointer;
  border: 12px solid #ffffff;
  background-color: #ffffff;
  border-radius: 5px;
  transition: box-shadow 0.2s ease-in-out, transform 0.2s ease-in-out, transform 1s;
  transform: translateY(0);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  :hover {
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
    transform: translate(0px, -2px);
  }
`;

const LinkContainer = Box.extend`
  ${media.small`
    margin: auto;
  `};
`;

const TextContainer = Text.extend`
  background-color: #3333f1;
  border: 1px solid transparent;
  border-radius: 4px;
`;

const Link = styled.a`
  color: #fff;
  font-size: 0.8rem;
  :visited,
  :active {
  }
  :hover {
    opacity: 1;
  }
`;

const Tags = (props) => {
  const { tags } = props;
  return tags.map(tag => (
    <Tag key={tag.key} backgroundColor={tag.bgColor}>
      {tag.text}
    </Tag>
  ));
};

class WorkEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      image: '',
    };
  }

  setModal = (image, boolean) => {
    this.setState({ showModal: boolean, image });
  };

  render() {
    const { showModal } = this.state;
    const modal = showModal ? (
      <ImageModal image={this.state.image} hideModal={() => this.setModal(null, false)} />
    ) : (
      ''
    );

    const { linkText } = this.props.copy;
    const link =
      linkText !== '' ? (
        <LinkContainer width="fit-content">
          <TextContainer
            fonts="sans"
            bg="#fff"
            color="text"
            lineHeight="1.75"
            fontSize={[1]}
            mt={3}
            px={3}
            py={1}
          >
            <Link href={this.props.copy.link} target="_blank">
              {' '}
              {linkText}
            </Link>
          </TextContainer>
        </LinkContainer>
      ) : (
        ''
      );

    const renderImages = (props) => {
      const { images } = props;
      const imagesList = images.map((image, index) => (
        <Column key={`column ${index + 1}`} w={[1, 1 / 2]} my={0} p={0}>
          <StyledImage
            p={0}
            key={`image ${index + 1}`}
            m="auto"
            // onClick={() => {
            //   this.setModal(image, true);
            // }}
            src={image}
          />
        </Column>
      ));
      return (
        <Flex flexWrap="wrap" flexDirection={['column', 'row']}>
          {imagesList}
        </Flex>
      );
    };

    return (
      <LazyLoad height="100%">
        <StyledRow py={3} my={3}>
          {modal}
          <Column w={[1, 1, 1 / 2]}>
            <Flex flexDirection="column" justifyContent="left" boxShadow={1} width="auto">
              <StyledHeader
                fonts="sans"
                color="text"
                fontSize={[5]}
                py={0}
                // texttransform="uppercase"
                mb={3}
              >
                {this.props.copy.header}
              </StyledHeader>
              <Flex justifyContent={['center', 'left']} flexDirection="row" flexWrap="wrap">
                <Tags tags={this.props.copy.tags} />
              </Flex>
              <Text fonts="sans" color="text" lineHeight="1.75" fontSize={[2]} pt={4} pb={3}>
                {this.props.copy.body}
              </Text>
              {link}
            </Flex>
          </Column>
          <Column p={0} my={0} w={[1, 1, 1 / 2]}>
            {renderImages(this.props)}
          </Column>
        </StyledRow>
      </LazyLoad>
    );
  }
}
export default WorkEntry;
