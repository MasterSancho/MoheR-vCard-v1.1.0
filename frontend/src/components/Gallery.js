import { Container, Row, Col, Carousel } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import data from '../data';

const Gallery = () => {
 return (
  <Container className='d-inline-block'>
   <Row>
    <Col>
     <Carousel controls={true}>
      <Carousel.Item interval={3000}>
       <Image src={data.image1} alt='Gallery image' height={250} />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
       <Image src={data.image2} alt='Gallery image' height={250} />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
       <Image src={data.image3} alt='Gallery image' height={250} />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
       <Image src={data.image4} alt='Gallery image' height={250} />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
       <Image src={data.image5} alt='Gallery image' height={250} />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
       <Image src={data.image6} alt='Gallery image' height={250} />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
       <Image src={data.image7} alt='Gallery image' height={250} />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
       <Image src={data.image8} alt='Gallery image' height={250} />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
       <Image src={data.image9} alt='Gallery image' height={250} />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
       <Image src={data.image10} alt='Gallery image' height={250} />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
       <Image src={data.image11} alt='Gallery image' height={250} />
      </Carousel.Item>
     </Carousel>
    </Col>
   </Row>
  </Container>
 );
};

export default Gallery;
