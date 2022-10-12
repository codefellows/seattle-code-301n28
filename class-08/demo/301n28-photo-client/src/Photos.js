import React from 'react';
import { Accordion, Image, Container } from 'react-bootstrap';

class Photos extends React.Component {
  render() {
    return (
      <Container>
        <Accordion defaultActiveKey='0'>
          {this.props.photos.map((photo, idx) => (
            <Accordion.Item eventKey={idx} key={idx} >
              <Accordion.Header>{photo.photographer}</Accordion.Header>
              <Accordion.Body>
                <Image 
                  src={photo.img_url}
                  alt={photo.photographer}
                  style={{ width: '35rem' }}
                  rounded
                />
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </Container>
    )
  }
}

export default Photos;
