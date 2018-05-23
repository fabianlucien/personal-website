import React from 'react';
import styled from 'styled-components';

// import components
import { Image, Modal, Fixed } from 'rebass';

const Container = styled.div`
  cursor: pointer;
`;

const CloseButton = styled.span`
  width: 100%;
  float: right;
  text-align: center;
  padding: 12px 0px;
  cursor: pointer;
`;

const updateParent = (props) => {
  props.hideModal();
};

const ImageModal = props => (
  <Container>
    <Fixed bg="black" top={0} right={0} bottom={0} left={0} onClick={() => updateParent(props)} />
    <Modal p={1} borderRadius="0" width="auto">
      <Image
        src={props.image}
        onLoad={() => {
          console.log('loading');
        }}
        onClick={() => updateParent(props)}
      />
      <CloseButton onClick={() => updateParent(props)}>close</CloseButton>
    </Modal>
  </Container>
);

export default ImageModal;
